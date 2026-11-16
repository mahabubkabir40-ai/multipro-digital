/**
 * First-party email open/click tracking.
 *
 * Click:  /go?id=<token>&u=<url>
 * Open:   /o?id=<token>
 *
 * The visitor response is sent immediately. `after()` then forwards the event
 * to the Apps Script web app, which logs it on the tracker sheet.
 *
 * doGet records ?t=o&id= (open) and ?t=c&id=&u= (click). It does not read a
 * user agent or IP (doPost would, but it requires WORKER_SECRET). `ua` and
 * `ip` are sent as extra query params so they are harmless today and available
 * if doGet starts reading them.
 */

export const TRACKING_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbw5S392u_pqhUEgnqnLxewyA6H_goYv-JGaxQhWfzl8znwIAxfd8BSZWkoK2gqM-N-Z/exec';

export const TRACKING_FALLBACK_URL = 'https://www.multiprodigital.com';

export const TRACKING_CACHE_CONTROL =
  'no-store, no-cache, must-revalidate, private';

export const TRACKING_ROBOTS_TAG = 'noindex, nofollow';

const ALLOWED_HOSTS = new Set(['multiprodigital.com', 'www.multiprodigital.com']);

/** Standard transparent 1×1 GIF89a (43 bytes). */
export const TRANSPARENT_GIF = Uint8Array.of(
  0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00,
  0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0x21, 0xf9, 0x04, 0x01, 0x00, 0x00, 0x00,
  0x00, 0x2c, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x02,
  0x44, 0x01, 0x00, 0x3b,
);

export type TrackingEvent = {
  t: 'o' | 'c';
  id: string;
  u?: string;
  ua: string;
  ip: string;
};

/**
 * http(s) URLs whose host is exactly multiprodigital.com or www.multiprodigital.com.
 * Anything else, including other schemes and lookalike hosts, uses the site root.
 */
export function safeClickTarget(raw: string | null | undefined): string {
  if (!raw) return TRACKING_FALLBACK_URL;

  let url: URL;
  try {
    url = new URL(raw.trim());
  } catch {
    return TRACKING_FALLBACK_URL;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return TRACKING_FALLBACK_URL;
  }

  const host = url.hostname.toLowerCase().replace(/\.$/, '');
  if (!ALLOWED_HOSTS.has(host)) return TRACKING_FALLBACK_URL;

  url.username = '';
  url.password = '';
  url.hostname = host;
  return url.href;
}

export function clientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first.slice(0, 80);
  }
  return (headers.get('x-real-ip')?.trim() ?? '').slice(0, 80);
}

export function clientUserAgent(headers: Headers): string {
  return (headers.get('user-agent') ?? '').slice(0, 300);
}

/** Runtime read so a TRACKING_ENDPOINT set on the host is not baked in at build. */
export function resolveTrackingEndpoint(): string {
  const override = process.env['TRACKING_ENDPOINT']?.trim();
  return override || TRACKING_ENDPOINT;
}

export async function forwardTrackingEvent(event: TrackingEvent): Promise<void> {
  try {
    const endpoint = new URL(resolveTrackingEndpoint());
    endpoint.searchParams.set('t', event.t);
    endpoint.searchParams.set('id', event.id);
    if (event.t === 'c') {
      endpoint.searchParams.set('u', event.u || TRACKING_FALLBACK_URL);
    }
    endpoint.searchParams.set('ua', event.ua);
    endpoint.searchParams.set('ip', event.ip);

    const response = await fetch(endpoint, {
      method: 'GET',
      redirect: 'follow',
      cache: 'no-store',
    });
    await response.body?.cancel();
  } catch {
    // Tracker failures must never affect the visitor response.
  }
}
