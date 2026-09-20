import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  tags: string[];
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const lectures = api.nodes.filter((node) => node.type === "lectures");
const LEARNING_OUTCOMES = ["LO1", "LO2", "LO3"];

describe("learning outcomes", () => {
  it("tags every lecture with exactly one learning outcome", () => {
    for (const lecture of lectures) {
      const los = lecture.tags.filter((tag) => LEARNING_OUTCOMES.includes(tag));
      expect(los, `${lecture.id} should carry exactly one LO tag`).toHaveLength(1);
    }
  });

  it("maps each learning outcome to exactly four weeks", () => {
    const counts = Object.fromEntries(LEARNING_OUTCOMES.map((lo) => [lo, 0]));
    for (const lecture of lectures) {
      for (const tag of lecture.tags) {
        if (tag in counts) counts[tag] += 1;
      }
    }
    expect(counts).toEqual({ LO1: 4, LO2: 4, LO3: 4 });
  });
});
