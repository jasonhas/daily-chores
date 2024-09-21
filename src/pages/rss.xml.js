import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
    const posts = await getCollection("posts")
    return rss({
        title: 'Daily Chores | Blog',
        description: 'Just my journey of making something happen on the daily',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    })
}