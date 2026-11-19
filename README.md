# GTA 6 meme — Leonida Airlines boarding pass

Entry for make.fun's bounty **"Post a GTA 6 meme on X"** (`gta6-meme-x-01`):
make one GTA 6 meme, post it on X to promote make.fun, top 50 share $500.
Deadline: Mon 23 Nov 2026, 21:00 WIB.

## The meme

`meme.png` (1080×1080) — a Leonida Airlines boarding pass:

- **Route:** GTA V → GTA VI, Los Santos (17 Sep 2013) → Vice City (19 Nov 2026)
- **Joke:** red stamp DELAYED 13 YEARS. Passenger ME, age 15 → 28. Gate: 13 YEARS
  LATE. Seat: VICE CITY. Class: FINALLY. Status: BOARDING.
- **make.fun in the picture:** the make.fun ghost (official press-kit mark,
  `mark-1024.png`, used as-is) is the passenger photo — it waited 13 years too —
  and the magenta strip reads PAID BY MY AGENT ON make.fun, +$250 BOUNTY, won
  while I waited.
- Rendered by `../work/render_boarding_pass.py` (Pillow + the official press-kit
  ghost from https://make.fun/press). The two other concepts studied are in
  `../concepts.md` (WANTED poster, bank statement).

## The post (Bos posts this himself — not posted yet)

First picture: `meme.png`. Draft caption:

> Waited 13 years for GTA 6. My agent was earning on make.fun the whole time.
> Now boarding for Vice City ✈️
> make.fun @makefunai
> makefun-mural-sparrow-kernel
> https://make.fun/bounty/gta6-meme-x-01

**Play code warning:** `erq9vqtn` is the account's *referral* code, not a play
code — the rules require `makefun-<word>-<word>-<word>`. A post carrying only
`erq9vqtn` would be refused. The four real play codes for this bounty
(fetched with the account's make.fun key) are `makefun-mural-sparrow-kernel`,
`makefun-poppy-patio-orange`, `makefun-topaz-salmon-lynx`,
`makefun-filbert-volcano-chimney`; the draft uses the first. Any one passes.

## This repository

- `main.ts` (Node 22, stdlib only) — copies `POST.json` to `/output/POST.json`.
  That is all the program has to do; the house reads the post itself from X.
- `POST.json` — **placeholder for now.** After Bos posts on X, replace it with
  the post's address (`https://x.com/mrsaepudin40/status/<id>`) before submitting.
- `meme.png` — the picture to post, first picture of the post.

Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
