import 'server-only'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

const proyectosDirectory = path.join(process.cwd(), 'public/mdx');

export type ProyectoFrontmatter = z.infer<typeof proyectoSchema>;
export type Proyecto = ProyectoFrontmatter & {
  content: string;
  slug: string;
  route: string;
};

export function getProyectos(): Proyecto[] {
  try {
    if (!fs.existsSync(proyectosDirectory)) {
      console.warn(`[getProyectos] Directory not found: ${proyectosDirectory}`);
      return [];
    }
    const fileNames = fs.readdirSync(proyectosDirectory);
    return fileNames
      .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
      .flatMap((fileName) => {
        try {
          const fullPath = path.join(proyectosDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);
          const parsed = proyectoSchema.safeParse(data);
          if (!parsed.success) {
            console.warn(
              `[getProyectos] Invalid frontmatter in ${fileName}:`,
              parsed.error.flatten().fieldErrors
            );
            return [] as const; // skip invalid entries
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
        } catch (e) {
          console.warn(`[getProyectos] Failed to read ${fileName}:`, e);
          return [] as const;
        }
      });
  } catch (e) {
    console.warn('[getProyectos] Failed to list directory:', e);
    return [];
  }
}

export const proyectoSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  heroImage: z.string().optional(),
  githubRepo: z.url().optional(),
  demoLink: z.url().optional(),
  route: z.string().optional(),
});