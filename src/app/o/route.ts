import { after, NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  clientIp,
  clientUserAgent,
  forwardTrackingEvent,
  TRACKING_CACHE_CONTROL,
  TRACKING_ROBOTS_TAG,
  TRANSPARENT_GIF,
} from '@/lib/email-tracking';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id') ?? '';
  const ua = clientUserAgent(request.headers);
  const ip = clientIp(request.headers);

  after(() => forwardTrackingEvent({ t: 'o', id, ua, ip }));

  return new NextResponse(TRANSPARENT_GIF, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': String(TRANSPARENT_GIF.byteLength),
      'Cache-Control': TRACKING_CACHE_CONTROL,
      'X-Robots-Tag': TRACKING_ROBOTS_TAG,
    },
  });
}
