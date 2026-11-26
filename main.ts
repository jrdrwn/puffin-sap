import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW_OPEN = "One star. He repotted me into a pot with no drainage hole, ";
const REVIEW_MIDDLE = "then Googled 'why is my plant crying' ";
const REVIEW_CLOSE = "while standing in the puddle.";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, REVIEW_OPEN + REVIEW_MIDDLE + REVIEW_CLOSE, "utf8");
