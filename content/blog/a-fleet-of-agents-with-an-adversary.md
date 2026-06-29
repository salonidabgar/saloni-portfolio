---
title: "I Stopped 'Using AI' and Started Running a Small Crew of Agents"
excerpt: "Somewhere along the way, 'ask the model a question' turned into 'run five narrow agents and make one of them argue with the others.' Here's how I actually build these things now, using the Amazon tool I made as the example."
date: "2026-06-29"
readTime: "9 min read"
category: "Software Engineering"
tags: ["AI Engineering", "Agents", "Multi-Agent", "Claude", "System Design"]
featured: true
emoji: "🤖"
color: "#6366f1"
image: "/images/blog/a-fleet-of-agents-with-an-adversary/og.png"
---

For a while, "using AI" meant a chat box. I'd type a big careful prompt, get a big answer, and copy the parts I liked.

At some point building the Amazon tool I realised I wasn't doing that anymore. I was running a small crew. Several narrow agents, each with one job, handing work to each other, and one of them whose entire purpose was to try to poke holes in the others' work.

That shift felt like the actual difference between "I use AI" and "I build with AI." So I want to write down how I think about it, using that tool as the concrete example, because abstract advice about agents is everywhere and it's mostly useless.

## The one-line version

I don't ask one model to do a big job. I split the big job into small ones, give each to its own agent, and I give the agent that produces the important output an adversary whose job is to attack it before I ever see it.

## Why not one big prompt

I tried the one-big-prompt version first. "Here's an Amazon listing, research it and rewrite it and check it's compliant." It works, sort of. But it's mushy. The model half-researches, half-writes, forgets to check the character limit, and you can't tell which part it was bad at.

Splitting it up fixed more than I expected.

In the tool, the research stage is four separate agents running at the same time. One looks at competitors. One digs for keywords. One reads reviews for what customers actually complain about. One audits the July-27 compliance rules. Each one is dumb in the good way. It has a single job and a single kind of answer to give.

Because they're independent, they run in parallel, so four narrow searches cost me about the same wall-clock time as one. And when one of them is weak, I know exactly which one to go fix, instead of tweaking a giant prompt and praying.

Then a separate agent takes all four sets of findings and writes the actual output. It never had to do the research; it just synthesises. One job.

## The adversary

Here's the piece I'd argue matters most, and the piece most "agent" demos skip.

Anything important that an agent produces, I hand to another agent whose only job is to attack it.

In the tool, after the writer drafts the new title and highlights, a red-team agent goes at it. Is the title actually under 75 characters, counted exactly? Did the rewrite quietly drop a selling point that was in the original? Is there a claim in here that could get the listing suspended? It's not there to be nice. It's there to find the problem before the human does.

This changed the quality more than any amount of prompt-polishing on the writer did. A model grading its own work is a soft grader. A model told "your job is to find what's wrong with this" is a completely different, much harder reviewer.

I pushed the same idea into how I test the thing, too. When I built the exam for the drift detector, the useful questions weren't the obvious ones. They were the adversarial ones, deliberately designed to make the agent trip. The traps are where you learn anything. (That's its own post.)

I think this comes from embedded work honestly. You don't ship a system that trusts itself. You add a watchdog, a second check, something whose job is to assume the main thing is lying. Giving an agent an adversary is the same instinct, just aimed at a language model.

## The boring parts that make it not fall over

Two unglamorous things do a lot of the load-bearing.

**Making the model return a fixed shape.** Early on I was asking the model to "reply in JSON" and then fishing the JSON out of its text with string-matching. It broke exactly when you'd expect, at the worst time. Newer Claude models let you *force* the output into an exact structure, guaranteed. So the writer agent can't hand back something malformed that crashes the next step. It sounds small. It removed a whole category of 2am bug.

**Not using the expensive model for everything.** The four research agents run on a faster, cheaper model. The one job I care about most, writing the actual listing and doing the drift analysis, runs on the strongest model. It's the same instinct as not putting your senior engineer on data entry. Match the model to how much the task actually matters. It's cheaper and, weirdly, often better, because the cheap model is plenty for narrow grunt work and the good model isn't distracted by it.

## Where I'd be careful

More agents is not automatically better, and I want to say that clearly because "just add more agents" is becoming a reflex.

Every agent you add is more latency, more cost, and one more place for something to go sideways. My research stage is genuinely slow because it's four agents each doing live web search. I decided that was fine for a tool meant to watch things overnight. It would not be fine for something that has to answer in two seconds.

So my rough rule is: split the job when the pieces are genuinely different kinds of work, and add an adversary when being wrong actually costs something. Otherwise, one good agent is less to maintain and less to explain.

I haven't dug into every trade-off here, and I'm sure I'm over-orchestrating in places I haven't noticed yet. But the two habits, narrow agents plus a built-in adversary, are the ones I'd keep.

---

*The mental shift that stuck with me isn't really about agents. It's that I stopped treating the model as an oracle I ask, and started treating it as a set of coworkers I manage, one of whom I specifically hired to disagree. That reframe changed how much I trust what comes out the other end. Mostly it made me trust it more, because now something already argued with it.*
