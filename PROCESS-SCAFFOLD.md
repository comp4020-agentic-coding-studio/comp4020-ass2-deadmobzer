# Process overview — scaffold, not a draft

Not `PROCESS.md`. This mirrors its section headings so you can write
straight into the real file, with the citations and prompts already
looked up. Every bracketed line is something for you to write in your own
words — nothing in here is meant to be copied verbatim into `PROCESS.md`.

Delete this file once `PROCESS.md` is written; it has no reason to ship.

## What I built

[One paragraph, your words: what SLOP1669 is and the idea behind it — the
supply-side-of-*Calling Bullshit* framing, the LARP-as-professor conceit,
the real thesis under the jokes (CLAUDE.md's "we do not make good things,
we make justifications for bad things" line, if it's still true to how you'd
put it).]

Budget: ~80–120 words.

## How I got here

[The account, in whatever order makes it clear. Prompts below are pulled
from `PROCESS-NOTES.md` and this chat — answer each in your own words, cite
the commit(s), drop any that don't feel like your actual reasoning.]

- **Brief → idea → harness-first.** Why you wrote CLAUDE.md before content
  existed, and what that bought you.
  Cite: the harness-carry-forward and harness-authoring commits.

- **Turning the spec into content.** Weeks, LOs, sources, assessment
  weights — going from CLAUDE.md's table to real collection entries.
  Cite: [`572cedd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/572cedd),
  [`b655b97`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/b655b97)

- **sessionLabels kept as "Session/Sessions", not renamed to "Labs".** Why
  the "Lectures, Labs and Assignments" line in CLAUDE.md read as generic
  description, not a rename instruction.
  Cite: [`1d77b66`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/1d77b66)

- **The weak deck-exists test left untouched.** Why you added a new,
  stronger test alongside the old one instead of editing it.
  Cite: [`a295b03`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/a295b03)

- **Ralph resolved as Ralph Lauren.** Why a case study, not an academic
  citation — and why he sits outside the approved-sources list.
  Cite: [`3491a73`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/3491a73),
  [`1d3c253`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/1d3c253)

- **Staff assigned by thematic fit, not rotation.** Genevieve/Justin/May/Fae
  mapped to weeks by name-pun, not evenly rotated.
  Cite: [`7696bb5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/7696bb5)

- **The week-1 deck's blank slide.** Why the live-bullshitting slide is
  deliberately empty, and what that's doing for the performance.
  Cite: [`31b6b77`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/31b6b77)

- **Fortnightly grading across twelve dated weeks.** Reconciling the brief's
  "twelve teaching weeks" with the assessment table's "fortnightly".
  Cite: [`572cedd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/572cedd)

- **Going image-free.** No real photography exists; what you did instead of
  shipping unreplaced starter art.
  Cite: [`1d77b66`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/1d77b66)

- **The AI-authorship tension.** The one that doesn't resolve cleanly —
  leaning on an agent to satirise AI over-reliance. This is your reflection
  beat, and probably belongs last.

Budget: ~300–450 words. If you quote a prompt you gave the agent, curate it
rather than pasting a full transcript.

## Before you ship

- Delete this file.
- Remove the `<!-- TEMPLATE: ... -->` comment from the top of `PROCESS.md`.
- Run `pnpm check:evidence` — it checks your citations resolve to real
  commits and the template comment is gone, not that the account is good.
- Total word count 400–600, across both sections.
