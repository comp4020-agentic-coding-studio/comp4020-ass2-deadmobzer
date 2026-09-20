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

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const tutorials = api.nodes.find(
  (node) => node.type === "assessments" && node.id === "assessments/fortnightly-tutorials",
);

describe("fortnightly tutorials", () => {
  it("exists as an assessment", () => {
    expect(tutorials).toBeDefined();
  });

  it("splits its weight 20% attendance, 20% quality of bullshitting", () => {
    expect(tutorials?.meta?.tutorialSplit).toEqual([20, 20]);
  });

  it("has a split that sums to its own weight", () => {
    const split = tutorials?.meta?.tutorialSplit as number[];
    const total = split.reduce((sum, part) => sum + part, 0);
    expect(total).toBe(tutorials?.meta?.weight);
  });
});
