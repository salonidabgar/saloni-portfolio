Thread — Blog 2: evaluating an AI agent
Post link goes in the final tweet. Keep each tweet ≤280 chars.

---

1/ I built an AI agent that judges whether an Amazon listing "meaningfully changed."

Then got stuck on a harder question: how do I know it's any good?

"It looked right when I checked five" isn't a test. It's a vibe.

So I built it an exam. 🧵

2/ 31 labeled examples.

Each one: an old listing, a new one, and the answer I wrote by hand (did it change, what got dropped).

A script feeds every case to the *real* agent and grades it. Same code that ships, not a copy.

3/ The easy questions are useless. The trick questions are the point.

Word order shuffled. "32 oz" → "32 ounce". A spec that MOVED from the title into the bullets.

Correct answer to all of those: nothing changed, stay quiet. A monitor that cries wolf gets ignored.

4/ First real run: 93.5% accuracy, 18% false positives.

All the same bug — it flagged specs that had just moved to the bullets, because it read title-first.

Recall was 100% though. It never missed a real drop. If you're going to fail, fail in that direction.

5/ Fixed the agent to treat title + bullets as one pool of specs. Re-ran the same 31.

100% accuracy. 0 false positives.

And the fix shipped to production. The exam didn't just measure the agent — it made it better.

6/ 100% on 31 examples isn't "solved". It's "solved for the cases I thought of."

The point isn't the number. It's that I can now change anything and re-run the exam in a minute.

Full story 👇
[link]
