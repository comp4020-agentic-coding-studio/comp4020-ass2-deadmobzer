import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

// The curated source list from CLAUDE.md's "Sources" table. A week's
// `source` field must name at least one of these authors — adding a new
// source means updating CLAUDE.md and this list together, deliberately.
const APPROVED_AUTHORS = [
  "Frankfurt",
  "Bergstrom",
  "West",
  "Snyder",
  "Strathern",
  "Parkinson",
  "Mednick",
  "Hicks",
  "Humphries",
  "Slater",
  "Chu",
  "Choi",
  "Pennycook",
  "Sokal",
  "Petrocelli",
  "Turpin",
  "Swift",
  "Graeber",
  "Biggs",
];

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const lectures = api.nodes.filter((node) => node.type === "lectures");

describe("weekly source citations", () => {
  it("has every lecture week cite at least one source", () => {
    for (const lecture of lectures) {
      const source = lecture.meta?.source;
      expect(typeof source === "string" && source.length > 0, `${lecture.id} has no source`).toBe(
        true,
      );
    }
  });

  it("only cites sources from the approved list", () => {
    for (const lecture of lectures) {
      const source = String(lecture.meta?.source ?? "");
      const recognised = APPROVED_AUTHORS.some((author) => source.includes(author));
      expect(recognised, `${lecture.id} cites an unapproved source: "${source}"`).toBe(true);
    }
  });
});
