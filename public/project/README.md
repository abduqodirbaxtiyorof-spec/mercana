# Project images

Place your renders in category folders. The site auto-detects all images at build time.

## Structure

```
public/project/
├── bedroom/          ← images directly, OR subfolders per project
│   ├── 01-render.webp
│   └── luxury-suite/
│       ├── hero.webp
│       └── detail.webp
├── bassen/
├── kuhnya/
└── sanuzel/
```

## Rules

- Supported: `.webp`, `.png`
- Use `.webp` for all portfolio renders (recommended)
- First image (alphabetically) = hero on project page
- Horizontal renders display full width in gallery
- Vertical renders display side-by-side (pairs)
- Original aspect ratio is preserved (no cropping)

## Categories

| Folder   | Label      |
|----------|------------|
| bedroom  | Bedroom    |
| bassen   | Pool & Spa |
| kuhnya   | Kitchen    |
| sanuzel  | Bathroom   |
