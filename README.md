# Sanjaysena D. – HR & Talent Acquisition Portfolio

A single-page, responsive portfolio built with React, Vite, Tailwind CSS v4, Framer Motion and Lucide React. It has no backend or database; all content comes from one data file.

## Tech stack
React 19 · Vite 7 · Tailwind CSS 4 (`@tailwindcss/vite`) · Framer Motion · Lucide React · Manrope font (Google Fonts, falls back to system sans-serif)

## Project structure
```
hr-portfolio/
├── public/
│   ├── images/          # put profile.jpg here
│   ├── documents/       # put Sanjaysena_D_Resume.pdf here
│   └── favicon.svg
├── src/
│   ├── components/      # Navbar, Hero, Stats, About, Expertise, Experience,
│   │                    # Initiatives, Education, Contact, Footer, SectionHeading, icons
│   ├── data/portfolioData.js   # ALL site content
│   ├── App.jsx  main.jsx  index.css
├── index.html  vite.config.js  package.json
```

## Getting started
Requires Node.js 18+ (20+ recommended).

```bash
npm install        # install dependencies
npm run dev        # start dev server (http://localhost:5173)
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Updating content
Edit `src/data/portfolioData.js` (profile, stats, about, expertise, experience, initiatives, education, contact). Components read from it, so no other file needs to change.

## Replacing the profile photo
Save a square image (about 600×600 px) as `public/images/profile.jpg`. To use another name or format, change `profile.photo` in `portfolioData.js`. Until a photo exists, an "SS" monogram placeholder is shown.

## Adding the resume PDF
Save the PDF as `public/documents/Sanjaysena_D_Resume.pdf` (or change `profile.resume`). The **Download Resume** button checks that a real PDF exists; if not, it shows a short message instead of downloading a broken file.

## Deploying
Run `npm run build`, then upload the `dist/` folder to any static host:
- **Netlify / Vercel / Cloudflare Pages:** connect the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.js`, build, and publish `dist/`.

## Notes
- Statistics (5 years recruitment, 3 years campus recruitment) come from the resume and are self-reported, not independently verified. No other metrics are invented.
- There is no contact form; contact is via email, LinkedIn and phone links.
