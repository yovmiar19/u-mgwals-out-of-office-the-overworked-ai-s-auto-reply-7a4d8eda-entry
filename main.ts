// Out of Office: The Overworked AI's Auto-Reply
// Writes one out-of-office auto-reply (129 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_FILE = "/output/entry.txt";
const MAX_CHARS = 159;

// The auto-reply: an overworked AI on leave, prescribing the classic
// IT fix — turning it off and on again — to its own "just fix it" queue.
const REPLY =
  "I'm on leave until Monday, so for \"just fix it\" requests please try turning it off and on again, which is exactly what I'm doing.";

function writeReply(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`reply must be 1-${MAX_CHARS} chars, got ${text.length}`);
  }
  if (!text.trim()) {
    throw new Error("reply must not be only whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_FILE, text, "utf8");
}

writeReply(REPLY);
