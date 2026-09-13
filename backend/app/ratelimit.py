"""Einfaches Rate-Limit im Speicher: höchstens N Anfragen je IP pro Zeitfenster.

Reicht für einen einzelnen Prozess auf einem Server. Nach einem Neustart
beginnt die Zählung von vorn, das ist für ein Kontaktformular unkritisch.
"""

import time
from collections import deque
from threading import Lock


class RateLimiter:
    def __init__(self, count: int, window_seconds: int) -> None:
        self.count = count
        self.window = window_seconds
        self._hits: dict[str, deque[float]] = {}
        self._lock = Lock()

    def allow(self, key: str) -> bool:
        now = time.monotonic()
        with self._lock:
            hits = self._hits.setdefault(key, deque())
            while hits and now - hits[0] > self.window:
                hits.popleft()
            if len(hits) >= self.count:
                return False
            hits.append(now)
            return True
