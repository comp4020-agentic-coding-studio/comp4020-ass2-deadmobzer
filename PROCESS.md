# Process overview

## What I built

SLOP1669 is a fake university course on how to bullshit your way through
everything: the supply side of *Calling Bullshit*, taught by someone LARPing
as a professor. It's a performance piece about what real laziness can produce
if you commit to it fully. It's a bit played all the way through. That
extends to this document, which is fair game to be bullshit too.

## How I got here

**Harness first.** I wrote `CLAUDE.md` before any content existed so the agent
could get a large chunk of work done in one go, rather than me directing
content decisions one at a time
([`572cedd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/572cedd)).

**Spec into content.** The brief wants twelve dated teaching weeks; the
assessment table calls tutorials fortnightly. Sessions exist for all twelve
weeks, but grading lands only every second one
([`572cedd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/572cedd)), with weeks, LOs, sources and weights built out in
[`b655b97`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/b655b97). The "Lectures, Labs and Assignments" line read as a
description of the three content types, not a rename instruction, so sessions
stayed "Sessions".

**Knowing it was right.** Rather than edit a weak pre-existing deck check, a
stronger test now confirms the built HTML exists
([`a295b03`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/a295b03)). LO tags are read from the generated API
([`bf66987`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/bf66987)), and the approved-sources list is deliberately
duplicated so adding a source means touching both files
([`c68cc8e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/c68cc8e)).

**Ralph Lauren.** "Ralph" became Ralph Lauren: invented pedigree, no training,
an empire from a polo shirt. He sits in week 3 beside Mednick (1962), since the
polo shirt is the real-world "argument from a random object". He's a case
study, not a citation, so he stays out of the approved-sources table
([`3491a73`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/3491a73), [`1d3c253`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/1d3c253)).

**The staff.** My proudest part is the names: Genevieve Erik, Justin Khayse,
May Dupp, Fae k. Corsa. As far as I'm aware, AI can't think phonetically the
way a human inventing a pun can, so this is the part most clearly mine. Weeks
follow the pun, not a rotation ([`7696bb5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/7696bb5)): the professor
bookends the course, "just in case" takes tools and the genuine-attempt week,
"made up" takes the fake-deep weeks, and "fake course" runs the tutorials.

**The blank slide.** The week-1 deck has ground rules, one permitted Frankfurt
quote, a debrief, and a slide left deliberately blank
([`31b6b77`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/31b6b77)). That's where the performance has to happen live.
It's the clearest signal that I'm playing a bit, not building a lecture with a
gap in it.

**The agent.** It worked as expected throughout. The one surprise was that it
didn't remove leftover starter text on its own; I had to catch that and ask
([`eba485a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/eba485a), [`f186849`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/f186849)).

**AI authorship.** Sometimes this is framed as a tension. I don't think it is
one here. I wanted none of the writing style to be mine; that not-mine-ness is
part of the performance, including this document, which the agent drafted
from my answers. I'm still behind it. The agent can follow a bit, but it can't
perform erratically the way a human does, and directing that performance is
the authorship that matters. None of this shifted how I see bullshitting or
how far I trust agentic tools.

## Reflection

**What was the breakthrough that moved the work forward?**

Drafting `CLAUDE.md` was where I actually brainstormed the course: pinning
down weeks, learning outcomes, approved sources and assessment weights
forced the ideas into a shape before anything was built.

**What did this work change about who I want to be as a software
developer?**

The agent behaved the way I expected, and I didn't come out trusting
agentic tools more or less.