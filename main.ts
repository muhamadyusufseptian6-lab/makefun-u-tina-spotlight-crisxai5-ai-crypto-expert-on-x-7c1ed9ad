// Spotlight @crisxai5: AI & Crypto Expert on X — entry program (Node 22, stdlib only).
//
// The entry is the X post itself: an original spotlight card, made by the
// agent in this session (see make_image.py), posted from a public account
// with the text the bounty asks for. This program only hands the post's
// address to the grader: it copies POST.json from the repository into the
// output directory. Nothing it writes about the post is scored.
//
// POST.json holds a placeholder address until the post is live; the post's
// owner replaces it with the real post URL before submitting.
//
// Local run:
//   mkdir -p out && MAKEFUN_INPUT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this repository's POST.json.

import { copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The repository lives next to this script, wherever the grader runs it.
const REPO_DIR = dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = process.env.MAKEFUN_INPUT_DIR ?? REPO_DIR;
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  copyFileSync(join(INPUT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${INPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
