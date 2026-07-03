import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Thinking | Saloni Dabgar",
  description:
    "Essays on engineering, philosophy, evolution, and the systems that run inside people — notes from a systems thinker.",
  alternates: { canonical: "https://salonidabgar.com/blog" },
  openGraph: {
    type: "website",
    url: "https://salonidabgar.com/blog",
    siteName: "Saloni Dabgar",
    title: "Thinking | Saloni Dabgar",
    description:
      "Essays on engineering, philosophy, evolution, and the systems that run inside people.",
  },
};

export default function Blog() {
  const posts = getAllPosts();

  return <BlogPageClient posts={posts} />;
}
