import { Feed } from "feed";
import { marked } from "marked";

import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const posts = await getAllPosts();
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://blog.ethcatherders.com/";

  const feed = new Feed({
    title: "Ethereum Cat Herders",
    description: "The official blog of the Ethereum Cat Herders",
    id: siteUrl,
    link: siteUrl,
    language: "en",
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `${new Date().getFullYear()}, ECH Institute, Inc.`,
    updated: posts.length > 0 ? posts[0].frontmatter.date : new Date(),
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  });

  for (const post of posts) {
    const { frontmatter, content } = post;
    // Ensure htmlContent is a string by awaiting the result if it's a Promise
    const htmlContent = await marked(content);

    const url = `${siteUrl}/${post.slug}`;
    feed.addItem({
      id: url,
      link: url,
      title: frontmatter.title,
      date: frontmatter.date,
      author: [
        {
          name: frontmatter.author,
        },
      ],
      image: frontmatter.image
        ? {
            url: frontmatter.image,
          }
        : undefined,
      description:
        content.length > 280 ? content.slice(0, 280) + "..." : content,
      content: htmlContent,
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
