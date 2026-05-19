---
title: Setting Up Giscus Comments
author: Jane Doe
pubDatetime: 2026-01-05T10:00:00Z
slug: setting-up-giscus-comments
featured: false
draft: false
tags:
  - astro
  - tutorial
description:
  Add GitHub Discussions-backed comments to your Astro Sidecar blog posts with Giscus.
---

Astro Sidecar has built-in support for [Giscus](https://giscus.app), a comment system powered by GitHub Discussions. Visitors comment using their GitHub account, and every conversation lives in your repo's Discussions tab.

## Table of contents

## Prerequisites

You'll need:

1. A **public** GitHub repository (Giscus reads Discussions via the GitHub API, which requires public access)
2. The **Discussions** feature enabled on that repository
3. The **Giscus app** installed on the repository

## Step 1: Enable Discussions

Go to your repository on GitHub, then **Settings > General**. Scroll down to the **Features** section and check the box for **Discussions**.

## Step 2: Install the Giscus App

Visit [github.com/apps/giscus](https://github.com/apps/giscus) and click **Install**. Select the repository you want to use for comments. You can use the same repo as your site or a separate one dedicated to discussions.

## Step 3: Create a Discussion Category

In your repository's **Discussions** tab, create a new category (or use an existing one like "Announcements"). A dedicated category like "Blog Comments" keeps things organized.

## Step 4: Get Your Giscus Config

Visit [giscus.app](https://giscus.app) and fill in the configuration form:

- **Repository** -- enter your repo in `owner/repo` format
- **Discussion Category** -- select the category you created
- **Mapping** -- Astro Sidecar uses "title" mapping by default (the post title becomes the Discussion title)
- **Theme** -- this is handled by the theme, so any selection here is fine

The site will generate a `<script>` tag with your configuration values. You need four values from it:

- `data-repo` -- your repository (e.g., `janedoe/my-site`)
- `data-repo-id` -- a base64 ID (e.g., `R_kgDOxxxxxx`)
- `data-category` -- the category name (e.g., `Blog Comments`)
- `data-category-id` -- the category ID (e.g., `DIC_kwDOxxxxxxxx`)

## Step 5: Update Your Config

Open `src/config.ts` and update the `COMMENTS` section with your values:

```ts
export const COMMENTS: CommentsConfig = {
  enabled: true,
  provider: "giscus",
  giscus: {
    repo: "janedoe/my-site",
    repoId: "R_kgDOxxxxxx",
    category: "Blog Comments",
    categoryId: "DIC_kwDOxxxxxxxx",
  },
};
```

That's it. Comments will now appear at the bottom of every blog post.

## How It Works

When a visitor loads a blog post, Astro Sidecar injects the Giscus script which creates an iframe at the bottom of the article. The iframe loads the comment thread from your GitHub Discussions, matched by post title.

If no Discussion exists yet for a post, Giscus creates one automatically when the first comment is submitted.

## Disabling Comments

Set `enabled: false` in the `COMMENTS` config to remove comments from all posts:

```ts
export const COMMENTS: CommentsConfig = {
  enabled: false,
  provider: "giscus",
};
```

## Notes

- Comments only appear on individual blog post pages, not on the homepage or post list
- Visitors need a GitHub account to comment
- You moderate comments through your repository's Discussions tab, with all the same tools GitHub provides (locking, deleting, pinning)
- Giscus supports reactions on both the Discussion and individual comments
