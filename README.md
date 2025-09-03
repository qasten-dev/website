# Website

The [qasten.com](https://www.qasten.com) website.

## How to contribute

_Note: The following commands use pnpm, but you can use other package managers._

- Install dependencies: `pnpm install`
- Run dev server: `pnpm dev`
- Install [recommended extensions](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace#_recommended-extensions).

### Before deploying a change

- Make sure to preview the prod build locally with `pnpm build` and `pnpm preview`.
- Make sure to test responsivity on mobile.

### How to add a blog post

1. Add your blog Markdown to `src/blog`. It's recommended to follow the structure of existing blogs.
2. Do not forget french version on `src/blog/fr` (make sure relative links use `/fr` prefix e.g., `/fr/#contact-us`).
3. _(Optional)_ To have your post showcased on the landing page, add it to `highlightedPostsSlugs` on `HomePage.astro`.

## Favicon

Favicon was generated on [favicon.io](https://favicon.io/) with the following config:

- Font Title: JetBrains Mono
- Font Size: 125
- Font Weight: Bold 700
