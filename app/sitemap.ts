import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((entry) => ({
    url: new URL(entry.path, siteConfig.url).toString(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
