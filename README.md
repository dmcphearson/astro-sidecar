# Astro Sidecar

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub](https://img.shields.io/github/license/dmcphearson/astro-sidecar?color=%232F3741&style=for-the-badge)

A portfolio, resume, and blog theme for [Astro](https://astro.build) with a distinctive sidebar layout. Built for professionals who want a personal site that doubles as an online resume.

Configure everything from a single file -- your profile, skills, education, certifications, projects, and blog are all driven by `src/config.ts`.

[Live Demo](https://astro-sidecar.pages.dev/) | [Getting Started](https://astro-sidecar.pages.dev/posts/getting-started-with-astro-sidecar/)

## Features

- [x] Config-driven sidebar with profile, skills, education, certifications, and social links
- [x] Every sidebar section independently toggleable
- [x] Projects grid on the homepage
- [x] Blog with tags, search, archives, RSS, and pagination
- [x] Custom color themes (define your own light/dark accent colors)
- [x] Theme mode: `light`, `dark`, or `auto` (toggle + system preference)
- [x] Optional Giscus comments backed by GitHub Discussions
- [x] Full-text search via Pagefind
- [x] View transitions for smooth page navigation
- [x] Responsive design (sidebar collapses on mobile with "View my background" toggle)
- [x] Social sharing (WhatsApp, Facebook, Bluesky, Mastodon, X, Email)
- [x] Collapsible table of contents
- [x] SEO-friendly with Open Graph metadata
- [x] Accessible (keyboard navigation, screen readers, sufficient contrast)
- [x] Sitemap and RSS feed
- [x] Draft posts and scheduled publishing

## Lighthouse Score

<p align="center">
  <a href="https://pagespeed.web.dev/analysis/https-astro-sidecar-pages-dev/27rfvq88oc?form_factor=desktop">
    <img width="710" alt="Astro Sidecar Lighthouse Score" src="lighthouse-score.svg">
  </a>
</p>

## Project Structure

```
/
├── public/
│   ├── assets/          # Profile photo, company logo, post images
│   ├── fonts/           # Self-hosted Inter font files
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── icons/       # SVG icons (social, UI)
│   ├── components/      # Astro components (Sidebar, Header, Card, etc.)
│   ├── content/
│   │   └── blog/        # Markdown blog posts
│   ├── layouts/         # Page layouts (SidebarLayout, PostDetails, etc.)
│   ├── pages/           # File-based routing
│   ├── scripts/         # Client-side scripts (theme toggle)
│   ├── styles/          # Global CSS and typography
│   ├── utils/           # Post filtering, sorting, slugification
│   ├── config.ts        # All site configuration lives here
│   ├── constants.ts     # Share link definitions
│   ├── content.config.ts
│   └── types.ts         # TypeScript types for all config sections
└── astro.config.ts
```

## Quick Start

```bash
git clone https://github.com/dmcphearson/astro-sidecar.git my-site
cd my-site
npm install
npm run dev
```

Open `src/config.ts` and replace the demo content with your own.

## Configuration

All site content is configured in `src/config.ts`. Each section is typed with TypeScript for autocompletion.

| Section | Description |
|---------|-------------|
| `SITE` | URL, title, description, theme mode, custom colors, posts per page |
| `PROFILE` | Photo, name, tagline, current company (optional) |
| `HERO` | Homepage greeting and intro paragraphs |
| `SKILLS` | Scrolling skill tags in the sidebar (toggleable) |
| `EDUCATION` | Degree, year, and school entries (toggleable) |
| `CERTIFICATIONS` | Certification name strings (toggleable) |
| `PROJECTS` | Homepage project grid with name, description, status, optional URL |
| `NAV_ITEMS` | Navigation menu links |
| `COMMENTS` | Giscus comment integration |
| `SOCIALS` | Social links (GitHub, LinkedIn, Mail, Substack, etc.) |

### Custom Colors

The default theme uses a blue accent in light mode and green in dark mode. To define your own colors, set `colorPreset: "custom"` and provide light and dark values:

```ts
colorPreset: "custom",
customColors: {
  light: { background: "#fafaf8", foreground: "#171717", accent: "#9333ea", muted: "#f3f4f6", border: "#e5e7eb" },
  dark:  { background: "#101012", foreground: "#f5f5f7", accent: "#c084fc", muted: "#262628", border: "#373738" },
},
```

### Theme Modes

- `"dark"` -- dark mode only, no toggle
- `"light"` -- light mode only, no toggle
- `"auto"` -- respects system preference, shows a toggle in the nav

## Blog Posts

Create markdown files in `src/content/blog/`:

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

## Tech Stack

**Framework** - [Astro](https://astro.build/) v6
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)
**Styling** - [Tailwind CSS](https://tailwindcss.com/) v4
**Static Search** - [Pagefind](https://pagefind.app/)
**Icons** - [Tabler Icons](https://tabler-icons.io/)
**Code Formatting** - [Prettier](https://prettier.io/)
**Linting** - [ESLint](https://eslint.org)
**Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/)

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
