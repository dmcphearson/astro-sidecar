# Astro Sidecar

A portfolio, resume, and blog theme for [Astro](https://astro.build) with a distinctive sidebar.

Built for professionals who want a personal site that doubles as an online resume. Configure everything from a single file -- your profile, skills, education, certifications, projects, and blog are all driven by `src/config.ts`.

## Features

- Sidebar with profile photo, current role, scrolling skills, education, and certifications
- Every sidebar section independently toggleable
- Projects/tinkerings grid on the homepage
- Blog with tags, search, archives, and RSS
- Two color presets (Emerald, Sapphire) or define your own
- Theme mode: `light`, `dark`, or `auto` (toggle + system preference)
- Optional Giscus comments
- Configurable navigation
- Responsive design (sidebar collapses on mobile)
- View transitions for smooth page navigation
- SEO-friendly with Open Graph images
- Full-text search via Pagefind

## Quick Start

```bash
# Clone the repo
git clone https://github.com/dmcphearson/astro-sidecar.git my-site
cd my-site

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open `src/config.ts` and replace the demo content with your own.

## Configuration

All site content is configured in `src/config.ts`. Here's what you can customize:

### SITE
Core site settings: URL, title, description, theme mode (`light` | `dark` | `auto`), color preset (`emerald` | `sapphire` | `custom`), posts per page.

### PROFILE
Your photo, name, tagline, and current company (name, title, logo, URL). Company section is optional.

### HERO
The homepage greeting and intro paragraphs.

### SKILLS
Toggle on/off. List of skill strings displayed as scrolling tags in the sidebar.

### EDUCATION
Toggle on/off. Array of `{ degree, year, school }` entries.

### CERTIFICATIONS
Toggle on/off. Array of certification name strings.

### PROJECTS
Toggle on/off. Heading text and array of project entries with name, description, status, and optional URL.

### NAV_ITEMS
Array of `{ label, path }` for the navigation menu.

### COMMENTS
Enable/disable Giscus comments with your repo configuration.

### SOCIALS
Array of social links (GitHub, LinkedIn, Mail, etc.).

### Custom Colors

Set `colorPreset: "custom"` and provide your colors:

```ts
customColors: {
  light: {
    background: "#fafaf8",
    foreground: "#171717",
    accent: "#9333ea",
    muted: "#f3f4f6",
    border: "#e5e7eb",
  },
  dark: {
    background: "#101012",
    foreground: "#f5f5f7",
    accent: "#c084fc",
    muted: "#262628",
    border: "#373738",
  },
},
```

## Blog Posts

Create markdown files in `src/content/blog/` with this frontmatter:

```yaml
---
title: Your Post Title
author: Your Name
pubDatetime: 2026-01-15T10:00:00Z
slug: your-post-slug
featured: true
draft: false
tags:
  - tag1
  - tag2
description: A short description for previews and SEO.
---
```

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run format` | Format code with Prettier |
| `npm run lint` | Lint with ESLint |

## Acknowledgments

Inspired by [AstroPaper](https://github.com/satnaing/astro-paper) by Sat Naing.

## License

MIT
