import { getAllPosts } from "@/lib/blog";
import BlogPageClient from "./BlogPageClient";

export default function Blog() {
  const posts = getAllPosts();

  return <BlogPageClient posts={posts} />;
}
