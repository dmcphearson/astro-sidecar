---
title: Adding New Posts
author: Jane Doe
pubDatetime: 2026-01-08T10:00:00Z
slug: adding-new-posts
featured: false
draft: false
tags:
  - astro
  - tutorial
description:
  How to create, format, and publish blog posts in Astro Sidecar.
---

Blog posts in Astro Sidecar are plain markdown files. Drop a `.md` file into `src/content/blog/`, and it shows up on your site.

## Table of contents

## Creating a Post

Create a new markdown file in `src/content/blog/`. The filename doesn't matter for routing -- the `slug` in your frontmatter determines the URL. But a descriptive filename helps you stay organized.

```
src/content/blog/my-first-post.md
```

## Frontmatter

Every post starts with a YAML frontmatter block. Here's the full set of fields:

```yaml
---
title: My First Post
author: Jane Doe
pubDatetime: 2026-01-15T10:00:00Z
modDatetime: 2026-01-16T10:00:00Z
slug: my-first-post
featured: true
draft: false
tags:
  - tutorial
  - getting-started
description: A short description for previews and SEO.
ogImage: /assets/my-custom-og.jpg
canonicalURL: https://example.com/original-post
---
```

### Required Fields

- **title** -- the post title, displayed on the page and in previews
- **pubDatetime** -- ISO 8601 date, used for sorting and display
- **description** -- appears in post cards, RSS feed, and Open Graph metadata
- **tags** -- at least one tag; defaults to `["others"]` if omitted

### Optional Fields

- **author** -- defaults to the `author` set in your `SITE` config
- **modDatetime** -- shows a "last modified" date if the post has been updated
- **slug** -- overrides the URL path; defaults to the filename
- **featured** -- set `true` to highlight the post on the homepage
- **draft** -- set `true` to hide the post from the published site (still visible in dev mode)
- **ogImage** -- a custom Open Graph image for social sharing
- **canonicalURL** -- point to the original if this post is cross-posted from elsewhere
- **timezone** -- override the default timezone for date display

## Writing Content

Below the frontmatter, write standard markdown. Astro Sidecar supports all the usual syntax:

**Text formatting** -- bold, italic, strikethrough, inline `code`

**Headings** -- `##` through `######` (h1 is reserved for the post title)

**Links and images** -- standard markdown syntax

**Code blocks** -- fenced with triple backticks, with syntax highlighting via Shiki. Supports `github-light` and `github-dark` themes that adapt to your color mode.

**Tables, blockquotes, lists** -- all standard markdown

### Table of Contents

To add a collapsible table of contents, include this heading anywhere in your post:

```md
## Table of contents
```

The remark-toc plugin will automatically generate a linked list of all your headings below it, wrapped in a collapsible `<details>` element.

## Draft Posts

Set `draft: true` in the frontmatter to keep a post hidden from your published site. Draft posts still appear when running `npm run dev` so you can preview them during writing. They're excluded from the production build, RSS feed, and search index.

## Featured Posts

Posts with `featured: true` get a "Featured" badge on the homepage. Use this sparingly for your best or most important content.

## Scheduled Posts

If you set `pubDatetime` to a future date, the post won't appear on the published site until that date has passed. There's a configurable margin (`scheduledPostMargin` in your `SITE` config, default 15 minutes) to account for build timing.

## Organizing Posts

Posts can be organized into subdirectories:

```
src/content/blog/
  tutorials/
    getting-started.md
    advanced-config.md
  projects/
    my-project.md
  my-standalone-post.md
```

Subdirectory names become part of the URL path. A post at `tutorials/getting-started.md` would be accessible at `/posts/tutorials/getting-started`.

## Tags

Tags are used for the Topics page and for filtering posts. Use lowercase, hyphenated names for consistency:

```yaml
tags:
  - web-development
  - astro
  - tutorial
```

Visitors can browse all posts with a given tag from the Topics page.
