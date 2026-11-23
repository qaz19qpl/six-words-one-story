import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — a complete story in exactly six words.
// The gate requires 1-60 characters; the judge requires exactly six words.
const story = "Sold the house. Kept the ghost.";

const words = story.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly six words, got ${words.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
