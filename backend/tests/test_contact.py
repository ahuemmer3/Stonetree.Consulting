from email.message import EmailMessage

import pytest
from fastapi.testclient import TestClient

from app.contact import get_limiter, get_sender
from app.main import app
from app.ratelimit import RateLimiter
from app.settings import Settings, get_settings

SETTINGS = Settings(
    smtp_host="smtp.example.de",
    smtp_port=587,
    smtp_security="starttls",
    smtp_user="kontakt@example.de",
    smtp_password="geheim",
    mail_from="kontakt@example.de",
    recipient="team@example.de",
    rate_limit_count=3,
    rate_limit_window=600,
)

VALID = {"name": "Erika Muster", "email": "erika@example.org", "message": "Wir möchten über ein Projekt sprechen."}


@pytest.fixture
def sent() -> list[EmailMessage]:
    return []


@pytest.fixture
def client(sent):
    app.dependency_overrides[get_settings] = lambda: SETTINGS
    app.dependency_overrides[get_sender] = lambda: (lambda msg, settings: sent.append(msg))
    limiter = RateLimiter(SETTINGS.rate_limit_count, SETTINGS.rate_limit_window)
    app.dependency_overrides[get_limiter] = lambda: limiter
    yield TestClient(app)
    app.dependency_overrides.clear()


def test_gueltige_anfrage_wird_verschickt(client, sent):
    response = client.post("/api/contact", json=VALID)

    assert response.status_code == 200
    assert response.json() == {"ok": True}
    assert len(sent) == 1
    assert sent[0]["To"] == "team@example.de"
    assert sent[0]["Reply-To"] == "erika@example.org"
    assert "Wir möchten über ein Projekt sprechen." in sent[0].get_content()


def test_ungueltige_email_wird_abgelehnt(client, sent):
    response = client.post("/api/contact", json={**VALID, "email": "keine-adresse"})

    assert response.status_code == 422
    assert sent == []


def test_zu_kurze_nachricht_wird_abgelehnt(client, sent):
    response = client.post("/api/contact", json={**VALID, "message": "  kurz   "})

    assert response.status_code == 422
    assert sent == []


def test_honeypot_verschickt_nichts(client, sent):
    response = client.post("/api/contact", json={**VALID, "website": "http://spam.example"})

    assert response.status_code == 200
    assert sent == []


def test_zeilenumbruch_im_namen_bleibt_in_einer_kopfzeile(client, sent):
    response = client.post("/api/contact", json={**VALID, "name": "Erika\nBcc: fremd@example.org"})

    assert response.status_code == 200
    assert "\n" not in sent[0]["Subject"]
    assert sent[0]["Bcc"] is None


def test_rate_limit_greift(client, sent):
    for _ in range(SETTINGS.rate_limit_count):
        assert client.post("/api/contact", json=VALID).status_code == 200

    assert client.post("/api/contact", json=VALID).status_code == 429
    assert len(sent) == SETTINGS.rate_limit_count


def test_fehler_beim_versand_liefert_502(client):
    def kaputt(msg, settings):
        raise OSError("SMTP nicht erreichbar")

    app.dependency_overrides[get_sender] = lambda: kaputt
    assert client.post("/api/contact", json=VALID).status_code == 502


def test_ohne_mailkonfiguration_liefert_503(client, sent):
    app.dependency_overrides[get_settings] = lambda: Settings(**{**SETTINGS.__dict__, "smtp_host": ""})

    assert client.post("/api/contact", json=VALID).status_code == 503
    assert sent == []
