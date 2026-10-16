# Bholu Japanese Portfolio — React + JavaScript + JSX

A responsive, frontend-only personal portfolio built from scratch with React, Vite, JavaScript/JSX, CSS, Framer Motion, and Lucide React.

## Run locally

Requirements: Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

Create a production build with:

```bash
npm run build
npm run preview
```

## What's included

- Japanese landscape-inspired hero and contact/footer visual treatment.
- Morning/evening theme toggle, saved in `localStorage` and initialized from system preference.
- Responsive mobile navigation.
- Independent falling-petal layer; respects `prefers-reduced-motion`.
- About, education, skill filters, project category filters, résumé PDF, illustrative GitHub heatmap, certificates placeholder, contact form, footer, and local portfolio assistant.
- Chatbot answers from `src/data/portfolio.js`; no external AI, API key, backend, or database.
- Contact form validates in the browser and prepares a `mailto:` email. It does not store or send the message itself.

## Assets

- `public/assets/backgrounds/hero-morning.webp`: provided scenic background.
- `public/assets/backgrounds/footer-evening.webp`: supplied alternate landscape.
- `public/assets/backgrounds/alternate-scenery.png`: supplied reference/scenery image used in About.
- `public/assets/profile/portrait.webp`: supplied portrait image.
- `public/assets/Bholu_Shubhankar_Anokha_Resume.pdf`: provided résumé PDF.

## Before publishing

1. Add verified GitHub and LinkedIn profile URLs to `src/data/portfolio.js` if you want social links shown.
2. Add actual repository/demo URLs to the `projects` entries. Until then the cards do not pretend links work.
3. Add real certificate images and details; none were provided in this upload, so the site clearly indicates that the section is awaiting assets.
4. Check the portrait and scenery cropping on your target devices.
5. Run `npm run build` and test the site on desktop and mobile.

## Notes

- GitHub activity cells are explicitly illustrative, not live or factual account statistics.
- Project visuals are generated CSS illustrations, not screenshots of deployed projects.
- The website is frontend-only. No Express, MongoDB, server endpoints, or database are used.
