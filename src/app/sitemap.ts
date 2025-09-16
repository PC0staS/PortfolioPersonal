import type { MetadataRoute } from "next";
import { getProyectos } from "@/lib/proyectos";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    const base = "https://pablocostas.dev";
    const proyectos = getProyectos();
    const projectUrls = proyectos.map((p) => ({
      url: `${base}/proyectos/${p.route ?? p.slug}`,
      lastModified:
        p.pubDate instanceof Date && !isNaN(p.pubDate.getTime())
          ? p.pubDate
          : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

    return [
      { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
      ...projectUrls,
    ];
  } catch (e) {
    console.warn('[sitemap] fallback due to error:', e);
    return [
      {
        url: 'https://pablocostas.dev',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
    ];
  }
}
