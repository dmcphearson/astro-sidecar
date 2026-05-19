---
title: Getting Started with Astro Sidecar
author: Jane Doe
pubDatetime: 2026-01-15T10:00:00Z
slug: getting-started-with-astro-sidecar
featured: false
draft: false
tags:
  - astro
  - tutorial
description:
  A complete walkthrough of setting up your Astro Sidecar site, configuring every section, and making it your own.
---

Astro Sidecar is a portfolio, resume, and blog theme for Astro. It combines a distinctive sidebar -- featuring your profile, skills, education, and certifications -- with a clean blog layout. Everything is driven by a single configuration file, so you can go from clone to deployed in minutes.

This post walks through the full setup process and explains each configurable section.

## Table of contents

## Quick Start

Clone the repository, install dependencies, and start the dev server:

```bash
git clone https://github.com/dmcphearson/astro-sidecar.git my-site
cd my-site
npm install
npm run dev
```

Your site is now running at `http://localhost:4321`. Open `src/config.ts` to start customizing.

## The Configuration File

Everything about your site lives in `src/config.ts`. This is a typed TypeScript file, so your editor will give you autocomplete and validation as you edit. The file exports several named constants, each controlling a different part of the site.

### SITE

Core site metadata and behavior settings:

```ts
export const SITE: Site = {
  website: "https://example.com/",
  author: "Jane Doe",
  profile: "https://linkedin.com/in/janedoe",
  desc: "Developer, designer, and lifelong learner.",
  title: "Jane Doe",
  ogImage: "og-default.jpg",
  themeMode: "auto",
  colorPreset: "emerald",
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  timezone: "America/New_York",
};
```

**themeMode** controls the light/dark behavior:
- `"dark"` -- dark mode only, no toggle
- `"light"` -- light mode only, no toggle
- `"auto"` -- respects system preference, shows a toggle button in the nav

**colorPreset** selects a color scheme. Astro Sidecar ships with `"emerald"` (green accent) and `"sapphire"` (blue accent). Set it to `"custom"` and provide your own colors via the `customColors` property.

### PROFILE

Your professional identity in the sidebar:

```ts
export const PROFILE: Profile = {
  photo: "/assets/profile.webp",
  name: "Jane Doe",
  tagline: "Full-Stack Developer | Open Source Contributor",
  company: {
    name: "Acme Corp",
    title: "Senior Engineer",
    logo: "/assets/company-logo.webp",
    url: "https://example.com",
  },
};
```

Drop your profile photo into `public/assets/` at whatever path you specify. Any image format works -- PNG, JPG, WebP, SVG. The company section is optional; omit the `company` property entirely if you don't want to show a current role.

### HERO

The homepage greeting and intro text:

```ts
export const HERO: Hero = {
  greeting: "Hey there!",
  paragraphs: [
    "I'm a developer who loves building things...",
    "When I'm not writing code, you'll find me hiking...",
  ],
};
```

Each string in the `paragraphs` array renders as a separate `<p>` tag. Write as many or as few as you like.

### SKILLS

The scrolling skill tags in the sidebar:

```ts
export const SKILLS: SkillsConfig = {
  enabled: true,
  heading: "Skills & Expertise",
  items: [
    "TypeScript", "React", "Node.js", "Python",
    "AWS", "Docker", "PostgreSQL", "GraphQL",
    "Tailwind CSS", "Git", "CI/CD", "REST APIs",
  ],
};
```

Skills are automatically split into two rows. On desktop, they scroll horizontally with a seamless infinite animation (pauses on hover). On mobile, they display as a static wrapped grid. Set `enabled: false` to hide the entire section.

The animation respects `prefers-reduced-motion` -- users who have reduced motion enabled in their OS settings will see a static display instead.

### EDUCATION

Your academic background:

```ts
export const EDUCATION: EducationConfig = {
  enabled: true,
  heading: "Education",
  items: [
    { degree: "M.S. Computer Science", year: "2020", school: "State University" },
    { degree: "B.S. Software Engineering", year: "2018", school: "State University" },
  ],
};
```

