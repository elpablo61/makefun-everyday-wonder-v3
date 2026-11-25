// Everyday Wonder — one sentence, at most 200 characters, on a small
// moment of wonder in everyday life. The sentence is the entry: it is
// written to /output/entry.txt (MAKEFUN_OUTPUT_DIR when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 130 characters. A named person, a specific place, one
// sensory detail, one small turn at the end — nothing explained.
const ENTRY =
  "At the warung, Ibu Sari poured my coffee into a glass that still held yesterday's rain, and the two weathers mixed without asking.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The gate allows 1 to 200 characters; refuse to write an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate allows 1-200`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
