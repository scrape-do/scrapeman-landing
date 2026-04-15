# Scrapeman Landing Page — Claude Instructions

## Project
Landing page for Scrapeman, an HTTP client built for scraping engineers.
Sibling repo to `/Users/mert/Developer/scrapeman` (the Electron app).

## Product Context (read once, don't re-read app repo)

**What Scrapeman is:**
- Postman/Bruno alternative, scraping-first design
- Local-first, no account, no cloud sync — ever
- Git-friendly: one `.req.yaml` per request, human-readable diffs
- scrape.do integration: residential proxy, JS rendering, geo targeting — one toggle
- "Postman's paid features, free forever"

**Target users:**
1. Primary: scrape-do engineers debugging proxy/rendering flows
2. Secondary: scrape-do customers testing API requests
3. Tertiary: API developers wanting lightweight Postman alternative

**Key differentiators vs competitors:**
- vs Postman: no account, no cloud, no paywall, offline always, git-native
- vs Bruno: same philosophy (local/git) + fixes 4 critical bugs Bruno has open
- vs Insomnia: Kong killed local-first in v8, we brought it back

**Bruno's 4 bugs we fix (use these in landing copy, with issue numbers):**
- SSE body undefined → usebruno/bruno#7083
- Large response crash → usebruno/bruno#7624
- Cookie not persisting → usebruno/bruno#6903
- OAuth2 token race → usebruno/bruno#7565

**"Free what Postman paywalls":**
- History: Postman caps at 25 free → we have ∞
- Collection runs: Postman caps 25/month → we have ∞
- OAuth2 all flows: Postman paid → free
- AWS SigV4: Postman paid → free
- Response diff: Postman N/A → v1.5 free
- Git sharing: Postman paid workspaces → just use git

## Design Language
- Dark-first (#0a0a0f background)
- Accent: indigo #6366f1 / violet #a78bfa
- Font: Inter (UI) + Geist Mono (code)
- Icons: Lucide
- Tone: technical, evidence-based, respectful of competitors

## Pages
- `/` — home
- `/vs/postman` — comparison
- `/vs/bruno` — comparison (strongest page, bug evidence)
- `/vs/insomnia` — comparison
- `/features` — full feature list

## Code Style
- No emojis in code unless explicitly asked
- Comments in English
- TypeScript strict
- Tailwind classes only (no inline styles)
- Motion (Framer Motion) for animations

## Agent Workflow
- UI work: developer-ui agent
- Content/copy: product-manager agent
- Use `isolation: "worktree"` for all code-writing agents
- Commit messages: no Co-Authored-By signatures
