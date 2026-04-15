# Scrapeman Landing Page

Marketing site for [Scrapeman](https://scrapeman.io) — the local-first HTTP client built for scraping engineers.

**Live:** https://scrapeman.io

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, feature grid, comparison table, download CTA |
| `/vs/postman` | Scrapeman vs Postman |
| `/vs/bruno` | Scrapeman vs Bruno (4 open bug cards with evidence) |
| `/vs/insomnia` | Scrapeman vs Insomnia (Kong acquisition timeline) |
| `/features` | Full feature breakdown |

## Stack

- **[Astro](https://astro.build)** — static site generation, zero JS by default
- **[Tailwind CSS v3](https://tailwindcss.com)** — utility-first styling
- **[Cloudflare Pages](https://pages.cloudflare.com)** — hosting + CDN
- Inter Variable + Geist Mono fonts

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output → dist/
npm run preview   # preview the build locally
```

> A `pre-push` git hook runs `npm run build` before every push. Code that doesn't build cannot be pushed.

## Deployment

Hosted on Cloudflare Pages. Every push to `main` triggers a deploy automatically.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20 |

## App Repository

The Scrapeman desktop app (Electron + React + TypeScript) lives at [scrape-do/scrapeman](https://github.com/scrape-do/scrapeman).
