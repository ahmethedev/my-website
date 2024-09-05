import { getBlogPosts } from "app/db/blog";

export default async function sitemap() {
  let blogs = getBlogPosts().map((blog) => ({
    url: `https://onurhanthe.dev/blog/${blog.slug}`,
    lastModified: blog.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/about"].map((route) => ({
    url: `https://onurhanthe.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
