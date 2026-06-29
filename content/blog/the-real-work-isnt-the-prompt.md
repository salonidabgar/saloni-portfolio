---
title: "The Real Work of an AI Agent Isn't the Prompt"
excerpt: "When I started building with LLMs I thought the skill was writing the perfect prompt. Building a real agent taught me the prompt is maybe a tenth of it. The rest is everything you wrap around the model so it stops being random — and most of that only shows up when the thing has to actually work."
date: "2026-06-16"
readTime: "8 min read"
category: "Software Engineering"
tags: ["AI Engineering", "Agents", "System Design", "Claude", "LLMs"]
featured: true
emoji: "🧩"
color: "#16875f"
image: "/images/blog/the-real-work-isnt-the-prompt/og.png"
---

When I started building things with LLMs, I thought the whole skill was the prompt. Write it well enough, be clever enough about it, and you'd get good output. So I spent my time polishing prompts and felt vaguely like I was doing the real work.

Then I built an agent that actually had to work, one that watches Amazon quietly rewrite sellers' product listings, and it slowly dawned on me that the prompt was maybe a tenth of the job. The rest was everything I had to build around the model so it stopped behaving like a slot machine.

I want to write down what that "everything else" actually turned out to be. Not as a checklist, more as the stuff nobody mentions when they say "just use AI."

## The one-line version

The model is the easy part. The engineering is what you put around it so its output is reliable, affordable, checked, and knows when to stop and ask a human.

## Making the output not-random

The first thing that broke my "the prompt is the job" belief was the output itself.

I had one agent whose job is to rewrite a product listing, and its answer feeds straight into the next step. Early on I asked it, in the prompt, to "reply in JSON," and then I fished the JSON out of its text with string matching. It worked until it didn't, at the worst possible moment, on a slightly weird product.

The fix wasn't a better prompt. It was forcing the model to return an exact, validated shape, every time, so the next agent can't be handed garbage. That one change removed a whole category of 2am bug. And it made me realise reliability isn't something you prompt your way to. You build it in around the model.

## Spending money like it's mine

The second thing was cost, which I did not think about at all until I watched it add up.

My tool runs several agents. Four of them do live web research, then one writes the actual listing, then one reviews it. If I ran every single one on the most capable, most expensive model, each run would be slow and cost more than it should for what it does.

So the grunt-work agents run on a cheaper, faster model, and only the one job I actually care about, the final rewrite, gets the expensive one. It's the same instinct as not putting your best engineer on data entry. I didn't learn this from a blog. The bill taught me, which is a very effective teacher.

## Not trusting my own agent

The third one is the one I'm proudest of, and the one I resisted longest.

I had an agent making a judgment call I couldn't check by eye: does this listing meaningfully differ from an approved version, and if so, what got dropped. "It looked right the five times I checked" is not a thing you can ship. So I built it a small exam. Thirty-one labelled cases, with an answer key I wrote by hand, and a script that grades the agent.

First run, it scored 93 percent, and grading it showed me a real bug in my own logic. I fixed it, re-ran the same exam, got it to 100. The number moved because I could see it move.

This changed how I think about building with AI more than anything else. You don't verify these things by vibes. You write down what "right" looks like before you look at the output, and then you're allowed to find out you were the one who was wrong. My agent and I have both failed that exam. We're both better for it.

## Knowing when to get out of the way

The last piece isn't really technical, it's a decision about where the machine stops.

The tool drafts a new title, but a person edits it and re-checks their own version, and a person approves the snapshot it monitors against. None of that is there for show. It's there because I don't think an agent should be the one who decides what goes live on someone else's store. The agent does the heavy, boring, tireless part. The human keeps the judgment.

I think that line, what you hand to the model and what you very deliberately don't, is most of the actual design work. It's certainly more of it than the prompt.

## Where I'd be careful

I don't want to make it sound like I've got this figured out, because I haven't, and a couple of things I know are missing.

My tool still waits for you to click a button to check for drift. The version that actually earns its place runs itself on a schedule and pings you, and I haven't built that yet. And I have almost no real observability, no proper tracing or dashboards, which for anything genuinely in production is not optional. Those two are honestly my next moves, and I know it.

So take this as a report from partway through, not a finished philosophy. The one thing I'd stand behind is the shape of it: I stopped thinking of the model as the thing I'm building, and started thinking of it as one component I have to make trustworthy. The prompt gets it started. Everything around it is what makes it something you'd actually rely on.

## A note, since I don't have a CS degree

For a long time I assumed "AI engineer" meant knowing a big pile of named techniques. I'm less sure now. From where I'm standing it looks more like ordinary engineering instincts, reliability, cost, testing, knowing your boundaries, pointed at a component that happens to be a language model and happens to be a bit unpredictable.

Which is oddly reassuring. It means the useful stuff isn't some separate AI priesthood. It's the same care you'd put into any system you didn't want to fall over.

---

*I still write prompts, obviously, and I still enjoy getting one just right. I've just stopped mistaking that part for the job. The job is quieter than that. It's all the plumbing that makes a clever, slightly unreliable thing into something a person can trust without watching it.*
