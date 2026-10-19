# Jayakumar M — Developer Portfolio

A responsive, premium-dark React + Vite portfolio focused on Python, AI/ML, computer vision, and healthcare technology.

## Run locally

Requirements: Node.js 18+.

```bash
npm install
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The deployable site is generated in `dist/`.

## Personalise before publishing

1. Open `src/main.jsx` and check the `profile` object for email, phone, LinkedIn, and GitHub.
2. The resume PDF is already included at `public/resume.pdf`. Replace it whenever the resume is updated.
3. Project repository links are intentionally blank. Add each real repository URL to the `repo` field in the matching `projects` item when available.
4. Add official publication URLs/DOIs to the publication entries when available.
5. The two award entries are separate as requested. The second is currently displayed as **“Perfint Night of Town”** with **“June 2026”** because no other official title/details were supplied; confirm its exact title before publishing.
6. Update the page description/title in `index.html` if your target role changes.

## Deploy

This is a standard Vite project and can be deployed to Vercel, Netlify, or GitHub Pages. For Vercel/Netlify, use `npm run build` as the build command and `dist` as the output directory.

## Stack

- React
- Vite
- CSS animations and responsive layouts
- Lucide React icons
