import { existsSync, readFileSync } from "node:fs";
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
const lectures = api.nodes.filter((node) => node.type === "lectures");
const decked = lectures.filter(
  (node) => typeof node.meta?.slides === "string" && node.meta.slides.length > 0,
);

describe("linked decks are real", () => {
  it("has at least one lecture linking a deck", () => {
    expect(decked.length).toBeGreaterThan(0);
  });

  it("builds a page at every lecture's linked deck path", () => {
    for (const lecture of decked) {
      const slides = lecture.meta?.slides as string;
      const builtPage = resolve("dist", slides.replace(/^\//, ""), "index.html");
      expect(existsSync(builtPage), `${lecture.id} links ${slides}, but ${builtPage} wasn't built`).toBe(
        true,
      );
    }
  });
});
