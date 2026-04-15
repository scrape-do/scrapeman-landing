# Scrapeman Landing Page

Marketing site for [Scrapeman](https://scrapeman.io), the unlimited API client built by [scrape.do](https://scrape.do). An API client with nothing behind a paywall: unlimited history, unlimited env vars, unlimited collection runs, single-request load testing, git-friendly YAML collections, and native scrape.do proxy. Apache 2.0 on GitHub.

**Live:** https://scrapeman.io
**App repo:** [scrape-do/scrapeman](https://github.com/scrape-do/scrapeman)

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, numbers, features, terminal demo, BuiltByAI, comparison table, download CTA |
| `/postman-alternative` | The free open source Postman alternative (pricing, paid features) |
| `/bruno-alternative` | The Bruno alternative that fixes 4 open issues |
| `/insomnia-alternative` | The local-first Insomnia alternative after Kong's acquisition |
| `/features` | Full feature breakdown |

Old `/vs/postman`, `/vs/bruno`, `/vs/insomnia` paths 301-redirect to the new URLs via `public/_redirects` (Cloudflare Pages reads it from the build output root).

## SEO

- `astro.config.mjs` sets `site: 'https://scrapeman.io'` and `trailingSlash: 'never'` — required for canonical URLs and the sitemap integration.
- **Sitemap**: `@astrojs/sitemap@3.2.x` (must be 3.2.x, not 3.7+; the newer release uses an Astro 5 internal hook and crashes on Astro 4). Generates `dist/sitemap-index.xml` + `sitemap-0.xml` on every build.
- **`public/robots.txt`**: allows everything, points crawlers at `https://scrapeman.io/sitemap-index.xml`.
- **Per-page meta**: every page sets a unique title + description in `<Base>` props; alternative pages target the `<product> alternative` query directly.
- **JSON-LD**: `Base.astro` emits an `Organization` schema on every page; the home page additionally emits a `SoftwareApplication` schema (with `offers.price=0`, `operatingSystem`, `downloadUrl`, `license`) when `jsonLdSoftware={true}` is set.
- **OG image**: served from `/icon.png` (the 512×512 brand mark). Both `og:image` and `twitter:image` use the absolute URL so social cards work.
- **Per-link UTM**: every outbound `https://scrape.do/...` link carries `utm_source=scrapeman&utm_medium=landing&utm_campaign=<location>` so referral traffic is attributable in Scrape.do analytics.

## Stack

- **[Astro 4.16](https://astro.build)** — static site generation, zero JS by default
- **[@astrojs/react 4.x](https://docs.astro.build/en/guides/integrations-guide/react/)** — React islands for the AlignUI Button + Badge primitives (must be v4 to match Astro 4; v5 peer-depends on Astro 6)
- **[Tailwind CSS 3.4](https://tailwindcss.com)** — utility-first styling, dark-only
- **[AlignUI](https://alignui.com)** — Button + Badge components copied in (Radix Slot + tailwind-variants)
- **[Radix UI Slot](https://www.radix-ui.com/primitives/docs/utilities/slot)** — `asChild` polymorphism for buttons
- **[tailwind-variants](https://www.tailwind-variants.org)** — typed component variants
- **[Cloudflare Pages](https://pages.cloudflare.com)** — hosting + CDN

## Fonts

- **Inter Variable** ([@fontsource-variable/inter](https://fontsource.org/fonts/inter)) — UI sans, weights 100–900
- **Geist Mono** ([@fontsource/geist-mono](https://fontsource.org/fonts/geist-mono)) — code blocks, terminal mockups, JSON snippets
- **JetBrains Mono** — used inside the lockup SVG only (`public/scrapeman-lockup.svg`)

Both web fonts self-host via `@fontsource` packages and are imported once in `src/styles/global.css`.

## Brand & design tokens

The whole color system is in `src/styles/global.css` as CSS custom properties (and mirrored in `tailwind.config.mjs` as `theme.extend.colors`). Dark-only.

| Token | Value | Usage |
|---|---|---|
| `--bg-white-0` | `#0a0a0f` | Page background |
| `--bg-weak-50` | `#111118` | Card background |
| `--bg-soft-200` | `#16161f` | Sidebar / elevated |
| `--bg-sub-300` | `#1a1a24` | Pressed / active |
| `--text-strong-950` | `#f8f8ff` | Primary text |
| `--text-sub-600` | `#a1a1aa` | Secondary text |
| `--text-soft-400` | `#71717a` | Tertiary / muted |
| `--stroke-soft-200` | `#1e1e2e` | Borders |
| `--stroke-strong-950` | `#2d2d3d` | Strong borders |
| `--primary-base` | `#ff6c37` | **scrape-do orange (brand accent)** |
| `--primary-light` | `#ff8f66` | Hover, links |
| `--primary-dark` | `#e5541f` | Pressed |
| `--primary-alpha-10` | `#ff6c371a` | Tinted backgrounds, glows |
| `--primary-alpha-20` | `#ff6c3733` | Stronger tints |
| `--success-base` | `#22c55e` | OK pills, status dots |
| `--error-base` | `#ef4444` | Error pills |

The `gradient-text` utility uses a 3-stop orange gradient (`#ffb388 → #ff8f66 → #ff6c37`) for highlight phrases in headlines.

## Logo & icons

The real Scrapeman mark lives in [`scrape-do/scrapeman` repo `assets/logos/`](https://github.com/scrape-do/scrapeman/tree/main/assets/logos). Files copied into `public/` for the landing:

| File | Source | Usage |
|---|---|---|
| `public/favicon.svg` | `scrapeman-mark.svg` (orange hook glyph) | Browser tab icon (modern), mask-icon |
| `public/icon.png` | `scrapeman/assets/icons/icon-512.png` | PNG fallback, apple-touch-icon |
| `public/scrapeman-mark.svg` | `scrapeman/assets/logos/scrapeman-mark.svg` | Reference / OG fallback |
| `public/scrapeman-lockup.svg` | `scrapeman/assets/logos/scrapeman-lockup.svg` | Reference / OG fallback (JetBrains Mono wordmark) |

The mark is a single orange path on `viewBox="4 14 56 40"` (cropped from the source `0 0 64 64` to optically center next to the wordmark in the header/footer). All inline UI icons are hand-rolled SVG paths styled with `currentColor` and `stroke-width="1.5"`, no icon library at runtime.

## Project structure

```
scrapeman-landing/
├── public/                          # static assets, served at site root
│   ├── favicon.svg                  # orange hook mark, browser tab
│   ├── icon.png                     # 512x512 PNG fallback / apple-touch
│   ├── scrapeman-mark.svg           # reference copy of the mark
│   └── scrapeman-lockup.svg         # reference copy of the wordmark lockup
│
├── src/
│   ├── layouts/
│   │   └── Base.astro               # <html>, meta, favicon links, OG, intersection observer
│   │
│   ├── pages/
│   │   ├── index.astro              # home (assembles the home section components)
│   │   ├── features.astro           # full feature list grouped by capability
│   │   └── vs/
│   │       ├── postman.astro        # pricing + paid-feature comparison
│   │       ├── bruno.astro          # 4 open-bug evidence cards
│   │       └── insomnia.astro       # Kong acquisition timeline
│   │
│   ├── components/
│   │   ├── ui/                      # AlignUI primitives (React islands)
│   │   │   ├── Button.tsx           # Radix Slot + tailwind-variants, asChild support
│   │   │   └── Badge.tsx            # success / error / primary / neutral variants
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.astro         # fixed top bar, real orange mark, nav, GitHub + Download
│   │   │   └── Footer.astro         # 3-column footer, Compare / Product / Open Source
│   │   │
│   │   └── home/                    # home page sections, top-to-bottom
│   │       ├── Hero.astro           # badge, h1, sub, CTAs, app mockup, trust signals
│   │       ├── NumbersBar.astro     # ∞ history · ∞ env vars · ∞ runs · 5 auth · $0
│   │       ├── FeatureGrid.astro    # 6 feature cards (Postman-paid + scrape.do native)
│   │       ├── FeatureCard.astro    # sub-component, owns set:html for icon (Astro JSX rule)
│   │       ├── TerminalDemo.astro   # 3-step workflow + fake terminal panel
│   │       ├── BuiltByAI.astro      # "vibe-coded by humans and AI" section
│   │       ├── ComparisonTable.astro # 12 rows: Scrapeman vs Postman/Bruno/Insomnia
│   │       └── DownloadCTA.astro    # download buttons, three trust cards
│   │
│   ├── styles/
│   │   └── global.css               # @font imports, design tokens, .reveal, .gradient-text, .glow-card, .hero-bg
│   │
│   └── utils/
│       └── tv.ts                    # tailwind-variants + tailwind-merge wrapper
│
├── astro.config.mjs                 # tailwind() + react() integrations, output: 'static'
├── tailwind.config.mjs              # design tokens mirror, custom keyframes (fade-up, blink, pulse-green)
├── package.json                     # @astrojs/react MUST be ^4.x, not ^5
├── .githooks/pre-push               # runs `npm run build` before every push
└── README.md
```

## Astro template gotcha (worth knowing)

Astro directives that contain `:` in the name (`set:html`, `client:load`, `client:visible`, …) **cannot** appear inside `{ … }` JavaScript expression contexts (ternaries, `.map()` callbacks). esbuild treats `:` as a JS token and bails. `class:list` works because the Astro compiler transforms it before esbuild sees it.

Workarounds used in this codebase:
- Icons that need `set:html` inside `.map()` are rendered via a sub-component (`FeatureCard.astro` is the canonical example).
- Yes/No badges in `ComparisonTable.astro` use plain `<span>` elements with the Badge classes inlined, instead of a React `<Badge>` component inside ternaries.

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

## License

Apache 2.0, same as the [main app](https://github.com/scrape-do/scrapeman). The Scrapeman name and the orange hook mark are trademarks of scrape-do and are not covered by the license.
