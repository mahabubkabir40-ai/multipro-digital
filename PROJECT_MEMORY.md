# 🧠 Multipro Digital: Project Master Memory
**Last Updated**: 2026-04-24

## 🎯 Primary Goal
Scale agency revenue to $1,000 through automated site-wide SEO maintenance and "3-Link Rule" enforcement.

## 🛡️ The "3-Link Rule" Logic
- **Link #1 (Authority)**: Homepage (`/`)
- **Link #2 (Trust)**: About (`/about`) or Contact (`/contact`) — *To be replaced by Location pages once live.*
- **Link #3 (Credibility)**: External Authority (e.g., Forbes, BrightLocal, Schema.org)
- **Constraint**: Exactly 3 links per main content block.

## 📊 Analytics & Reporting (USA Only)
- **Pulse Check**: USA Date format (MM/DD/YYYY).
- **Baseline Position**: 11.4 ("moving company marketing agency").
- **Reporting Standard**: Only provide Search Console/GA4 data when explicitly requested by user.

## 🛠️ Technical Stack
- **Linking Engine**: `src/components/AutoLinker.tsx` (RegEx based, uses `links_dictionary.json`).
- **Data Script**: `node src/scripts/check-google.js` (USA Filtered).
- **Analytics**: GA4 integrated via `src/app/layout.tsx`.
- **Security**: Google Cloud JSON key is in `.gitignore` (local only).

## 📝 Ongoing Strategy
1. **Location Pages**: Future expansion (e.g., Orlando Movers Marketing).
2. **Blog Optimization**: Wrap paragraph content in `<AutoLinker>` to trigger automated SEO linking.
3. **High-Visibility Styling**: `text-brand-blue font-black underline decoration-brand-lime`.
