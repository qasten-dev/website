import { glob } from "astro/loaders";
import {
  z,
  defineCollection,
  type CollectionEntry,
  type ImageFunction,
} from "astro:content";
import { teamKeys } from "@/utils/team";

const schema = ({ image }: { image: ImageFunction }) =>
  z.object({
    title: z.string(),
    summary: z.string(),
    publishedDate: z.date(),
    lastModified: z.date().optional(),
    author: z.enum(teamKeys),
    lengthInMinutes: z.number(),
    image: z.object({
      src: image(),
      alt: z.string(),
    }),
  });

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/blog" }),
  schema,
});

const blogFr = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/blog/fr" }),
  schema,
});

export const getCollectionName = (locale: string | undefined) =>
  locale === "fr" ? "blogFr" : "blog";

export type Blog = CollectionEntry<"blog">;

export const collections = { blog, blogFr };
