import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  title: string;
  description?: string | null;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const lectures = api.nodes.filter((node) => node.type === "lectures");

function duplicates(values: string[]): string[] {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) dupes.add(value);
    seen.add(value);
  }
  return [...dupes];
}

describe("twelve distinct teaching weeks", () => {
  it("gives no two lecture weeks the same title", () => {
    expect(duplicates(lectures.map((lecture) => lecture.title))).toEqual([]);
  });

  it("gives no two lecture weeks the same summary", () => {
    expect(duplicates(lectures.map((lecture) => lecture.description ?? ""))).toEqual([]);
  });
});
