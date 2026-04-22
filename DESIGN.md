# Design Brief: Premium Enterprise Sales CRM

## Direction & Tone
Refined minimalism with editorial clarity. Brutalist in data presentation, sophisticated in enterprise authority. Zero playfulness—every pixel serves sales confidence and forecast transparency. Long-session analyst workstation optimized for dark mode.

## Differentiation
**Success-state saturation choreography**: Won deals render in vibrant forest green; lost/urgent in warm reds; pending in cautious amber. Instant visual feedback on pipeline health without reading labels.

## Palette
| Token | OKLCH | Purpose |
|-------|-------|---------|
| Primary (Indigo) | 50.5 0.12 243 | Authority, trust, CTAs, pipeline |
| Accent (Purple) | 52 0.13 270 | Secondary highlights, differentiation |
| Success (Green) | 72 0.17 152 | Won deals, closed revenue, positive momentum |
| Warning (Amber) | 72 0.15 84 | Pending actions, follow-ups, caution |
| Destructive (Red) | 55 0.22 25 | Lost deals, urgent, critical alerts |
| Neutral (Warm Grey) | 0.12/0.95 (L varies) | Backgrounds, borders, secondary text |

## Typography
- **Display** (Headers, KPI labels): Space Grotesk – geometric authority, 700 weight for emphasis
- **Body** (Content, tables, descriptions): Satoshi – modern clarity, superior readability for financial data
- **Mono** (Code, IDs, formatted data): JetBrains Mono – engineering credibility, system outputs

## Elevation & Depth
- **Base**: `bg-background` with warm neutral tone
- **Cards/Containers**: `bg-card` with 24px radius, subtle shadow (2px 8px)
- **Modals/Popovers**: Elevated card treatment, 8px 24px shadow, glass overlay
- **Hover/Active**: Indigo ring at 50.5/0.12/243, no opacity – always visible

## Structural Zones
| Zone | Treatment | Rationale |
|------|-----------|-----------|
| Sidebar | Warm neutral bg, subtle border-right | Always visible on desktop; anchors navigation hierarchy |
| Header/Navbar | Same as sidebar; thin border-bottom | Reinforces top-level hierarchy, search prominence |
| Main Content | Lighter background; card-based grid | Maximizes focus on data layers; card elevation creates rhythm |
| Modals | Popover bg (slightly elevated), glass effect | Non-intrusive but visually distinct from main content |
| Footer (if present) | Muted bg; border-top | Separates secondary content (settings, footer links) |

## Spacing & Rhythm
- **Grid basis**: 8px (Tailwind default)
- **Content padding**: 24px (3 × grid), 32px (4 × grid) for card interiors
- **Gap between sections**: 16px (2 × grid) to 24px (3 × grid)
- **Density**: Tables 12px row padding; KPI cards 20px padding

## Component Patterns
- **Buttons**: Indigo primary (500/0.12/243), white text; secondary muted; destructive always red
- **Inputs**: Border on focus = ring (indigo), no fill until typing
- **Tables**: Zebra striping via `bg-muted/30` every other row; hover lightens 1 step
- **Cards**: 24px radius, soft shadow, subtle border, glass effect optional on hover
- **Badges**: Saturated semantic color (success/warning/destructive); text white for visibility

## Motion
- **Micro**: `.transition-smooth` (0.3s cubic-bezier) on hover states, color changes, borders
- **Macro**: Slide-in modals (0.25s), fade on page transitions (0.15s)
- **Principle**: Purposeful, never distracting. No bounce; no elastic easing for professional context.

## Constraints
- **Dark mode first** – optimized for long analyst sessions; light mode secondary
- **Accessibility**: AA+ contrast in both modes; focus states always visible
- **Responsiveness**: Mobile-first; collapse sidebar on <768px to bottom drawer
- **No AI aesthetics**: Zero generic gradients, no purple glow effects, no trendy animations

## Signature Detail
Semantic color saturation on win/loss/pending states creates instant pipeline health readability. Warm neutral base prevents cold corporate fatigue while indigo/purple accent maintains premium tech credibility.
