# Process notes (scratch)

Not `PROCESS.md`. This is the running scratch file the decision-interview
routine in `CLAUDE.md`'s Process section writes to — my answers, in my own
words, for you to draw from when you write `PROCESS.md` yourself. Delete or
fold into that document whenever; nothing here is meant to ship as-is.

## Decisions justified so far

### Sessions label kept as "Session/Sessions", not renamed to "Labs" (commit `1d77b66`)

Justification confirmed as-is: CLAUDE.md's "Lectures, Labs and Assignments"
course-materials line reads as a generic description of the three content
types (mapping onto this site's actual Lectures/Sessions/Assessments
sections), not a literal instruction to relabel the sessions collection.
Renaming would have cascaded into every session file's title and the
tutorials assessment's name, which CLAUDE.md itself calls "Fortnightly
tutorials," not "Labs."

### Pre-existing weak deck-exists assertion left untouched (commit `a295b03`)

Justification confirmed as-is: `spec/course-spec.test.ts` already had a weak
check (deck path frontmatter is a non-empty string). Rather than editing that
pre-existing file, a new, stronger test (`spec/deck-exists.test.ts`) was added
alongside it that checks the actual built HTML file exists in `dist/`. Both
now run; the old one wasn't touched.

### Ralph resolved as Ralph Lauren, a case study, not an academic source

Confirmed: Ralph Lauren, used as a real-world example of successfully
LARPing/bullshitting into fashion dominance (invented pedigree, no formal
training, built a lifestyle empire from a polo shirt). Placed in week 3,
which already anchors on Mednick (1962) for "build an argument from a random
object" — the polo shirt is that random object's real-world equivalent.
Deliberately kept out of the approved-sources table: he's illustrative case
study content, not an academic citation, and doesn't touch week 3's actual
anchor-source requirement.

### Staff teaching weeks assigned by thematic fit, not rotation (commit `7696bb5`)

Justification confirmed as-is: Genevieve Erik (the professor) bookends the
course at weeks 1, 6, 12; Justin Khayse ("just in case") covers the
tools/workflow pair plus the genuine-attempt week (4, 5, 11); May Dupp
("made up") covers the abstract-thinking and fake-deep pairs (2, 3, 9, 10);
Fae k. Corsa ("fake course") runs every fortnightly tutorial plus the satire
pair (7, 8), inheriting the old tutor's role of marking most of the 20% that
isn't attendance. No further reasoning beyond the pun-to-week fit already in
the commit message.

### Week-1 deck's structure is a deliberate design choice (commit `31b6b77`)

Confirmed worth citing: ground rules, the one permitted Frankfurt quote, a
slide left deliberately blank for the live bullshitting bit, and a debrief
structure. The blank slide specifically is the point — it's the moment the
recorded performance has to actually happen live, not a gap to fill in
later.

### Sessions run all twelve weeks, graded every second one (commit `572cedd`)

Confirmed worth citing: the brief requires twelve dated teaching weeks and
CLAUDE.md's assessment table calls the tutorials "fortnightly." Rather than
letting one requirement crowd out the other, sessions exist for all twelve
weeks (satisfying "dated teaching weeks") while grading only lands every
second one (satisfying "fortnightly").

### Image-free site, starter art removed rather than replaced (commit `1d77b66`)

Justification confirmed as-is: no real photography or illustration exists
for this site, and the README sanctions going image-free as the alternative
to shipping unreplaced starter art. Starter hero image, social card, and
staff photos were removed along with their references (home, 404,
site-config's socialImage) rather than left in as placeholders.

## Minor technical choices (logged, not interviewed — self-explanatory)

- LO tag read from the generated API rather than parsed from markdown
  (commit `bf66987`), so the check survives content edits as long as the
  `tags: [LO#]` frontmatter key stays put.
- Approved-source list in `spec/` is a deliberate duplicate of CLAUDE.md's
  own table, not a shared import (commit `c68cc8e`) — adding a source means
  touching both files on purpose.

## Citation links for PROCESS.md

Repo is `comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer`, so a
single commit cites as:
`https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/commit/<hash>`
and a range as:
`https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-deadmobzer/compare/<hash1>...<hash2>`
— swap in real hashes from `git log`; the template's `a1b2c3d` /
`e4f5a6b...` placeholders don't resolve to anything in this repo.

## Still open

(none right now)
