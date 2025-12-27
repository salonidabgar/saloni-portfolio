"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}> = {
  "shedding-26-kilos-finding-myself": {
    title: "Shedding 26 Kilos, Finding Myself: A Journey That's Only Half Done",
    excerpt: "For years, I carried more than just weight. I carried exhaustion, brain fog, and the quiet frustration of knowing I wasn't operating at my full potential.",
    date: "2024-12-26",
    readTime: "6 min read",
    category: "Life",
    tags: ["Health", "Weight Loss", "Personal Growth", "Fitness"],
  },
  "what-yoga-means-to-me": {
    title: "What Yoga Means to Me",
    excerpt: "Yoga is not just physical exercise for me. It's a deep spiritual sadhana — my way of using this human body to touch a level of peak consciousness.",
    date: "2024-12-17",
    readTime: "5 min read",
    category: "Life",
    tags: ["Yoga", "Spirituality", "Mindfulness", "Personal Growth"],
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
      <article className="max-w-3xl mx-auto px-6">
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
          {slug === "shedding-26-kilos-finding-myself" && (
            <div className="space-y-8 text-[var(--foreground)]">
              {/* Introduction */}
              <section>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  For years, I carried more than just weight. I carried exhaustion, brain fog, and the quiet frustration of knowing I wasn&apos;t operating at my full potential. My body felt like excess baggage—slowing down my thoughts, limiting what I could accomplish in a day, and chipping away at my confidence one health scare at a time.
                </p>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  Last September, reality hit hard. A thyroid diagnosis. Fatty liver, grade 1. And lurking in the background, a family history of diabetes that I refuse—absolutely refuse—to let become my inheritance.
                </p>
                <p className="text-[var(--muted)] leading-relaxed font-medium">
                  Things were getting worse. Something had to change.
                </p>
              </section>

              {/* The Eleven Reasons */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">The Eleven Reasons</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">1. My body was working against my brain.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      I could feel it—the mental sluggishness, the afternoon crashes, the inability to sustain focus. I knew my mind was capable of more, but my body wasn&apos;t letting it happen.
                    </p>

                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">2. Health problems kept knocking.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      Thyroid. Fatty liver. Warning signs I couldn&apos;t ignore anymore. My body was sending me messages, and I was finally ready to listen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">3. I&apos;m breaking a generational cycle.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      Diabetes runs in my family. But genetics isn&apos;t destiny—not if I have anything to say about it. This ends with me.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">4. Spiritual lightness requires physical lightness.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      In Ashtanga yoga, there&apos;s a yama called Aparigraha—non-attachment, withdrawal from senses. For someone like me, who struggled with emotional eating and stress eating, this was more than philosophy. It was a personal battle. I could eat clean 99% of the time, but that 1%? Complete disaster. Conquering that 1% became part of the journey.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">5. Adventure demands a capable body.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      I love travel. I crave adventure. And I want a body that says yes to every trail, every summit, every spontaneous detour—not one that holds me back.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">6. I have things to do in this world.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      There&apos;s something deep inside me that knows I&apos;m meant to contribute—to myself, to society, to something larger. Those ambitions require energy, stamina, and presence. A fit body isn&apos;t vanity; it&apos;s infrastructure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">7. I wanted to meet a version of myself I&apos;d never seen.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      What does she look like? How does she move through the world? What is she capable of? I&apos;m still finding out. This is a work in progress, and I&apos;m here for every step of it.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">8. I&apos;m rewriting a lifelong story.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      I was the overweight kid. The obese teenager. At my present body weight today, I&apos;m back to what I weighed thirteen years ago in 2012. But this time, I&apos;m not just losing weight—I&apos;m gaining something I never truly had: the feeling of being healthy from the inside out.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">9. I needed to prove something to myself.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      Not to anyone else. To me. That when I decide something, I follow through. That my word to myself means something.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">10. I have physical goals that require a physical foundation.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      Calisthenics. Hyrox. Movements that demand strength, control, and a body that cooperates. I&apos;m building that body now.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">11. I&apos;m chasing the peak of human consciousness.</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      This might sound lofty, but I believe physical health is a gateway to mental clarity, and mental clarity is a gateway to something even higher. I want to experience what&apos;s possible when body, mind, and spirit are all aligned.
                    </p>
                  </div>
                </div>
              </section>

              {/* The Scoreboard */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">The Scoreboard</h2>
                <p className="text-[var(--muted)] leading-relaxed mb-4 text-xl font-medium">
                  13 kilos lost. 13 more to go.
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  I&apos;m exactly halfway there. And honestly? The person writing this today already feels like someone new.
                </p>
              </section>

              {/* Closing */}
              <section className="border-t border-[var(--border)] pt-8 mt-8">
                <p className="text-[var(--muted)] leading-relaxed italic text-lg">
                  This isn&apos;t just about a number on a scale. It&apos;s about reclaiming my energy, my potential, and my future. One kilo at a time.
                </p>
              </section>
            </div>
          )}

          {slug === "what-yoga-means-to-me" && (
          <div className="space-y-8 text-[var(--foreground)]">
            {/* More Than Movement */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">More Than Movement</h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Yoga is not just physical exercise for me. It&apos;s a deep spiritual sadhana.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4 italic">
                (I don&apos;t particularly like using the word &quot;spiritual&quot; — it feels overused. But whenever I do use it, it&apos;s simply to convey that this is something beyond the physical. Something even I haven&apos;t fully understood yet.)
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                So, coming back.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mt-4">
                Yoga is my way of using the greatest gift I&apos;ve been given — this human body — to touch a level of peak consciousness. To transcend. To become more than I was yesterday.
              </p>
            </section>

            {/* The Morning Reset */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">The Morning Reset</h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                It is the time when I find peace. When I prepare myself for the day&apos;s chaos before it even begins.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-2">
                First, yog shuts down the outer noises — the world fades.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Then, slowly, the inner chatter quiets too.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                And in that stillness, I can feel awareness flowing.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                I can feel knowledge and wisdom moving through me, as if some higher power is gently guiding my thoughts. In those moments, I receive clarity — powerful, undeniable clarity that cuts through whatever confusion I&apos;ve been carrying.
              </p>
            </section>

            {/* Five Years in the Making */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Five Years in the Making</h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Here&apos;s something strange.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                I have been thinking about writing since 2020. Planning to publish. Telling myself &quot;someday.&quot; But I never could. Something always held me back.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Until today.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Something unlocked in me this morning — after five years of waiting. And now, here I am, finally putting words to what yoga means to me.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                I don&apos;t fully understand what shifted. But I know yoga had everything to do with it.
              </p>
            </section>

            {/* Living in Sakshi Bhaav */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Living in Sakshi Bhaav</h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Throughout the day, yoga gives me a quiet superpower.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                The power to watch my thoughts — good or bad — without becoming them. To stay in sakshi bhaav, as a mere observer. To let thoughts drift by like clouds passing through an open sky.
              </p>
              <p className="text-[var(--muted)] leading-relaxed font-medium">
                They come. They go. And I remain.
              </p>
            </section>

            {/* Returning to the Breath */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Returning to the Breath</h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Whenever I lose touch with the present moment (and I do, often), I have a simple anchor.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                I bring my focus back to my nostrils. I do a few rounds of So Hum.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                That&apos;s it. That&apos;s enough to come home.
              </p>
            </section>

            {/* Yoga Off the Mat */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Yoga Off the Mat</h2>
              <div className="text-[var(--muted)] leading-relaxed space-y-1 mb-4">
                <p>I chant while I drive.</p>
                <p>I chant while I eat.</p>
                <p>I chant while I work in office.</p>
                <p>I chant while I walk.</p>
              </div>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                I always try to bring myself back to the present moment — through breath, through chants, through raags, through devotional songs.
              </p>
              <p className="text-[var(--muted)] leading-relaxed font-medium">
                Yoga isn&apos;t something I do for an hour in the morning. It&apos;s how I move through my entire day.
              </p>
            </section>

            {/* The Honest Truth */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">The Honest Truth</h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                I am not perfect.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Not in my thoughts. Not in my words. Not in my actions. But you know what? That imperfection is exactly what gives me space to grow.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                In my yog sadhana too, not every day is the same. There are days when maya overpowers. When the mann wanders endlessly. When I don&apos;t feel like sitting on the mat at all.
              </p>
              <p className="text-[var(--muted)] leading-relaxed font-medium">
                But that&apos;s where discipline kicks in.
              </p>
            </section>

            {/* The Call That Kept Coming Back */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">The Call That Kept Coming Back</h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Here&apos;s something I&apos;ve realized.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Yog has tried to draw me towards itself several times in my life. It has knocked on my door again and again. And I? I have drifted from it, come back to it, drifted again. Nothing was ever consistent.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                But now, something feels different.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                I desperately want to make this an everyday affair. No matter what. No excuses. No running away. No &quot;tomorrow.&quot;
              </p>
              <p className="text-[var(--muted)] leading-relaxed font-medium">
                This is my internal calling. And this time, I&apos;m answering it.
              </p>
            </section>

            {/* Closing */}
            <section className="border-t border-[var(--border)] pt-8 mt-8">
              <p className="text-[var(--muted)] leading-relaxed italic text-lg">
                The mat doesn&apos;t care if I show up broken or whole. It just asks me to show up. Tomorrow, I will. And the day after. One breath at a time, until this stops being discipline and starts becoming who I am.
              </p>
            </section>
          </div>
          )}
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
              🧘‍♀️
            </div>
            <div>
              <h3 className="font-semibold text-lg">Saloni Dabgar</h3>
              <p className="text-[var(--muted)] text-sm mb-3">
                Software Developer & Seeker
              </p>
              <p className="text-[var(--muted)] text-sm">
                Writing about life, technology, yoga, and the journey of becoming.
                Follow along as I explore the intersection of code and consciousness.
              </p>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
