# CLAUDE.md — SLOP1669 Intro to Bullshitting

This is the harness for the SLOP1669 course site. Read it in full before you
plan, build or edit anything. When this file and your instincts disagree, this
file wins. When this file and `README.md` disagree about the platform,
`README.md` wins and you tell me about the conflict.

## Before you touch anything

1. Read `README.md`. It says what is fixed (SlopU's name, marks and palette,
   the content collections, the generated API) and what is ours. Never edit
   the fixed parts.
2. Read the Assignment 2 brief and spec:
   https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/assessments/assignment-2/
3. Confirm the three digits the repo's course code arrived with. The course
   code is `SLOP1` + those digits. If they are not `669`, use the repo's
   digits and tell me, because the title "SLOP1669" appears throughout this
   file.

## How to work in here

- Keep the dev server running (`pnpm dev`) so you see changes as you make them.
- Run `pnpm check` before every commit, and `pnpm check:evidence` before any
  push that touches `PROCESS.md` or artwork.
- Open the page in a browser and look at it at both marking viewports. The
  rendered page is the truth; your mental model of it isn't.
- When a check fails, read its output before you change anything.
- Never commit a red state.
- One logical change per commit. The commit message says what changed and why
  (one line of why is enough). I cite these commits in `PROCESS.md`, so a
  message like "update content" is useless to me.

## The rule the whole course is built on

**Follow the brief in full.** That is the first lesson of SLOP1669, and it
applies to you building it. Every line of the Assignment 2 spec must be met:
deployed and working at both viewports, twelve dated teaching weeks, at least
one lecture with a real deck linked from its page, assessment summing to 100%,
our own checks in `spec/`, and `pnpm check` plus `pnpm check:evidence` passing.
A funny site that misses a spec line is not funny, it is a fail.

## What the course is

SLOP1669 Intro to Bullshitting teaches students to complete their courses with
minimal effort and maximal outside-the-box thinking. It is the supply side of
Bergstrom and West's *Calling Bullshit*: they teach you to detect it, we teach
you to produce it.

The joke only works if the course is real. The site must read as a coherent,
teachable twelve-week course that someone would actually want to take. The
satire lives in the content and the voice, never in a broken or half-built
site.

The course is also meta: it was built using the exact process it teaches
(see "Process" below). The site may acknowledge this once, deadpan, on the
home page or the course design page. Do not keep winking about it.

The build is the performance. I am LARPing as a professor who generates his
own course without reading any of it — not skipping the reading as a
shortcut, but treating the not-reading itself as the demonstration.
Bullshitting everything, including this file, is in character, not a
production shortcut being hidden.

Underneath the jokes there is one real thesis: we do not make good things,
we make justifications for bad things. That is what "outside-the-box
thinking" is a euphemism for in a lot of assessment contexts, and saying so
plainly is the mindset shift LO3 is actually teaching — evaluating bullshit
well starts with admitting an excuse is a skill, not a failure. AI-generated
text across this site is not being smoothed over; leaving it visible is the
point, since a course about producing convincing bullshit should be willing
to show its own. That's self-incriminating and it stays that way on purpose.

None of this makes the AI-authorship question comfortable, and it shouldn't.
Leaning on an agent to write a satire course — including the parts that
comment on people over-relying on agents, and overreaching even when told
not to — is exactly the overreach LO1 is supposed to name, and the ethics
of that, like the ethics of academic satire generally, don't resolve
cleanly. The course doesn't pretend they do. Committing to the bit means
committing to that discomfort too.

House motto, source disputed: "Everything's a bit, you're just not
committing to it enough." Closer to how it was actually put: "Every
costume's a fit, you're just not LARPing hard enough."

## Voice

- Dry, deadpan, satirical, meta. Crude is allowed; swearing is allowed where
  it lands, not as punctuation. "Bullshit" is a technical term in this course
  and is used as one.
- Write like a tired convenor who has fully committed to the bit. Official
  university register, absurd content.
- No AI-slop tells: no "delve", "tapestry", "journey", "unlock", "in today's
  fast-paced world", no rhetorical triplets, no em-dash pile-ups, no
  sentences that restate the heading. If a paragraph could appear on any
  course site, rewrite it.
- Punch up (at assessment design, rubrics, metrics, academia, AI hype), not
  down at students or any group of people.

## Course structure

### Learning outcomes

Upon completion, students will be able to:

1. **LO1** Understand and develop a process for using tools, including large
   language models and agentic software, to deliver content at a rapid pace.
2. **LO2** Explain how satire and comedy can be weaponised against an
   open-ended assignment brief to produce commentary on society at large.
3. **LO3** Explore and evaluate the benefits and drawbacks of various types of
   bullshitting.

Each LO is covered by exactly four weeks (mapping below).

### How the course runs

Interactive workshop lectorials, with lab tasks due fortnightly.

