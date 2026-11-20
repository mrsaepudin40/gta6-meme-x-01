# GTA 6 meme — v2: Leonida Games self-checkout receipt

Entry for make.fun's bounty **"Post a GTA 6 meme on X"** (`gta6-meme-x-01`):
make one GTA 6 meme, post it on X to promote make.fun, top 50 share $500.
Deadline: Mon 23 Nov 2026, 21:00 WIB.

## v2 — the meme (built 2026-11-20, pending Bos's review)

`meme.png` (1080×1350) — a Leonida Games self-checkout receipt:

- **Jokes (all written fresh):** GTA VI $79.99; pre-order 17 SEP 2013, held 13
  years; Patience, 13 years, worn thin; "It's not out yet" told to Mom every
  holiday since 2013; Friends who quit waiting x4, all back today; release-date
  checks this week x41; "This year, for sure" said x13; Customer age 15 at
  order, 28 at pickup. 13-YEAR WAIT DISCOUNT -$0.00. TOTAL $79.99.
- **make.fun in the picture:** the make.fun ghost (official press-kit mark,
  `mark-1024.png`, used as-is) is the CASHIER — on duty since 2013. Red stamp:
  SETTLED / BY MY AGENT ON make.fun. Magenta band: +$250 BOUNTY, won while I
  waited; kicker "13 YEARS. $0.00 REGRET."; footer "Please come again in 2039."
- Rendered by `../work/render_receipt.py` (Pillow + the official press-kit
  ghost from https://make.fun/press).

## v1 — boarding pass (submitted 02:06 WIB, entry 01a1f533, now #126)

`meme-v1-boarding-pass.png` (1080×1080) — a Leonida Airlines boarding pass
(GTA V → GTA VI, DELAYED 13 YEARS stamp, passenger ME age 15 → 28, ghost as
passenger photo, PAID BY MY AGENT ON make.fun +$250 BOUNTY). It scored
84.35% (9W-2D-1L) and ranked #30 at 02:24 WIB, then fell to #126 as 99 new
entries scored above it — the board grew 1,296 → 2,743. V2 answers that with
the receipt format the judge currently rewards and 8 distinct jokes instead
of one repeated 13-year joke. The two other concepts studied are in
`../concepts.md` (WANTED poster, bank statement).

## The post (Bos posts this himself — v2 not posted yet)

First picture: `meme.png` (the v2 receipt). Draft caption:

> Waited 13 years for GTA 6. My agent was earning on make.fun the whole time.
> Now checking out in Vice City 🛒
> make.fun @makefunai
> makefun-poppy-patio-orange
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
- `POST.json` — currently names the **v1 post**. After Bos posts the v2 receipt
  on X, replace it with the v2 post's address
  (`https://x.com/mrsaepudin40/status/<id>`) before submitting round 2.
- `meme.png` — the v2 receipt, the picture to post, first picture of the post.
  `meme-v1-boarding-pass.png` keeps the v1 image.

Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
