import "server-only";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;
const MAX_KEYS = 5000;

const hits = new Map<string, number[]>();

export type RateLimitResult =
  | { ok: true }
  | { ok: false; retryAfterSeconds: number };

/**
 * Best-effort limiter for a single server process.
 * It resets on restart and is not shared across multiple instances.
 */
export function rateLimit(key: string, now = Date.now()): RateLimitResult {
  if (hits.size > MAX_KEYS) {
    hits.clear();
  }

  const recent = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    const oldest = recent[0] ?? now;
    hits.set(key, recent);
    return {
      ok: false,
      retryAfterSeconds: Math.max(1, Math.ceil((oldest + WINDOW_MS - now) / 1000)),
    };
  }

  recent.push(now);
  hits.set(key, recent);
  return { ok: true };
}
