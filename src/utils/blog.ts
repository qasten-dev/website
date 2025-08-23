import type { AstroInstance, ImageMetadata } from "astro";
import path from "node:path";

export interface Metadata {
  title: string;
  summary: string;
  date: Date;
  author: string;
  lengthMinutes: number;
  image?: {
    src: ImageMetadata;
    alt: string;
  };
}

export interface Blog extends AstroInstance {
  metadata: Metadata;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });
}

export function getPosts(currentLocale: string | undefined) {
  const dir = currentLocale === "fr" ? "/src/pages/fr/blog" : "/src/pages/blog";

  const allPosts = Object.entries(
    import.meta.glob<Blog>("@/pages/**/blog/*.astro", { eager: true }),
  );

  const localePosts = allPosts.filter(
    ([filePath]) => path.parse(filePath).dir === dir,
  );

  return localePosts
    .map(([filePath, blog]) => {
      return [path.parse(filePath).name, blog] as const;
    })
    .sort((a, b) => {
      return a[1].metadata.date.getTime() - b[1].metadata.date.getTime();
    });
}
