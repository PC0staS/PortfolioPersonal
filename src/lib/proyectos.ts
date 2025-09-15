import 'server-only'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const proyectosDirectory = path.join(process.cwd(), 'public/mdx');

export function getProyectos() {
  const fileNames = fs.readdirSync(proyectosDirectory);
  return fileNames
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .flatMap((fileName) => {
      const fullPath = path.join(proyectosDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const parsed = proyectoSchema.safeParse(data);
      if (!parsed.success) {
        console.warn(`[getProyectos] Invalid frontmatter in ${fileName}:`, parsed.error.flatten().fieldErrors);
        return [] as const; // skip invalid entries instead of throwing
      }
      const slug = fileName.replace(/\.mdx?$/, '');
      return [
        {
          ...parsed.data,
          content,
          slug,
          route: parsed.data.route ?? slug,
        },
      ] as const;
    });
}

import { z } from 'zod';

export const proyectoSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  heroImage: z.string().optional(),
  githubRepo: z.url().optional(),
  demoLink: z.url().optional(),
  route: z.string().optional(),
});