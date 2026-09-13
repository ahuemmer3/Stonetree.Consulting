"""POST /api/contact: nimmt das Kontaktformular an und verschickt es per Mail."""

import logging
from functools import lru_cache
from typing import Callable

from email.message import EmailMessage
from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel, ConfigDict, EmailStr, Field

from .mailer import build_message, send_smtp
from .ratelimit import RateLimiter
from .settings import Settings, get_settings

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api")

Sender = Callable[[EmailMessage, Settings], None]


class ContactRequest(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(min_length=10, max_length=5000)
    # Honeypot: im Formular unsichtbar, nur Bots füllen es aus.
    website: str = Field(default="", max_length=200)


def get_sender() -> Sender:
    return send_smtp


@lru_cache
def get_limiter() -> RateLimiter:
    settings = get_settings()
    return RateLimiter(settings.rate_limit_count, settings.rate_limit_window)


@router.post("/contact")
def send_contact(
    data: ContactRequest,
    request: Request,
    settings: Settings = Depends(get_settings),
    sender: Sender = Depends(get_sender),
    limiter: RateLimiter = Depends(get_limiter),
) -> dict[str, bool]:
    # Bots bekommen dieselbe Antwort wie Menschen, damit sie nichts merken.
    if data.website:
        return {"ok": True}

    client_ip = request.client.host if request.client else "unbekannt"
    if not limiter.allow(client_ip):
        raise HTTPException(status_code=429, detail="Zu viele Anfragen. Bitte später erneut versuchen.")

    if not settings.mail_configured:
        logger.error("Mailversand nicht eingerichtet: SMTP_HOST, SMTP_USER/MAIL_FROM oder CONTACT_RECIPIENT fehlen")
        raise HTTPException(status_code=503, detail="Versand derzeit nicht möglich.")

    msg = build_message(data.name, str(data.email), data.message, settings)
    try:
        sender(msg, settings)
    except Exception:
        logger.exception("Versand der Kontaktanfrage fehlgeschlagen")
        raise HTTPException(status_code=502, detail="Versand fehlgeschlagen.")

    return {"ok": True}
