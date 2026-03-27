import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

const researchSchema = z.object({
    title: z.string(),
    description: z.string(),
    journal: z.string().optional(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    side: z.enum(["left", "right"]).optional(),
    position: z.number().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type ResearchSchema = z.infer<typeof researchSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const researchCollection = defineCollection({ schema: researchSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'research': researchCollection
}
