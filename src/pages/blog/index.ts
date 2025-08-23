import type { AstroInstance, ImageMetadata } from "astro";

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
