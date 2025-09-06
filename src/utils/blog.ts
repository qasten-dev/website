import { getCollection, type CollectionEntry } from "astro:content";

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

export const getCollectionName = (locale: string | undefined) =>
  locale === "fr" ? "blogFr" : "blog";

export type Blog = CollectionEntry<"blog">;

export const topics = {
  "artificial-intelligence": {
    en: "Artificial intelligence",
    fr: "Intelligence artificielle",
    wikidata: "https://www.wikidata.org/wiki/Q11660",
  },
  "generative-ai": {
    en: "Generative AI",
    fr: "IA générative",
    wikidata: "https://www.wikidata.org/wiki/Q117246174",
  },
  "large-language-model": {
    en: "Large language model",
    fr: "Grand modèle de langage",
    wikidata: "https://www.wikidata.org/wiki/Q115305900",
  },
  "eu-ai-act": {
    en: "EU AI Act",
    fr: "Règlement sur l'intelligence artificielle",
    wikidata: "https://www.wikidata.org/wiki/Q108456694",
  },
  gdpr: {
    en: "GDPR",
    fr: "RGPD",
    wikidata: "https://www.wikidata.org/wiki/Q1172506",
  },
  "digital-sovereignty": {
    en: "Digital sovereignty",
    fr: "Souveraineté numérique",
    wikidata: "https://www.wikidata.org/wiki/Q3492424",
  },
  "vendor-lock-in": {
    en: "Vendor lock-in",
    fr: "Enfermement propriétaire",
    wikidata: "https://www.wikidata.org/wiki/Q1503227",
  },
  "ai-governance": {
    en: "Governance of AI",
    fr: "Gouvernance de l'IA",
    wikidata: "https://www.wikidata.org/wiki/Q130610796",
  },
  "shadow-ai": {
    en: "Shadow AI",
    fr: "Shadow AI",
    wikidata: "https://www.wikidata.org/wiki/Q132778447",
  },
};
