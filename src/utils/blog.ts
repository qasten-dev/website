import { getCollection } from "astro:content";
import { getCollectionName } from "@/content.config";

function capitalizeFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDate(date: Date, locale: string | undefined) {
  return capitalizeFirst(
    date.toLocaleString(locale, {
      year: "numeric",
      month: "long",
    }),
  );
}

export async function getPosts(locale: string | undefined) {
  const posts = await getCollection(getCollectionName(locale));

  return posts.sort((a, b) => {
    return b.data.publishedDate.getTime() - a.data.publishedDate.getTime();
  });
}

export async function getStaticPathsImpl(locale: string | undefined) {
  const posts = await getCollection(getCollectionName(locale));

  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}
