import { after, NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  clientIp,
  clientUserAgent,
  forwardTrackingEvent,
  safeClickTarget,
  TRACKING_CACHE_CONTROL,
  TRACKING_ROBOTS_TAG,
} from '@/lib/email-tracking';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id') ?? '';
  const target = safeClickTarget(request.nextUrl.searchParams.get('u'));
  const ua = clientUserAgent(request.headers);
  const ip = clientIp(request.headers);

  after(() => forwardTrackingEvent({ t: 'c', id, u: target, ua, ip }));

  return NextResponse.redirect(target, {
    status: 302,
    headers: {
      'Cache-Control': TRACKING_CACHE_CONTROL,
      'X-Robots-Tag': TRACKING_ROBOTS_TAG,
    },
  });
}
