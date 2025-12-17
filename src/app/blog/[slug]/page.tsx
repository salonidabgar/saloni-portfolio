"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// This would typically come from a CMS or markdown files
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}> = {
  "building-scalable-microservices": {
    title: "Building Scalable Microservices: A Practical Guide",
    excerpt: "Learn how to design and implement microservices architecture that can scale with your business needs.",
    date: "2024-12-10",
    readTime: "12 min read",
    category: "Architecture",
    tags: ["Microservices", "Docker", "Kubernetes", "Node.js"],
    content: `
# Building Scalable Microservices: A Practical Guide

Microservices architecture has become the de facto standard for building large-scale applications. In this comprehensive guide, we'll explore the key principles and best practices for building microservices that can scale with your business needs.

## What Are Microservices?

Microservices are an architectural approach where an application is built as a collection of small, independent services. Each service:

- Runs in its own process
- Communicates via lightweight mechanisms (usually HTTP/REST or messaging)
- Is independently deployable
- Can be written in different programming languages

## Key Principles

### 1. Single Responsibility

Each microservice should have a single, well-defined responsibility. This makes services easier to understand, develop, and maintain.

### 2. Loose Coupling

Services should be loosely coupled, meaning changes to one service should not require changes to others. This is achieved through well-defined APIs and contracts.

### 3. High Cohesion

Related functionality should be grouped together within a single service. This reduces the need for cross-service communication.

## Implementation Patterns

### Service Discovery

In a microservices architecture, services need to find each other. Service discovery patterns help with this:

- **Client-side discovery**: Clients query a service registry
- **Server-side discovery**: Load balancer queries the registry

### API Gateway

An API Gateway provides a single entry point for clients:

\`\`\`javascript
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use('/users', proxy('http://user-service:3001'));
app.use('/orders', proxy('http://order-service:3002'));
app.use('/products', proxy('http://product-service:3003'));

app.listen(3000);
\`\`\`

### Circuit Breaker

Prevent cascade failures with the circuit breaker pattern:

\`\`\`javascript
const CircuitBreaker = require('opossum');

const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000
};

const breaker = new CircuitBreaker(asyncFunction, options);

breaker.fire()
  .then(result => console.log(result))
  .catch(err => console.error(err));
\`\`\`

## Best Practices

1. **Design for failure**: Assume services will fail and design accordingly
2. **Implement health checks**: Enable monitoring and auto-healing
3. **Use asynchronous communication**: Reduce coupling with message queues
4. **Containerize services**: Use Docker for consistent deployments
5. **Implement proper logging**: Centralized logging is essential

## Conclusion

Building scalable microservices requires careful planning and adherence to best practices. By following the principles outlined in this guide, you can create systems that are resilient, maintainable, and scalable.
    `,
  },
  "mastering-typescript-generics": {
    title: "Mastering TypeScript Generics for Better Code",
    excerpt: "Deep dive into TypeScript generics and how they can help you write more reusable, type-safe code.",
    date: "2024-11-28",
    readTime: "8 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Programming"],
    content: `
# Mastering TypeScript Generics for Better Code

TypeScript generics are one of the most powerful features of the language. They allow you to write flexible, reusable code while maintaining type safety.

## What Are Generics?

Generics allow you to write code that works with any type while still providing type checking. They're like parameters for types.

## Basic Generic Functions

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello"); // type is string
const number = identity(42); // type is inferred as number
\`\`\`

## Generic Interfaces

\`\`\`typescript
interface Repository<T> {
  getAll(): T[];
  getById(id: string): T | undefined;
  create(item: T): T;
  update(id: string, item: T): T;
  delete(id: string): void;
}
\`\`\`

## Constraints

You can constrain generics to certain types:

\`\`\`typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK
logLength(123); // Error: number doesn't have length
\`\`\`

## Conclusion

Mastering generics will significantly improve your TypeScript code quality and reusability.
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-[var(--muted)] mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="text-[var(--primary)] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <article className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)] mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-[var(--muted)] mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 pb-8 border-b border-[var(--border)]">
            <span className="text-sm text-[var(--muted)]">Share:</span>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                aria-label="Copy link"
              >
                <LinkIcon className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div
            className="text-[var(--foreground)] leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </motion.div>

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-2xl">
              👩‍💻
            </div>
            <div>
              <h3 className="font-semibold text-lg">Saloni Dabgar</h3>
              <p className="text-[var(--muted)] text-sm mb-3">
                Software Developer & Tech Writer
              </p>
              <p className="text-[var(--muted)] text-sm">
                I write about software development, system design, and building great products.
                Follow me for more content!
              </p>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}

function formatContent(content: string): string {
  return content
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-[var(--background)] border border-[var(--border)] rounded-xl p-4 my-4 overflow-x-auto"><code class="text-sm font-mono">$2</code></pre>')
    .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-[var(--background)] rounded text-sm font-mono">$1</code>')
    .replace(/^- (.*$)/gm, '<li class="ml-4 list-disc text-[var(--muted)]">$1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 list-decimal text-[var(--muted)]">$1</li>')
    .replace(/\n\n/g, '</p><p class="text-[var(--muted)] leading-relaxed">')
    .replace(/^(.*)$/gm, (match) => {
      if (match.startsWith('<')) return match;
      return `<p class="text-[var(--muted)] leading-relaxed">${match}</p>`;
    });
}
