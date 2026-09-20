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

## Still open

- **Ralph** (key figure, `CLAUDE.md` "Key figures"): confirmed to be a real
  academic/public figure, not an in-joke — full name, the actual work being
  cited, and which week it anchors are still needed before any content gets
  written around this.
