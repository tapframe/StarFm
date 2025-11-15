# StarFM Landing Page

Premium Vite + React + shadcn/ui landing page for the StarFM facilities-management network. The project ships with a bespoke “Emerald & Gold” design system so every section feels consistent, editorial, and event-ready.

## Tech Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v3 + shadcn/ui components
- Radix primitives & Lucide icons for accessible UI foundations

## Getting Started

```bash
npm install
npm run dev   # start local dev server
npm run build # production build (also used to verify CI readiness)
```

## StarFM Theme System

The palette, typography, spacing, and surfaces live in `src/index.css` and `tailwind.config.js`. Consume the tokens with Tailwind utility classes or CSS variables to keep every page visually aligned.

### Core Palette

| Token | Value (HSL) | Usage |
| --- | --- | --- |
| `--background` | `hsl(44 40% 96%)` | Page canvas + soft gradient backdrop |
| `--foreground` | `hsl(153 27% 14%)` | Default text color |
| `--primary` | `hsl(152 52% 26%)` | CTAs, key highlights, links |
| `--secondary` | `hsl(47 40% 91%)` | Pills, secondary surfaces |
| `--accent` | `hsl(40 78% 60%)` | Gold flourishes, dividers, badges |
| `--brand-forest` | `hsl(152 45% 22%)` | Gradient bases, hero cards |
| `--brand-moss` | `hsl(151 36% 34%)` | Stat cards + hover states |
| `--brand-gold` | `hsl(40 80% 60%)` | Warm glow, outlines, icons |

All Tailwind `text-*`, `bg-*`, and `border-*` utilities map to the tokens through the config, so `bg-primary` or `text-brand-gold` automatically track future palette updates.

### Typography & Spacing

- `font-display`: Playfair Display for hero/section headings
- `font-sans`: Inter for body copy and UI chrome
 - `font-display`: Fraunces for hero/section headings (premium serif with strong editorial presence)
 - `font-sans`: Inter for body copy and UI chrome
- Container padding is centralized in `tailwind.config.js` (`center: true`, responsive padding) to keep sections aligned.

### Signature Surfaces

- `bg-hero-glow`: gradient backdrop that matches the StarFM identity
- `shadow-brand` / `shadow-card`: deep emerald drop shadows for premium depth
- `.glass-panel`: reusable glassmorphism helper (rounded corners, soft border, blur)

### How to Theme New Sections

1. **Wrap section** with `className="relative isolate"` + `bg-hero-glow` or a `bg-white/80` surface.
2. **Use tokens**: prefer `text-primary`, `bg-secondary`, `border-brand-gold/40` over raw hex values.
3. **Apply surfaces**: `glass-panel`, `shadow-brand`, and gradient backgrounds (`from-brand-forest to-brand-moss`) keep cards cohesive.
4. **Typography**: headings automatically inherit the display font; for emphasis use `tracking-[0.3em] uppercase` as seen in the hero ribbons.
5. **Document additions**: if you introduce a new token, declare it in `src/index.css` and map it through `tailwind.config.js` immediately so every page can access it.

Following the steps above ensures the landing page look extends naturally to membership, events, or training sub-pages without restyling from scratch.
