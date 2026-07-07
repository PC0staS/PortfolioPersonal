import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    githubRepo: z.string().url().optional(),
    demoLink: z.string().url().optional(),
    route: z.string().optional(),
  }),
})

export const collections = { proyectos }
