# Code Review: Header.astro & Footer.astro

Reviewed against the AlignUI token spec and Button/Badge component contract.

---

## Header.astro

### AlignUI token usage

**Issues:**

1. `border-border/50` (line 12) — uses the old Tailwind `border` alias with opacity modifier. Should be `border-[var(--stroke-soft-200)]` with opacity via inline style or a separate token. The `/50` opacity syntax works with Tailwind color aliases but not with CSS custom properties. Risk: if the old alias is removed, this silently breaks.

2. `bg-bg/80` (line 12) — same problem. Should be `bg-[var(--bg-white-0)]` with explicit opacity, e.g. `style="background-color: color-mix(in srgb, var(--bg-white-0) 80%, transparent);"` or keep the Tailwind alias as a bridge token.

3. `bg-accent` (line 17, logo background) — still using old Tailwind alias. Should be `bg-[var(--primary-base)]`.

4. `text-ink-1` (line 23, brand name) — old alias. Should be `text-[var(--text-strong-950)]`.

5. `text-ink-1 bg-bg-surface` (line 33, active nav link) — both use old aliases. Should use `var(--text-strong-950)` and `var(--bg-weak-50)` respectively.

6. `text-ink-2 hover:text-ink-1 hover:bg-bg-surface/60` (line 34, inactive nav link) — three old aliases. `text-ink-2` → `var(--text-sub-600)`, `text-ink-1` → `var(--text-strong-950)`, `bg-bg-surface` → `var(--bg-weak-50)`.

7. `text-ink-2 hover:text-ink-1` (line 47, GitHub link) — old aliases.

### Button/Badge component usage

8. The "Download" CTA (line 55) uses `class="btn-primary text-xs px-4 py-2"` — a raw CSS class. This should be `<Button variant="primary" size="sm" asChild client:load><a href="#download">...</a></Button>`. The `btn-primary` class is a legacy component style that circumvents the Button component's size/variant system.

### Missed token opportunities

9. The logo icon `fill="white"` and `stroke="white"` (lines 18–19) are hardcoded. Low severity for an SVG icon, but worth noting.

### Overall quality

The header is structurally solid — correct fixed positioning, backdrop blur, active-state highlighting. The main concern is that it was not updated alongside the home sections: it still depends entirely on old Tailwind aliases (`bg-bg`, `text-ink-*`, `border-border`, `bg-accent`, `btn-primary`). If the old aliases are removed in a future cleanup, the header will break. The "Download" button not using `<Button>` is the most impactful miss — it bypasses the focus ring, variant tokens, and size system provided by the component.

---

## Footer.astro

### AlignUI token usage

**Issues:**

1. `border-border` (line 5, top border) — old alias. Should be `border-[var(--stroke-soft-200)]`.

2. `bg-accent` (line 12, logo background) — old alias. Should be `bg-[var(--primary-base)]`.

3. `text-ink-1` (line 17, brand name; line 28, column headings) — old alias. Should be `var(--text-strong-950)`.

4. `text-ink-3` (lines 19, 30, 55) — old alias. Should be `var(--text-soft-400)`.

5. `border-border` (line 55, bottom rule) — old alias.

6. `text-accent-light` (line 57, scrape.do link) — old alias. Should be `var(--primary-light)`.

### Button/Badge component usage

No Button or Badge components are needed in the footer. No issues here.

### Missed token opportunities

7. The `hover:text-ink-1` classes on footer links (lines 31–33, 38–40, 47) are old aliases. Should be `hover:text-[var(--text-strong-950)]`.

8. SVG icon fill/stroke values use `fill="white"` (hardcoded) — minor, consistent with the header.

### Overall quality

The footer is clean and minimal — correct layout, good link grouping. Like the header, it was not updated to AlignUI tokens and still relies fully on old Tailwind color aliases. The scope of changes needed is smaller than the header (no interactive components, just color tokens). Priority: medium. The footer is low-visibility but will break at the same time as the header if aliases are removed.

---

## Summary table

| File | Token gaps | Button/Badge gaps | Severity |
|------|-----------|------------------|----------|
| Header.astro | 7 instances of old aliases | `btn-primary` on Download CTA instead of `<Button>` | High |
| Footer.astro | 8 instances of old aliases | None needed | Medium |

**Recommended action:** In a follow-up task, port both layout files to AlignUI tokens using the same pattern applied to the home sections. The Header's Download button should become `<Button variant="primary" size="sm" asChild client:load>`.
