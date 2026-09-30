# Faiez Azam Portfolio

Next.js App Router + TypeScript conversion of the supplied portfolio HTML. All original text, seven images, project URLs, contact links, and section anchors are preserved. Each section lives in `components/`; styles live in `app/globals.css`; extracted images live in `public/images/`.

## Run locally

Install Node.js 20.9 or newer, then run from this folder:

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run typecheck
npm run build
npm start
```

## Deploy on Vercel

1. Extract this project and commit its contents to your GitHub repository with `package.json` at the repository root (or select this folder as Vercel's Root Directory).
2. In Vercel, import the repository and select **Next.js** as the framework preset.
3. Keep the default build and output settings, then click **Deploy**. No environment variables are required.

## Edit content

Edit the relevant section component, such as `components/Portfolio.tsx` or `components/Experience.tsx`. Update site metadata in `app/layout.tsx`. Replace images under `public/images/` and update image dimensions if the replacement size differs.

Images use `next/image`; the page is rendered with Server Components and needs no client JavaScript for its anchor links. External links include `noopener noreferrer`. The conversion adds a skip link, visible keyboard focus, reduced-motion support, and narrow-screen overflow fixes.
