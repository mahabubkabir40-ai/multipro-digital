import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  forwardTrackingEvent,
  safeClickTarget,
  TRACKING_FALLBACK_URL,
} from '../src/lib/email-tracking.ts';

const DRIVE_FILE =
  /^https:\/\/drive\.google\.com\/file\/d\/[A-Za-z0-9_-]+\/(view|preview)(\?.*)?$/;

const AUDIT_VIDEO =
  'https://drive.google.com/file/d/1_Ynduz2IbXm1WfrS9-hq8HwGOw6K12yG/view';

describe('safeClickTarget', () => {
  it('allows an audit-video Drive file view URL', () => {
    assert.equal(safeClickTarget(AUDIT_VIDEO), AUDIT_VIDEO);
    assert.match(safeClickTarget(AUDIT_VIDEO), DRIVE_FILE);
  });

  it('allows Drive file preview URLs and query strings', () => {
    const samples = [
      'https://drive.google.com/file/d/1_Ynduz2IbXm1WfrS9-hq8HwGOw6K12yG/preview',
      'https://drive.google.com/file/d/1_Ynduz2IbXm1WfrS9-hq8HwGOw6K12yG/view?usp=sharing',
      'https://drive.google.com/file/d/abc_DEF-123/preview?usp=drive_link&resourcekey=0-abc',
      'https://drive.google.com/file/d/-_AZa09/view?x=1',
    ];
    for (const sample of samples) {
      const target = safeClickTarget(sample);
      assert.equal(target, sample);
      assert.match(target, DRIVE_FILE);
    }
  });

  it('normalizes Drive host case and the default https port onto the allowed URL', () => {
    assert.equal(
      safeClickTarget('https://Drive.google.com/file/d/abc/view'),
      'https://drive.google.com/file/d/abc/view',
    );
    assert.equal(
      safeClickTarget('https://drive.google.com:443/file/d/abc/preview?usp=sharing'),
      'https://drive.google.com/file/d/abc/preview?usp=sharing',
    );
  });

  it('keeps first-party hosts, including http and credential stripping', () => {
    assert.equal(
      safeClickTarget('https://www.multiprodigital.com/contact?x=1#y'),
      'https://www.multiprodigital.com/contact?x=1#y',
    );
    assert.equal(
      safeClickTarget('http://multiprodigital.com/audit'),
      'http://multiprodigital.com/audit',
    );
    assert.equal(
      safeClickTarget('https://user:pass@www.multiprodigital.com/a'),
      'https://www.multiprodigital.com/a',
    );
    assert.equal(
      safeClickTarget('https://www.multiprodigital.com./pricing'),
      'https://www.multiprodigital.com/pricing',
    );
  });

  it('sends every other target to the homepage', () => {
    const blocked = [
      null,
      undefined,
      '',
      '   ',
      'not a url',
      '//evil.com',
      'javascript:alert(1)',
      'data:text/html,hi',
      'https://evil.com',
      'https://evil.com/file/d/abc/view',
      'https://www.multiprodigital.com.evil.com/',
      'https://multiprodigital.com.evil.com/file/d/abc/view',
      'https://notmultiprodigital.com',
      'https://sub.multiprodigital.com/',
      'http://drive.google.com/file/d/abc/view',
      'https://www.drive.google.com/file/d/abc/view',
      'https://drive.google.com.evil.com/file/d/abc/view',
      'https://drive.google.com./file/d/abc/view',
      'https://evil.com@drive.google.com/file/d/abc/view',
      'https://user:pass@drive.google.com/file/d/abc/view',
      'https://drive.google.com:444/file/d/abc/view',
      'https://drive.google.com/file/d/abc/edit',
      'https://drive.google.com/file/d/abc/view/',
      'https://drive.google.com/file/d/abc/VIEW',
      'https://drive.google.com/file/d/abc/view#frag',
      'https://drive.google.com/file/d//view',
      'https://drive.google.com/file/d/abc/view/extra',
      'https://drive.google.com/open?id=abc',
      'https://drive.google.com/uc?id=abc',
      'https://docs.google.com/document/d/abc/view',
      'https://drive.google.com/file/d/abc/view/../../evil.com',
      'https://drive.google.com//file/d/abc/view',
    ];
    for (const sample of blocked) {
      assert.equal(safeClickTarget(sample), TRACKING_FALLBACK_URL, String(sample));
    }
  });
});

describe('forwardTrackingEvent', () => {
  it('passes the click URL through as u', async () => {
    const calls = [];
    const original = globalThis.fetch;
    globalThis.fetch = async (input) => {
      calls.push(String(input));
      return new Response(null, { status: 200 });
    };

    try {
      await forwardTrackingEvent({
        t: 'c',
        id: 'TEST',
        u: AUDIT_VIDEO,
        ua: 'ua',
        ip: '127.0.0.1',
      });
    } finally {
      globalThis.fetch = original;
    }

    assert.equal(calls.length, 1);
    const logged = new URL(calls[0]);
    assert.equal(logged.searchParams.get('t'), 'c');
    assert.equal(logged.searchParams.get('id'), 'TEST');
    assert.equal(logged.searchParams.get('u'), AUDIT_VIDEO);
  });

  it('does not send u for opens', async () => {
    const calls = [];
    const original = globalThis.fetch;
    globalThis.fetch = async (input) => {
      calls.push(String(input));
      return new Response(null, { status: 200 });
    };

    try {
      await forwardTrackingEvent({
        t: 'o',
        id: 'TEST',
        u: AUDIT_VIDEO,
        ua: 'ua',
        ip: '127.0.0.1',
      });
    } finally {
      globalThis.fetch = original;
    }

    const logged = new URL(calls[0]);
    assert.equal(logged.searchParams.get('t'), 'o');
    assert.equal(logged.searchParams.get('u'), null);
  });
});
