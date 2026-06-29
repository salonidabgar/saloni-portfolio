Thread — Blog 3: running a crew of agents
Post link goes in the final tweet. Keep each tweet ≤280 chars.

---

1/ For a while, "using AI" meant one big prompt in a chat box.

Building my last project, I realized I'd quietly switched to running a small crew of agents — and hiring one specifically to argue with the others.

That shift is the real "building with AI." 🧵

2/ One big prompt ("research this listing AND rewrite it AND check compliance") is mushy. You can't tell which part it was bad at.

So I split it: 4 narrow research agents run in parallel, each with one job. Then one writer synthesizes their findings.

3/ The piece most agent demos skip: the adversary.

Anything important an agent produces, I hand to another agent whose only job is to attack it.

A model grading its own work is a soft grader. "Find what's wrong with this" is a much harder reviewer.

4/ Two boring things carry most of the weight:

- forcing the model to return an exact structure (no more fishing JSON out of text)
- NOT using the expensive model for everything — cheap model for grunt work, best model for the output that matters.

5/ My rough rule:

Split the job when the pieces are genuinely different work. Add an adversary when being wrong actually costs something.

Otherwise one good agent is less to maintain. More agents isn't free — it's latency, cost, and more places to break.

6/ The reframe that stuck: I stopped treating the model as an oracle I ask, and started treating it as coworkers I manage — one of whom I hired to disagree.

How I actually build these, with a real example 👇
[link]
