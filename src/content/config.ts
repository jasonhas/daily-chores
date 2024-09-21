import { z, defineCollection } from "astro:content"

const postsCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: image().refine((img) => img.width >= 600, { message: "Cover image must be at least 600 pixels wide!",}),
        alt: z.string(),
        tags: z.array(z.string())
    })
})

export const collections = {
    posts: postsCollection,
}