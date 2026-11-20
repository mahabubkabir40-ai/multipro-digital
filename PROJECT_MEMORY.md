# 🧠 Multipro Digital: Project Master Memory
**Last Updated**: 2026-11-20

## 🎯 Primary Goal
Scale agency revenue to $1,000 through automated site-wide SEO maintenance and "3-Link Rule" enforcement.

## 🛡️ The "3-Link Rule" Logic
- **Link #1 (Authority)**: Homepage (`/`)
- **Link #2 (Trust)**: About (`/about`) or Contact (`/contact`) — *To be replaced by Location pages once live.*
- **Link #3 (Credibility)**: External Authority (e.g., Forbes, BrightLocal, Schema.org)
- **Constraint**: Exactly 3 links per main content block.

## 📊 Analytics & Reporting (USA Only)
- **Pulse Check**: USA Date format (MM/DD/YYYY).
- **Baseline Focus**: Epoxy flooring & concrete coatings marketing agency.
- **Reporting Standard**: Only provide Search Console/GA4 data when explicitly requested by user.

## 🛠️ Technical Stack
- **Linking Engine**: `src/components/AutoLinker.tsx` (RegEx based, uses `links_dictionary.json`).
- **Data Script**: `node src/scripts/check-google.js` (USA Filtered).
- **Analytics**: GA4 integrated via `src/app/layout.tsx`.
- **Security**: Google Cloud JSON key is in `.gitignore` (local only).

## 📬 Email Open & Click Tracking
First-party routes on `www.multiprodigital.com`. The visitor gets an immediate response. `after()` then forwards the hit (GET, following redirects) to the Apps Script exec URL. Override that URL with the `TRACKING_ENDPOINT` env var; the default lives in `src/lib/email-tracking.ts`.

- **Click**: `https://www.multiprodigital.com/go?id=<token>&u=<urlencoded url>`
  - `302` to `u` when `u` is `http` or `https` and the host is exactly `multiprodigital.com` or `www.multiprodigital.com`.
  - Also `302` to `u` when it is an `https` Google Drive file URL matching `^https://drive\.google\.com/file/d/[A-Za-z0-9_-]+/(view|preview)(\?.*)?$` (`view` or `preview`, optional query). Used by audit-video emails. No interstitial.
  - Any other `u` redirects to `https://www.multiprodigital.com`. A missing `id` still redirects. `/o` is unchanged.
- **Open pixel**: `https://www.multiprodigital.com/o?id=<token>`
  - 43-byte transparent 1×1 GIF. `Content-Type: image/gif`. `Cache-Control: no-store, no-cache, must-revalidate, private`.
- Both routes are dynamic (`force-dynamic`), send `X-Robots-Tag: noindex, nofollow`, are omitted from `src/app/sitemap.ts`, and are disallowed in `src/app/robots.ts` (`/o`, and `/go$` so `/google-business-profile` stays crawlable).
- Forwarded query: `t=o` or `t=c`, `id`, `u` on clicks (the URL actually redirected to), plus `ua` and `ip` from `User-Agent` and `x-forwarded-for` / `x-real-ip`. Apps Script `doGet` currently ignores `ua` and `ip`.

## 📝 Ongoing Strategy
1. **Location Pages**: Future expansion for targeted epoxy contractor geos (e.g., Orlando Epoxy Marketing).
2. **Blog Optimization**: Wrap paragraph content in `<AutoLinker>` to trigger automated SEO linking.
3. **High-Visibility Anchor Styling**:
   - **Dark Backgrounds**: `text-white font-bold underline decoration-brand-lime decoration-2 underline-offset-4 hover:text-brand-lime`
   - **Light Backgrounds**: `text-[#0b1f38] font-bold underline decoration-brand-lime decoration-2 underline-offset-4 hover:text-brand-lime`
   - **Utility Classes**: `.anchor-link` and `.anchor-link-dark` defined in `src/app/globals.css`.
   - **AutoLinker**: Automatically resolves dark/light modes and supports `isDark` and `linkClassName`.
