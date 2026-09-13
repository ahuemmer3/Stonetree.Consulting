"""Einstiegspunkt des Backends: uvicorn app.main:app

Frontend und Backend laufen im Betrieb unter derselben Domain (Caddy leitet
/api an dieses Backend weiter), in der Entwicklung übernimmt das der
Vite-Proxy. CORS ist deshalb nicht nötig.
"""

import logging

from fastapi import Depends, FastAPI

from .contact import router as contact_router
from .settings import Settings, get_settings

logging.basicConfig(level=logging.INFO)

app = FastAPI(title="stonetree API", docs_url=None, redoc_url=None, openapi_url=None)
app.include_router(contact_router)


@app.get("/api/health")
def health(settings: Settings = Depends(get_settings)) -> dict[str, bool]:
    return {"ok": True, "mail_configured": settings.mail_configured}
