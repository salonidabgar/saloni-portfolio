Write a new blog post about: $ARGUMENTS

## Instructions

1. Create a new markdown file in `content/blog/` with a kebab-case filename derived from the topic
2. Include frontmatter with these fields:
   ```yaml
   ---
   title: "Post Title"
   excerpt: "A compelling 1-2 sentence summary"
   date: "YYYY-MM-DD"  # today's date
   readTime: "X min read"  # estimate based on content length
   category: "Life"  # or "Tech", "Growth", etc.
   tags: ["Tag1", "Tag2"]
   featured: true
   emoji: "🎯"  # a relevant emoji
   color: "from-blue-500 to-purple-500"  # a tailwind gradient
   ---
   ```
3. Write the blog post in Saloni's authentic voice:
   - Personal, reflective, honest
   - Uses short punchy paragraphs
   - Mixes vulnerability with strength
   - Includes section headers (## headings)
   - Ends with an italicized closing thought after a `---` divider
4. After writing, commit the new file and push to deploy:
   ```
   git add content/blog/<filename>.md
   git commit -m "Add blog post: <title>"
   git push
   ```
