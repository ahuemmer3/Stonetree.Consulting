"""Konfiguration aus Umgebungsvariablen (siehe .env.example im Projektordner).

Zugangsdaten stehen nie im Code. Die Werte werden einmal beim ersten Zugriff
gelesen; in Tests wird get_settings über FastAPI-Dependencies ersetzt.
"""

import os
from dataclasses import dataclass
from functools import lru_cache


@dataclass(frozen=True)
class Settings:
    smtp_host: str
    smtp_port: int
    smtp_security: str  # "starttls" (Port 587) oder "ssl" (Port 465)
    smtp_user: str
    smtp_password: str
    mail_from: str
    recipient: str
    rate_limit_count: int
    rate_limit_window: int

    @property
    def mail_configured(self) -> bool:
        return bool(self.smtp_host and self.recipient and self.mail_from)


@lru_cache
def get_settings() -> Settings:
    smtp_user = os.environ.get("SMTP_USER", "")
    return Settings(
        smtp_host=os.environ.get("SMTP_HOST", ""),
        smtp_port=int(os.environ.get("SMTP_PORT", "587")),
        smtp_security=os.environ.get("SMTP_SECURITY", "starttls").lower(),
        smtp_user=smtp_user,
        smtp_password=os.environ.get("SMTP_PASSWORD", ""),
        mail_from=os.environ.get("MAIL_FROM") or smtp_user,
        recipient=os.environ.get("CONTACT_RECIPIENT", ""),
        rate_limit_count=int(os.environ.get("RATE_LIMIT_COUNT", "5")),
        rate_limit_window=int(os.environ.get("RATE_LIMIT_WINDOW", "600")),
    )
