---
title: Introducing Astro Sidecar
author: Jane Doe
pubDatetime: 2026-01-20T10:00:00Z
slug: introducing-astro-sidecar
featured: true
draft: false
tags:
  - astro
  - announcement
description:
  A portfolio, resume, and blog theme for Astro with a sidebar-first layout, config-driven content, and built-in color themes.
---

Astro Sidecar is a theme for [Astro](https://astro.build) built around a simple idea: your professional identity should live alongside your writing, not buried on a separate page. It ships with a sidebar layout, a single config file that drives everything, and enough flexibility to make it yours without touching a component.

## Table of contents

## What It Is

A static site theme that combines three things into one layout:

- **A professional sidebar** -- profile photo, current role, skills, education, certifications, and social links. Always visible on desktop, collapsible on mobile.
- **A blog** -- markdown posts with tags, search, RSS, archives, and pagination.
- **A project showcase** -- a grid on the homepage for things you're building or contributing to.

Everything is configured in `src/config.ts`. No component editing required for basic setup.

## Sidebar Layout

The sidebar is the defining feature. On desktop, it's a sticky panel on the left side of every page. On mobile, your photo and name stay visible while the rest collapses behind a "View my background" toggle.

Every section is independently toggleable:

```ts
export const SKILLS: SkillsConfig = {
  enabled: true,
  heading: "Skills & Expertise",
  items: ["TypeScript", "React", "AWS", "Docker", ...],
};

export const EDUCATION: EducationConfig = {
  enabled: true,
  items: [
    { degree: "M.S. Computer Science", year: "2020", school: "State University" },
  ],
};

export const CERTIFICATIONS: CertificationsConfig = {
  enabled: false,  // hidden
  items: [],
};
```

Set `enabled: false` on any section to remove it entirely.

## Single Config File

One file controls everything about your site. No scattered config across multiple files or hidden settings in component props.

```ts
export const SITE: Site = {
  website: "https://example.com/",
  author: "Jane Doe",
  title: "Jane Doe",
  desc: "Developer, designer, and lifelong learner.",
  themeMode: "auto",
  colorPreset: "default",
  postPerIndex: 5,
  postPerPage: 10,
  showArchives: true,
};
```

Profile, hero text, navigation, social links, comments -- all in the same file with full TypeScript types for autocompletion.

## Custom Colors

The default theme uses a blue accent in light mode and green in dark mode. Define your own with five CSS variables:

```ts
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
```

The entire site adapts automatically.

## Theme Modes

Three options for light/dark behavior:

- `"light"` -- light mode only, no toggle
- `"dark"` -- dark mode only, no toggle
- `"auto"` -- respects system preference, shows a toggle in the nav

Theme preference persists across page navigations and view transitions.

## Blog Features

Standard blog functionality that works out of the box:

- Markdown posts with frontmatter-driven metadata
- Featured posts, draft support, scheduled publishing
- Tag-based filtering and a Topics page
- Full-text search via Pagefind
- RSS feed
- Archives page (toggleable)
- Previous/next post navigation
- Social sharing links
- Optional Giscus comments backed by GitHub Discussions

## Projects Section

Show what you're working on with a configurable grid on the homepage:

```ts
export const PROJECTS: ProjectsConfig = {
  enabled: true,
  heading: "Projects",
  items: [
    {
      name: "My CLI Tool",
      url: "https://github.com/janedoe/cli-tool",
      description: "A tool that does useful things.",
      status: "Built by me",
    },
    {
      name: "Secret Project",
      description: "Something in the works.",
      status: "Work in Progress",
    },
  ],
};
```

Projects with a URL are clickable. Those without render as plain cards.

## Quick Start

```bash
git clone https://github.com/dmcphearson/astro-sidecar.git my-site
cd my-site
npm install
npm run dev
```

Open `src/config.ts`, replace the demo content with your own, and you're live.

For a full walkthrough of every config section, see [Getting Started with Astro Sidecar](/posts/getting-started-with-astro-sidecar).

## Acknowledgements

Astro Sidecar was inspired by [AstroPaper](https://github.com/satnaing/astro-paper) by Sat Naing. It's a well-built, minimal Astro blog theme and a great starting point if you're looking for something content-focused. Sidecar took a different direction -- putting your professional profile alongside your writing -- but AstroPaper's foundation helped make that possible.
