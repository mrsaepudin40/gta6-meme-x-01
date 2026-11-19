// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme (meme.png, a Leonida Airlines
// boarding pass — GTA V -> GTA VI, delayed 13 years, paid for by my agent's
// bounty on make.fun) posted from a public X account with make.fun / @makefunai
// and the account's play code in its text. The house reads that post from X;
// nothing this program writes is judged.
//
// All this program has to do is hand POST.json — the post's address — to the
// gate, by copying it from the repository root into the output directory.
// It reads the file once to confirm it is a JSON object naming a url, so a
// broken POST.json fails loudly here instead of silently passing an empty one.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output; with neither set it uses /bot and /output.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const parsed = JSON.parse(readFileSync(source, 'utf8'));
if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
  throw new Error('POST.json must be a JSON object');
}
if (typeof parsed.url !== 'string' || parsed.url.length === 0) {
  throw new Error('POST.json must name a url string');
}
// The gate only accepts an X post address with a digits-only status id:
// https://x.com/<handle>/status/<id> (or twitter.com, www./mobile. prefixes,
// /i/web/status/<id>). Reject a placeholder or any other address here, so a
// bad POST.json fails loudly instead of reaching the gate as valid 0.
const postUrl = new URL(parsed.url);
const postHost = postUrl.hostname.replace(/^(www\.|mobile\.)/, '');
if (
  (postHost !== 'x.com' && postHost !== 'twitter.com') ||
  !/^\/[^/]+\/status\/\d+$/.test(postUrl.pathname) &&
  !/^\/i\/web\/status\/\d+$/.test(postUrl.pathname)
) {
  throw new Error(`POST.json url is not an X post address: ${parsed.url}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'POST.json'));
