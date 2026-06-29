Thread — Blog 1: the build story
Post link goes in the final tweet. Keep each tweet ≤280 chars.

---

1/ Amazon now auto-rewrites any product title over 75 characters using its own AI. Silently, if you're not Brand Registry.

It quietly drops your specs — "1300mg", "Third-Party Tested" — and you're still liable for whatever goes live.

So I built an agent that watches for it. 🧵

2/ It's a Chrome extension.

Open any Amazon product page → a fleet of Claude agents research the listing, draft a compliant 75-char title + the new Item Highlights field, and a red-team agent checks it.

Runs entirely on the Anthropic API. No other AI service.

3/ The part I actually care about: monitoring.

Save an approved baseline of a listing. Later, one click checks if Amazon's AI changed it — and tells you which specifics were dropped, plus the likely cause (automated rewrite vs manual edit) with a confidence level.

4/ One person can't eyeball 200 titles every morning. An agent can.

That's the whole pitch. Not a dashboard that scores your listing — an agent that does the work and keeps watching it.

5/ I don't even sell on Amazon. The problem just got under my skin: a platform's AI editing people's work, silently, with the seller still on the hook.

Wrote up why I built it and how it works 👇
[link]
