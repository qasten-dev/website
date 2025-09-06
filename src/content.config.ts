import { glob } from "astro/loaders";
import { z, defineCollection, type ImageFunction } from "astro:content";
import { team } from "@/utils/team";
import { topics } from "@/utils/blog";

type ZodEnum<L> = [keyof L, ...(keyof L)[]];

const authors = Object.keys(team) as ZodEnum<typeof team>;
const topicsKeys = Object.keys(topics) as ZodEnum<typeof topics>;

const schema = ({ image }: { image: ImageFunction }) =>
  z.object({
    title: z.string(),
    summary: z.string(),
    publishedDate: z.date(),
    lastModified: z.date().optional(),
    author: z.enum(authors),
    image: z.object({
      src: image(),
      alt: z.string(),
    }),
    keywords: z.array(z.string()),
    topics: z.array(z.enum(topicsKeys)),
  });

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/blog" }),
  schema,
});

const blogFr = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/blog/fr" }),
  schema,
});

export const collections = { blog, blogFr };
