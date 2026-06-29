---
title: "How Do You Test an AI Feature You Can't Eyeball?"
excerpt: "I built an agent that decides whether an Amazon listing 'meaningfully changed.' Then I got stuck on a simpler question: how do I know it's any good? This is the little exam I built to find out, and the bug it caught in my own code."
date: "2026-06-23"
readTime: "9 min read"
category: "Software Engineering"
tags: ["AI Engineering", "Evals", "Agents", "Testing", "Claude"]
featured: true
emoji: "🧪"
color: "#16875f"
image: "/images/blog/evaluating-an-agent-you-cant-eyeball/og.png"
---

I had this agent working. Give it two versions of an Amazon listing, an old approved one and the current live one, and it tells you whether the listing meaningfully changed and what got dropped.

I ran it a few times by hand. The answers looked great. And then I sat there feeling weird about shipping it.

Because "the answers looked great when I checked five of them" is not a thing you can stand behind. It's not a test. It's a vibe.

This is the part of building with LLMs that nobody really warns you about. When the output is code, you can run it. When the output is a *judgment* — "yes this changed in a way that matters" — how do you check that, at scale, without just reading everything yourself forever?

## The one-line version

I stopped eyeballing it and built it an exam. Thirty-one questions, all with an answer key I wrote by hand, and a script that grades the agent and gives me actual numbers.

The fancy word for this is an "eval." I think of it as an exam for the AI.

## What one exam question looks like

Each of the 31 examples is a tiny scenario. It has three parts:

- a **baseline** listing (the approved version),
- a **current** listing (what's live now, maybe changed, maybe not),
- and the **answer** I wrote myself: did it really change, and which specifics were dropped.

The harness feeds each pair to the *actual* drift agent — the same code that runs in the real product, not a copy — and compares its answer to mine. Across all 31. Then it prints a scorecard.

That "same code, not a copy" bit matters more than it sounds. It would have been easy to write a slightly-simplified version of the agent just for testing. Then I'd be grading something that isn't what ships. So I pulled the agent into one shared function that both the live feature and the exam call. The exam tests the real thing.

## The trick questions are the whole point

Here's the thing I didn't expect: the easy questions are useless.

Anyone can build an agent that notices when a title goes from a long detailed thing to "Ashwagandha Capsules." That's an obvious diff. The hard part, the part that actually decides whether this tool is annoying or trustworthy, is the opposite: *not* raising an alarm when nothing real happened.

So a good chunk of my 31 examples are traps. Word order shuffled but every spec intact. Punctuation changed. "32 oz" became "32 ounce." A title that just dropped some duplicate keyword stuffing but kept all the real information. The correct answer to every one of those is "nothing changed, stay quiet."

And then a handful of genuinely nasty ones. A dose value that quietly went from 1300mg to 1000mg. An unsubstantiated health claim that Amazon's rewrite added. And the sneakiest: a selling spec that *moved* from the title into the bullet points. Looks different. Nothing was actually lost.

## How I score it

Two numbers matter most, and they pull in opposite directions.

**Recall**: of the listings that truly changed, how many did it catch? Missing a real change is the dangerous failure. It's a smoke detector that doesn't go off during a fire.

**False-positive rate**: how often it yells "changed!" when nothing really did. This is the annoying failure. A smoke detector that shrieks every time you make toast. You stop trusting it, and then it's worse than useless.

For a tool meant to run quietly across hundreds of listings, the false-positive rate is the one I actually lose sleep over.

## The bug it caught

First proper run, with all the nasty adversarial cases in: **93.5% accuracy, and an 18% false-positive rate.**

The false positives were all the same shape. Those "spec moved from the title into the bullets" cases. The agent kept flagging them as drift.

When I read its reasoning, the problem was obvious in hindsight. It was looking at the title first, almost only at the title. So a spec leaving the title *looked* like a spec being dropped, even though it was sitting right there in the bullets.

Good news buried in there: recall was 100%. It never missed a real drop. Every mistake was over-alerting, never under-alerting. For a monitoring tool, if you're going to fail, that's the direction you want to fail in.

The fix wasn't clever. I changed the agent's instructions to treat the title and the bullets as one pool of selling points, and to only count something as "dropped" if it's gone from *both*. Re-ran the same 31 questions.

**100% accuracy. Zero false positives.**

And the fix didn't just move a test number. It shipped. The real product stopped crying wolf about relocated specs too. The exam didn't just measure the thing, it made the thing better.

## Where I'd be careful

I want to be honest about that 100%, because a perfect score on a small exam is a little suspicious, and it should be.

Thirty-one examples is not "solved." It's "solved for the cases I thought of." The real value here isn't the number, it's the setup: I can now change a prompt, change a model, tweak anything, and re-run the exam in about a minute to see if I broke something. In fact, later I added a small feature and the score dipped to 96.8%, and I saw it immediately instead of shipping a regression. That's the whole point.

So I don't think of the eval as done. I think of it as a thing I keep adding hard questions to, especially every time the agent surprises me in the wild.

I got this instinct from embedded work, weirdly. You never trust a single sensor reading. You sanity-check it against something. An eval is the same reflex, pointed at a model instead of a sensor.

---

*I used to think "test your AI features" meant clicking around and going "yeah, seems smart." It doesn't. It means writing down what "right" looks like before you look at the output, and being willing to find out you were the one who was wrong. My agent and I have both been wrong on this exam. It's better for it. So am I.*
