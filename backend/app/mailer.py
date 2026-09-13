"""Baut die Mail aus einer Anfrage und verschickt sie per SMTP.

Funktioniert mit jedem Anbieter, der SMTP anbietet (Postfach der eigenen
Domain, Brevo, IONOS, Strato, Google Workspace ...). Welcher es ist, steht
allein in der .env.
"""

import smtplib
import ssl
from email.message import EmailMessage

from .settings import Settings


def _single_line(value: str) -> str:
    # Zeilenumbrüche in Kopfzeilen würden die Mail zerlegen (Header-Injection).
    return " ".join(value.split())


def build_message(name: str, email: str, message: str, settings: Settings) -> EmailMessage:
    msg = EmailMessage()
    msg["Subject"] = f"Anfrage über die Website von {_single_line(name)}"
    msg["From"] = settings.mail_from
    msg["To"] = settings.recipient
    # "Antworten" im Postfach geht direkt an die anfragende Person.
    msg["Reply-To"] = email
    msg.set_content(f"{message}\n\n--\nName: {name}\nE-Mail: {email}\n")
    return msg


def send_smtp(msg: EmailMessage, settings: Settings) -> None:
    context = ssl.create_default_context()
    if settings.smtp_security == "ssl":
        server = smtplib.SMTP_SSL(settings.smtp_host, settings.smtp_port, timeout=15, context=context)
    else:
        server = smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=15)
        server.starttls(context=context)

    with server:
        if settings.smtp_user:
            server.login(settings.smtp_user, settings.smtp_password)
        server.send_message(msg)
