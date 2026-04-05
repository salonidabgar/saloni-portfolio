Write a new essay about: $ARGUMENTS

## Context

Saloni Dabgar is a software developer at Jaguar Land Rover (embedded systems, C/C++) and IIT Kanpur alumna. She's also a philosopher, fitness enthusiast (gym, yoga, calisthenics, badminton), avid reader, nature lover, and someone who connects human psychology, evolution, and technology into a unified worldview. Her blog is called "Thinking" — not "Blog."

The website has an immersive reading experience: cinematic hero, gradient drop caps, pull quotes with gradient borders, highlighted bold text, and vivid italic styling. Write content that leverages these design elements.

## Instructions

1. Create a new markdown file in `content/blog/` with a kebab-case filename

2. Include frontmatter:
   ```yaml
   ---
   title: "Essay Title"
   excerpt: "A compelling 1-2 sentence hook that makes someone stop scrolling"
   date: "YYYY-MM-DD"  # today's date
   readTime: "X min read"
   category: "Choose from: Software Engineering, Personal Growth, Health & Fitness, Career, Philosophy"
   tags: ["Tag1", "Tag2", "Tag3"]
   featured: true
   emoji: "relevant emoji"
   color: "from-emerald-700 to-emerald-500"  # use organic/vibrant gradients
   ---
   ```

   **Gradient options that match the site palette:**
   - `from-emerald-800 to-emerald-600` (engineering/systems)
   - `from-amber-700 to-amber-500` (fitness/health)
   - `from-stone-700 to-stone-500` (career/learning)
   - `from-rose-700 to-rose-500` (philosophy/psychology)
   - `from-violet-700 to-violet-500` (nature/evolution)
   - `from-teal-700 to-teal-500` (yoga/mindfulness)

3. Write the essay in Saloni's voice:

   **Opening:** Start with a vivid scene, a question, or a single provocative line. The first letter becomes a gradient drop cap — make it count.

   **Structure for maximum impact on the immersive layout:**
   - Short paragraphs (2-4 sentences max). The reading experience breathes.
   - Use `## Headings` to create chapter breaks.
   - Use `**bold text**` for key phrases — they get a coral highlight underline.
   - Use `*italic text*` for reflective moments — they render in vivid teal serif.
   - Use `> blockquotes` for pull quotes — they get a gradient left border and large serif italic treatment. Write these as standalone powerful sentences.
   - End sections with a `---` horizontal rule for a gradient divider.

   **The intersection approach** — Every essay should connect at least 2 of Saloni's worlds:
   - Engineering ↔ Philosophy ("What FreeRTOS taught me about attention")
   - Fitness ↔ Code ("Progressive overload and iterative development")
   - Nature ↔ Systems ("Evolution as a design pattern")
   - Psychology ↔ Career ("Why we build things at all")
   - Yoga ↔ Engineering ("Stillness in a real-time system")

   **Voice rules:**
   - First person, honest, no corporate-speak
   - Show vulnerability without self-pity
   - Connect every idea to lived experience
   - End with an italicized closing reflection after `---`
   - Never start with "In this post, I'll..." or "Today I want to talk about..."

4. After writing, commit and push:
   ```
   git add content/blog/<filename>.md
   git commit -m "Add essay: <title>"
   git push
   ```