The assignment content is not announced until the last minute. The official
reason, stated deadpan on the site: Parkinson's law holds that work expands to
fill the time available for it, so the course removes the time. A brief
released early is a brief overthought. This is also framed as authentic
assessment, since real clients send briefs at 4:55pm on a Friday.

### Key figures

Ralph — a figure the course studies directly. Which week this belongs to and
what the actual citation is are both still open (see "Sources" below: ask me
before writing content that leans on this, same as any other new source).

### Weekly schedule

Each pair of weeks on the same topic must do different jobs (theory then
application, or technique then consequence). Markers read non-adjacent weeks,
and twelve weeks that repeat each other fail the brief.

| Wk | Title | LO | Job of the week | Anchor source |
|----|-------|----|-----------------|---------------|
| 1 | Live Bullshitting: A Demonstration Performed Without Preparation | LO3 | The convenor bullshits a lecture live; students identify what worked | Frankfurt (2005) |
| 2 | Thinking Abstractly: Everything Is a Metaphor for Something Else | LO3 | Theory: remote association as a skill | Mednick (1962) |
| 3 | Abstract Thinking, Demonstrated on Whatever Was on the Lecturer's Desk | LO3 | Application: build an argument from a random object | Mednick (1962) |
| 4 | The Toolbelt: LLMs, Agents and Other Ways to Not Be the Author | LO1 | Survey of tools and their failure modes | Hicks, Humphries & Slater (2024) |
| 5 | Tools in Anger: One Assignment, Forty Minutes, Zero Remorse | LO1 | Live-fire demo of a full last-minute workflow | Parkinson (1955); Chu & Choi (2005) |
| 6 | Midsemester Revision (Revising What, Exactly?) | LO1 | Revision as re-prompting; prep for the midsem oral | Snyder (1971) |
| 7 | Satire Out of Anything I: The Rubric Is a Text | LO2 | Finding the target: reading a brief as satirical material | Strathern (1997) |
| 8 | Satire Out of Anything II: Punching Up, Sideways, and at the Marker | LO2 | Delivery: deadpan, escalation, knowing where to stop | Swift (1729) |
| 9 | Fake Deep I: The Philosophy of Critique | LO2 | Critique as commentary; why vagueness reads as profound | Pennycook et al. (2015) |
| 10 | Fake Deep II: Say "Liminal" and Watch Them Nod | LO3 | Production and detection of pseudo-profundity; when it backfires | Sokal (1996); Petrocelli (2018) |
| 11 | Genuine Attempts: A Controlled Experiment in Effort | LO1 | Students do the assignment properly once, as a control group | Turpin et al. (2021) |
| 12 | Exam Revision: The Oral Is Just Talking | LO2 | Prep for the final oral; the course as a whole as a bit | Graeber (2018) |

LO count: LO1 = 4, 5, 6, 11. LO2 = 7, 8, 9, 12. LO3 = 1, 2, 3, 10.

Week 1 must include at least one real deck, linked from its lecture page.
Week 1 is being recorded live; once the recording exists, link it from the
week 1 lecture page alongside the deck, so the deck also stands alone for
self-study. The current deck is a working draft, not a finished artifact —
expect it to keep moving between commits. That's iterative design, not
neglect; side comments in the deck source are there to track that
in-progress state honestly rather than pretend it's already final.

### Assessment

| Item | Weight | Notes |
|------|--------|-------|
| Midsemester oral | 30% | Held after the week 6 revision lecture |
| Final oral | 30% | Exam period |
| Fortnightly tutorials | 40% | 20% attendance, 20% quality of bullshitting |

Total: 100%. The tutorial split is always stated as 20% + 20%, never as
"50% of 40%" on one page and something else on another.

Every assessment page states its brief is released at the last minute, per
course policy.

### Course materials

The site has sections for Lectures, Labs and Assignments.

### The course's one piece of genuine advice

"The number one thing is to follow the rubric and brief in full." This appears
once on the site, stated plainly, with no joke attached. It is the only
sincere sentence in the course, and the site should treat it that way.

## Sources

The course is about bullshit. The citations are not. Every source below is
real. Rules:

- Only cite sources on this list. To add one, ask me first.
- Never invent a quote, page number, DOI or finding. Paraphrase by default.
- The only direct quotes allowed are the three marked below, each under
  fifteen words, and each attributed.
- Weeks cite their anchor source on the week page.