Each entry renders as a card with the degree name in the accent color, year on the right, and school name below.

### CERTIFICATIONS

A simple checklist of your certifications:

```ts
export const CERTIFICATIONS: CertificationsConfig = {
  enabled: true,
  heading: "Certifications",
  items: [
    "AWS Solutions Architect",
    "Google Cloud Professional",
    "Certified Kubernetes Administrator",
  ],
};
```

### PROJECTS

The projects grid on the homepage:

```ts
export const PROJECTS: ProjectsConfig = {
  enabled: true,
  heading: "Projects",
  items: [
    {
      name: "My Cool Project",
      url: "https://github.com/janedoe/cool-project",
      description: "A CLI tool that does something useful.",
      status: "Built by me",
    },
    {
      name: "Secret Project",
      description: "Something exciting in the works.",
      status: "Work in Progress",
    },
  ],
};
```

Projects with a `url` render as clickable links. Those without render as plain text with the status tag styled differently. The `status` field is freeform -- use whatever label makes sense ("Built by me", "Contributor", "Work in Progress", "Maintainer", etc.).

### NAV_ITEMS

The navigation menu:

```ts
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/posts" },
  { label: "Topics", path: "/tags" },
];
```

Add, remove, or reorder items as needed. The search icon and theme toggle (when in auto mode) are always present and not configurable through this array.

### COMMENTS

Optional Giscus comment integration:

```ts
export const COMMENTS: CommentsConfig = {
  enabled: false,
  provider: "giscus",
  giscus: {
    repo: "",
    repoId: "",
    category: "",
    categoryId: "",
  },
};
```

Set `enabled: true` and fill in your Giscus configuration to add comments to blog posts. Visit [giscus.app](https://giscus.app) to set up a GitHub Discussions-backed comment system.

### SOCIALS

Social links displayed in the sidebar:

```ts
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/janedoe",
    linkTitle: "Jane Doe on Github",
    active: true,
  },
  // ...
];
```

Astro Sidecar includes icons for 24 platforms: Github, LinkedIn, Mail, X, Bluesky, Threads, Mastodon, YouTube, Twitch, Discord, Instagram, Facebook, TikTok, Reddit, Telegram, WhatsApp, Pinterest, Snapchat, CodePen, GitLab, Skype, Steam, Substack, and Website (globe icon). Set `active: false` to hide a social link without removing it.

## Color Themes

### Built-in Presets

**Emerald** (default) -- green accent colors, dark background.

**Sapphire** -- blue accent colors, slightly different dark background.

Switch between them by changing `colorPreset` in your SITE config.

### Custom Colors

Define your own color scheme by setting `colorPreset: "custom"` and providing light and dark variants:

```ts
export const SITE: Site = {
  // ...
  colorPreset: "custom",
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
};
```

You only need to define 5 CSS variables per mode. The entire site adapts automatically.

## Writing Blog Posts

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

Your post content here...
```

**Key fields:**
- `featured: true` highlights the post
- `draft: true` keeps it hidden from the published site
- `tags` are used for the Topics page and filtering
- `description` appears in post previews and Open Graph metadata

## Building and Deploying

Build the production site:

```bash
npm run build
```

This outputs to `./dist/`. The build includes Pagefind for full-text search, which indexes all your content automatically.

Preview the production build locally:

```bash
npm run preview
```

Deploy the `dist/` directory to any static hosting provider -- Vercel, Netlify, Cloudflare Pages, GitHub Pages, or your own server.

## Commands Reference

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run format` | Format code with Prettier |
| `npm run lint` | Lint with ESLint |

## What's Next

Astro Sidecar is designed to get out of your way. Configure once, then focus on writing. If you need to go deeper, every component is a standard Astro `.astro` file using Tailwind CSS -- no magic, no abstractions.

Happy building.
