import { getBlogPosts } from "app/db/blog";

export default async function sitemap() {
  let blogs = getBlogPosts().map((blog) => ({
    url: `https://abd.im/blog/${blog.slug}`,
    lastModified: blog.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/work"].map((route) => ({
    url: `https://abd.im${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
