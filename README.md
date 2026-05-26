# MERCANA — Design Studio

Luxury architecture and interior design portfolio built with Next.js 15.

## Stack

- Next.js 15 (App Router)
- Original layout styles from the reference theme (`/micasa/styles/main.css`)
- Custom overrides (`/micasa-overrides.css`)
- Portfolio images in `public/project/` (WebP)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production (Vercel)

Set environment variable:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

```bash
npm run build
npm run start
```

## Scripts

- `npm run verify-assets` — check all portfolio images exist
- `npm run resize-logos` — regenerate logo assets

## Project images

See `public/project/README.md`.