| Source | Use |
|--------|-----|
| Frankfurt, H. G. (2005). *On Bullshit*. Princeton University Press. | Definition: bullshit as indifference to truth, not lying. Quote allowed: "indifference to how things really are". |
| Bergstrom, C. T., & West, J. D. (2020). *Calling Bullshit*. Random House. Course site: callingbullshit.org | The detection course we are the supply side of. |
| Snyder, B. R. (1971). *The Hidden Curriculum*. MIT Press. | Students learn what assessment rewards, not what the course claims. |
| Strathern, M. (1997). 'Improving ratings': Audit in the British university system. *European Review*, 5(3), 305–321. | Quote allowed: "When a measure becomes a target, it ceases to be a good measure." |
| Parkinson, C. N. (1955). Parkinson's law. *The Economist*. | Quote allowed: "Work expands so as to fill the time available for its completion." |
| Mednick, S. A. (1962). The associative basis of the creative process. *Psychological Review*, 69(3), 220–232. | Creativity as connecting remote ideas. |
| Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology*, 26. | LLM output as Frankfurtian bullshit. |
| Chu, A. H. C., & Choi, J. N. (2005). Rethinking procrastination. *Journal of Social Psychology*, 145(3), 245–264. | Active procrastinators perform fine under pressure. |
| Pennycook, G., et al. (2015). On the reception and detection of pseudo-profound bullshit. *Judgment and Decision Making*, 10(6), 549–563. | Why vague abstraction reads as profound. |
| Sokal, A. (1996). Transgressing the boundaries. *Social Text*, 46/47. | Case study: nonsense that got published. |
| Petrocelli, J. V. (2018). Antecedents of bullshitting. *Journal of Experimental Social Psychology*, 76, 249–258. | People bullshit when not held accountable. Use for the "drawbacks" half of LO3. |
| Turpin, M. H., et al. (2021). Bullshit ability as an honest signal of intelligence. *Evolutionary Psychology*, 19(2). | Justifies grading bullshit at 20%. |
| Swift, J. (1729). *A Modest Proposal*. | Deadpan satire that follows absurd logic seriously. |
| Graeber, D. (2018). *Bullshit Jobs*. Simon & Schuster. | Links assignment bullshit to societal bullshit. |
| Biggs, J. (1996). Enhancing teaching through constructive alignment. *Higher Education*, 32, 347–364. | Our LO-to-assessment structure, which the course design page cites straight-faced while parodying it. |

## Checks to write in `spec/`

These protect promises the build cannot. Write each as a separate commit.

- Exactly twelve teaching weeks, each with a date.
- Each LO maps to exactly four weeks.
- Assessment weights sum to 100, and tutorials are 20 + 20.
- No two weeks share a title or summary.
- Every week page cites at least one source, and every cited source is on the
  approved list above.
- Course code matches the digits the repo arrived with.
- At least one lecture page links to a deck that exists.

## Process

This section records how the course was made. It exists so I can write
`PROCESS.md`. **You do not write or edit `PROCESS.md`.** It is my account and
has to be in my words.

Why the process looks the way it does, for the record: this is a course on
producing convincing bullshit, so an agent generating the bulk of it while I
supply direction and taste isn't a shortcut being smoothed over — it's the
demonstration. That doesn't make the AI-authorship question comfortable, and
it shouldn't. There's a real, unresolved tension in leaning on an agent to
build a satire about people over-relying on agents, and in how murky the
ethics of AI-assisted satire get from an academic-integrity standpoint. The
course doesn't resolve that. It names it and keeps going.

1. Read the assignment brief.
2. Came up with a unique idea: a course on doing courses with minimal effort.
3. Wrote down details, basing the structure on an existing example (COMP4020).
4. Used AI to create a harness so the agent understands what we are trying to
   do.
5. Told the agent to use its harness to create an initial repo.
6. Used an external AI assistant to flesh out the ideas and improve the
   harness, especially to pull in the sources needed.
7. Rerun step 5 with the new harness.
8. Wrote the week 1 deck from this file and the weekly schedule. It's a
   working draft, not a finished one — that gets revisited, not this week
   but next lecture, for a short finishing pass.
9. Record week 1 live as the demonstration lecture. Link the recording and
   the deck from the week 1 page once both exist, so the deck also works as
   a standalone self-study artifact.
10. Come back to the week 1 deck next lecture after a deliberate gap —
    sleep on it, look at it with fresh eyes, then finish it. That gap is
    part of the authentic process, not a delay to gloss over.
11. Utilise everything mentioned and done prior to fill out the PROCESS.MD
    file. Make sure to ask the user questions when going through this step.
    Concretely, this is a routine, not a one-off: before drafting
    `PROCESS.md`, walk the commit log for commits that flagged an
    undocumented decision (the "say so in the commit message" rule below is
    what produces these), list them out, and ask me to justify or annotate
    each one in my own words — one at a time, rather than guessing at my
    reasoning. Keep my answers in a scratch note, not in `PROCESS.md`
    itself, for me to draw from when I write it.
12. Do a human pass and write a reflection.
13. Rinse and repeat until satisfied.

When you make a decision I did not specify (a structural choice, a rule you
had to interpret, a check you chose not to write), say so in the commit
message so I can find it later.