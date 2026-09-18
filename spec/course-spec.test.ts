import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const nodesOfType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("assignment 2 spec", () => {
  it("keeps the SLOPxxxx digits the repo was provisioned with", () => {
    expect(api.course.code).toMatch(/^SLOP[123468]669$/);
  });

  it("runs across twelve dated teaching weeks", () => {
    const sessions = nodesOfType("sessions");
    const weeks = sessions.map((node) => node.meta?.week).sort((a, b) => Number(a) - Number(b));
    expect(weeks).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("has at least one lecture linking a real deck", () => {
    const decked = nodesOfType("lectures").filter(
      (node) => typeof node.meta?.slides === "string" && node.meta.slides.length > 0,
    );
    expect(decked.length).toBeGreaterThan(0);
  });

  it("weights its assessments to add up to 100%", () => {
    const total = nodesOfType("assessments").reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });
});
