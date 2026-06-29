---
title: "Amazon Started Rewriting Sellers' Titles With AI. So I Built Something That Watches."
excerpt: "I don't sell on Amazon. But the idea that a platform's AI could quietly rewrite your product title and drop your own selling points, without telling you, got under my skin. So I built an agent that catches it. This is what I made and why."
date: "2026-06-09"
readTime: "8 min read"
category: "Software Engineering"
tags: ["AI Engineering", "Agents", "Claude", "Chrome Extension", "Amazon"]
featured: true
emoji: "🛰️"
color: "#6366f1"
image: "/images/blog/watching-amazon-rewrite-your-listings/og.png"
---

I don't sell anything on Amazon. I should say that upfront, because this whole thing started as someone else's problem that I couldn't stop thinking about.

Here's the problem. As of July 27, 2026, Amazon caps product titles at 75 characters. If your title is longer, Amazon's own AI writes a new one for you and puts it live. Not a trim at the 75th character. A fresh title, generated from Amazon's ranking model and your backend keywords and your bullet points.

And if you're not enrolled in Brand Registry, it happens with no notification at all. You find out by looking.

The part that got me was what tends to fall out in that rewrite. The specifics. "1300mg." "Third-Party Tested." "120 count." The little trust-and-search signals a seller spent time getting right, quietly gone, and the seller is still legally on the hook for whatever text ends up live.

That's a strange kind of bug. The platform edits your work, silently, and you're responsible for the result. I wanted to see if I could build something that just... noticed.

## The one-line version

It's a Chrome extension. You open any Amazon product page, and a small fleet of AI agents research the listing, draft a compliant new title, and then keep watching that listing so they can tell you when Amazon's AI changes it out from under you.

The whole thing runs on the Anthropic API. No other AI service, no image models, nothing else to pay for.

## Why on the page, and not another dashboard

Most of the "AI for Amazon" tools I looked at are the same shape. You paste in a product ID, it thinks, and it hands you a score. 82 out of 100. Cool. Now what.

A score is data. It doesn't do anything. And you have to leave whatever you were doing to go get it.

So I put it where the work already happens: on the product page itself. The extension reads the live page directly, so it's always looking at the real, current listing, not a copy you pasted in an hour ago. You click a button, and it goes.

## What actually happens when you click

Four agents run at the same time, and each one does live web search:

- one looks at the competitive landscape,
- one hunts for the keywords and phrasing buyers actually use (and how legible the listing is to Amazon's newer AI shopping layer),
- one mines reviews for what customers keep complaining about or asking for,
- and one audits the title against the July-27 rules.

Then a fifth agent takes all of that and writes the actual output: a 75-character title, the new 125-character "Item Highlights" field, bullets, keywords. And a sixth agent red-teams that draft before I ever see it, checking character counts and compliance and whether any real selling point got lost.

I stream all of this into the side panel as it happens, so you watch the agents finish one by one instead of staring at a spinner. That part is honestly just nice to look at, but it also makes the wait feel like something is happening, because something is.

The draft isn't read-only. You can edit the title right there, watch the character counter, and hit re-verify to have the red-team agent check *your* version.

## The part I actually care about

The rewrite is useful. The monitoring is the point.

You save an approved snapshot of a listing as a baseline. Later, one click checks the live listing against it. If Amazon's AI quietly rewrote the title, the tool shows you exactly which specifics were dropped, how badly each one hurts, and its best guess at the cause: an Amazon July-27 rewrite versus a human edit versus a catalog change, with a confidence level and a one-line reason.

That last bit is what makes it feel less like a diff tool and more like something that understands the domain. "Your title lost 'Third-Party Tested' and 'Organic', high confidence this was an automated Amazon rewrite" is a different message than "3 fields changed."

Imagine that running across a couple hundred listings overnight. One person cannot eyeball 200 titles every morning. An agent can.

## Where I'd be careful

A few honest caveats, because I'd rather say them than have you find them.

It reads the page by scraping it, and Amazon's page markup varies a lot by category. I've got fallbacks, but a weird product type can still confuse the scraper.

A full research run takes a couple of minutes, because four agents doing real web search is not instant. I traded speed for actually going and looking things up. For a "watch this overnight" tool I think that's the right trade, but it's a trade.

And again, I don't sell on Amazon. I verified the July-27 rules against Amazon's own seller announcement rather than from experience, and I leaned on people who live in this world to sanity-check whether the *pain* is real. It is. But I'm the engineer here, not the seller.

## Why I built it at all

Partly because the problem is a clean example of something I keep believing: the interesting AI products aren't the ones that hand you a report. They're the ones that do a piece of the work and then keep an eye on it.

And partly, honestly, because it was a good excuse to build a proper multi-agent system with real verification, on a problem where being wrong actually costs someone money. That constraint makes you build differently. I wrote about that side of it separately.

---

*I still find it a little unsettling that the tool's most valuable feature exists only because a platform decided to edit people's work without asking. Maybe that's just what building on top of someone else's marketplace has always been. But at least now something is watching.*
