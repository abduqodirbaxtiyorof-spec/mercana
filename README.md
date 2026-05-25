# MICASA Portfolio (Next.js)

Original [MICASA](https://www.micasa-design.com) layout **1:1** — navbar, hero, typography, animations, footer.

**Only customized:** portfolio images from `public/project/` and orientation-based gallery layout.

## Images

```
public/project/
├── bedroom/
├── bassen/
├── kuhnya/
└── sanuzel/
```

## Gallery rules (project detail page)

- Vertical → side-by-side (`col-lg-6` pairs)
- Horizontal → full width (`col-sm-12`)
- Aspect ratio preserved — no `object-cover` crop (`micasa-overrides.css`)

## Dev

```powershell
npm install --ignore-scripts
npm run dev
```

Open http://localhost:3000
