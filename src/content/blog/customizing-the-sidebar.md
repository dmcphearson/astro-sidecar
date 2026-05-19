---
title: Customizing the Sidebar
author: Jane Doe
pubDatetime: 2026-01-10T10:00:00Z
slug: customizing-the-sidebar
featured: false
draft: false
tags:
  - astro
  - customization
description:
  How to configure each section of the Astro Sidecar sidebar to match your profile.
---

The sidebar is what sets Astro Sidecar apart. It's your professional identity, always visible alongside your blog content on desktop and neatly tucked behind a collapsible "View my background" toggle on mobile.

Every section is driven by `src/config.ts`. No component editing required.

## Table of contents

## Profile Photo and Name

These are always visible at the top of the sidebar. Set them in the `PROFILE` config:

```ts
export const PROFILE: Profile = {
  photo: "/assets/profile.webp",
  name: "Jane Doe",
  tagline: "Full-Stack Developer | Open Source Contributor",
};
```

Drop your photo into `public/assets/` at whatever path you specify. Any image format works. The tagline appears below your name in smaller text.

## Company Info

Show your current role and employer by adding a `company` object to `PROFILE`:

```ts
company: {
  name: "Acme Corp",
  title: "Senior Engineer",
  logo: "/assets/company-logo.webp",
  url: "https://example.com",
},
```

This renders as a card with your company logo, name (linked), and title. To hide this section entirely, just remove the `company` property from your profile config.

## Skills

The skills section displays your technical competencies. On desktop, they scroll horizontally in two rows with a seamless infinite animation. On mobile, they display as a static wrapped grid.

```ts
export const SKILLS: SkillsConfig = {
  enabled: true,
  heading: "Skills & Expertise",
  items: [
    "TypeScript", "React", "Node.js", "Python",
    "AWS", "Docker", "PostgreSQL", "GraphQL",
  ],
};
```

Skills are automatically split into two rows. The first row scrolls right, the second scrolls left. The animation pauses on hover and respects `prefers-reduced-motion` for users who have reduced motion enabled in their OS settings.

Set `enabled: false` to hide the entire section.

## Education

Display your academic background as cards with the degree name in the accent color, year on the right, and school name below:

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

## Certifications

A simple checklist with accent-colored checkmarks:

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

## Social Links

Social links appear at the bottom of the sidebar under "Connect with me." Configure them in the `SOCIALS` array:

```ts
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/janedoe",
    linkTitle: "Jane Doe on Github",
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/janedoe",
    linkTitle: "Jane Doe on LinkedIn",
    active: true,
  },
];
```

Astro Sidecar includes icons for 24 platforms. Set `active: false` to hide a social link without removing it from the config.

## Mobile Behavior

On screens smaller than the `lg` breakpoint (1024px), the sidebar collapses. Your photo, name, and tagline remain visible, while Skills, Education, Certifications, and Company info are tucked behind a "View my background" toggle. Social links stay visible below.

On desktop, the sidebar is sticky and scrollable independently of the main content area.

## Changing Section Headings

Each toggleable section has an optional `heading` property. If you don't provide one, sensible defaults are used ("Skills & Expertise", "Education", "Certifications"). Override them to match your style:

```ts
export const SKILLS: SkillsConfig = {
  enabled: true,
  heading: "What I Work With",
  items: [ ... ],
};
```
