# Website

The [qasten.com](https://www.qasten.com) website.

## How to contribute

_Note: The following commands use pnpm, but you can use other package managers._

- Install dependencies: `pnpm install`
- Run dev server: `pnpm dev`
- Install [recommended extensions](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace#_recommended-extensions).

### Before deploying a change

- Make sure to preview the prod build locally with `pnpm build && pnpm preview`.
- Make sure to test responsivity on mobile.

### How to add a blog post

1. Add your blog Markdown to `src/blog`. It's recommended to follow the structure of existing posts.
2. Do not forget french version on `src/blog/fr` (make sure its relative links use `/fr` prefix e.g., `/fr/#contact-us`).
3. On top of the blog image in `src/assets/blog`, add the image to `public/blog/<post-id>/` with the following [aspect ratios](https://developers.google.com/search/docs/appearance/structured-data/article#article-types): 16x9, 4x3, and 1x1.
4. Fill keywords.
   - Keywords are free‑form phrases people might search for.
   - Use [Google Trends](https://trends.google.com/trends/) to compare alternatives if unsure.
   - Try to have as many (ideally more than 3) of these keywords appear literally in the post.
   - Keep the list short (ideally under 8 items).
5. Fill Topics.
   - Topics are structured concepts linked to [Wikidata](https://www.wikidata.org/) entries. They help position the blog in search engines knowledge graph.
   - If you need a new topic, add it to the topics in `blog.ts`.
   - Keep the list short (ideally under 8 items).

6. _(Optional)_ To have your post showcased on the landing page, add it to `highlightedPostsSlugs` on `HomePage.astro`.

## External services used

_Note: these are under farouk@qasten.com at the moment._

- [Umami](https://cloud.umami.is/login): Analytics
- [Formspark](https://dashboard.formspark.io/): Forms (contact, news subscription)

## Favicon

Favicon was generated on [favicon.io](https://favicon.io/) with the following config:

- Font Title: JetBrains Mono
- Font Size: 125
- Font Weight: Bold 700
