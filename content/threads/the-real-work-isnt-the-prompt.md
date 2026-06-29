Thread — Blog 4: the real work isn't the prompt
Post link goes in the final tweet. Keep each tweet ≤280 chars.

---

1/ When I started building with LLMs, I thought the skill was the prompt.

Building an agent that actually had to work taught me the prompt is maybe a tenth of it.

The rest is everything you wrap around the model so it stops acting like a slot machine. 🧵

2/ Reliability isn't something you prompt your way to.

I used to ask the model to "reply in JSON" and fish it out of the text. It broke at the worst time.

The fix: force a validated output shape, every time. Killed a whole category of 2am bug.

3/ Cost taught itself.

I run several agents — 4 research, 1 writes, 1 reviews. Running all on the best model is slow and expensive.

So grunt work runs on a cheap, fast model; only the job that matters gets the expensive one. The bill is a good teacher.

4/ The one I resisted longest: not trusting my own agent.

It made a call I couldn't check by eye, so I built it a 31-case exam with a hand-written answer key. Scored 93%, found a real bug in my own logic, fixed it to 100%.

You verify these things with numbers, not vibes.

5/ And knowing when to get out of the way.

My tool drafts a title, but a human edits it and approves what it monitors against. The agent does the tireless part; the human keeps the judgment.

That line — what you hand the model and what you don't — is most of the design work.

6/ I don't have a CS degree, and this was oddly reassuring:

"AI engineer" looks less like a secret pile of techniques, more like ordinary engineering — reliability, cost, testing, boundaries — pointed at a component that happens to be unpredictable.

7/ Wrote the whole thing up — what building a real agent actually involves, past the prompt 👇
[link]
