# Portfolio — React + Vite

A component-wise portfolio website with a dark editorial aesthetic.

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx               ← Root component (composes all sections)
    ├── styles/
    │   └── globals.css       ← Design tokens, reset, utility classes
    ├── data/
    │   └── portfolio.js      ← ✏️  Edit this to personalise all content
    └── components/
        ├── Cursor.jsx        ← Custom animated cursor
        ├── Navbar.jsx        ← Sticky navigation with scroll behaviour
        ├── Hero.jsx          ← Full-screen hero with stats card
        ├── About.jsx         ← Bio + animated skill bars
        ├── Projects.jsx      ← 6-card project grid
        ├── Experience.jsx    ← Sticky-aside timeline
        ├── Contact.jsx       ← Social links + contact form
        └── Footer.jsx        ← Minimal footer
```

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Personalise

All text content lives in **`src/data/portfolio.js`** — edit your name,
role, tagline, projects, experience, and social links there.

Design tokens (colours, fonts) are in **`src/styles/globals.css`** under `:root`.# Portfolio
