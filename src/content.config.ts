import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title:     z.string(),
    summary:   z.string(),
    tech:      z.array(z.string()),
    order:     z.number(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { projects };
