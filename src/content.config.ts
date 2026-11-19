import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    appBarTitle: z.string(),
    overline: z.string(),
    subtitle: z.string(),
    updated: z.string(),
    description: z.string(),
    icon: z.enum(['policy', 'gavel', 'delete_forever']),
    showDemoBanner: z.boolean().default(false),
  }),
});

export const collections = { legal };
