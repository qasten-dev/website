import { getCollection } from "astro:content";
import { getCollectionName } from "@/content.config";

export function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });
}

export async function getPosts(locale: string | undefined) {
  const posts = await getCollection(getCollectionName(locale));

  return posts.sort((a, b) => {
    return a.data.date.getTime() - b.data.date.getTime();
  });
}

export async function getStaticPathsImpl(locale: string | undefined) {
  const posts = await getCollection(getCollectionName(locale));

  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}
