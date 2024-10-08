/* import { imageMetadata } from 'astro/assets/utils'; */
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean(),
      // Transform string to Date object
      pubDate: z.coerce.string().date(),
      updatedDate: z.string().optional(),
      categories: z.string().optional(),
      author: z.string(),
      tldrOne: z.string().optional(),
      tldrTwo: z.string().optional(),
      tldrThree: z.string().optional(),
      headerImage: z.object({
        src: image()
          .refine((img) => (img.height = 300))
          .refine((img) => (img.width = 1200)),
        alt: z.string(),
        authorImg: z.string().optional(),
        authorWeb: z.string().optional(),
        authorX: z.string().optional(),
        authorLi: z.string().optional(),
        authorBio: z.string().optional(),
        authorUrl: z.string().optional(),
        ogImg: z.string().optional(),
      }),
    }),
});

/* const authors = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.string().date(),
      authorImage: z.object({
        src: image(),
        alt: z.string(),
      }),
    }),
}); */

export const collections = { blog: blog };
