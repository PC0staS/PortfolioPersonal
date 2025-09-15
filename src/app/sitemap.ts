import type { MetadataRoute } from "next";
import { getProyectos } from "@/lib/proyectos";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pablocostas.dev";
  const proyectos = getProyectos();
  const projectUrls = proyectos.map((p) => ({
    url: `${base}/proyectos/${p.route ?? p.slug}`,
    lastModified: p.pubDate instanceof Date && !isNaN(p.pubDate.getTime())
      ? p.pubDate
      : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...projectUrls,
  ];
}
