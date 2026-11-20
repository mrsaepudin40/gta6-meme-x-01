# GTA 6 meme — v3: Leonida Games receipt, redesigned

Entry for make.fun's bounty **"Post a GTA 6 meme on X"** (`gta6-meme-x-01`):
make one GTA 6 meme, post it on X to promote make.fun, top 50 share $500.
Deadline: Mon 23 Nov 2026, 21:00 WIB.

## v3 — the meme (built 2026-11-20, posted 20:20 WIB)

`meme.png` (1080×1350) — the Leonida Games self-checkout receipt, redesigned.
Same v2 content word for word; only the design changed, on Bos's call that v2
is still the best meme and its look should be more striking:

- **Design:** black full-bleed header band (white LEONIDA GAMES, pink
  subline); ghost bigger (128px); zebra-striped item rows, GTA VI row tinted
  light magenta as the only paid line; totals in a bordered box with the TOTAL
  row on magenta/white; SETTLED stamp below the totals box; zigzag torn edge
  above the magenta band.
- **Jokes (v2 content, unchanged):** GTA VI $79.99; pre-order 17 SEP 2013, held
  13 years; Patience, 13 years, worn thin; "It's not out yet" told to Mom
  every holiday since 2013; Friends who quit waiting x4, all back today;
  release-date checks this week x41; "This year, for sure" said x13; Customer
  age 15 at order, 28 at pickup. 13-YEAR WAIT DISCOUNT -$0.00. TOTAL $79.99.
- **make.fun in the picture:** the make.fun ghost (official press-kit mark,
  `mark-1024.png`, used as-is) is the CASHIER — on duty since 2013. Red stamp:
  SETTLED / BY MY AGENT ON make.fun. Magenta band: +$250 BOUNTY, won while I
  waited; kicker "13 YEARS. $0.00 REGRET."; footer "Please come again in 2039."
- Rendered by `../work/render_receipt_v3.py` (Pillow + the official press-kit
  ghost from https://make.fun/press).

## v2 — receipt, first design (submitted 17:53 WIB, entry 01a1f897, #134)

`meme-v2-receipt.png` (1080×1350) — the same receipt content in the first
design (cream header, dotted dividers, stamp overlapping the totals corner).
It scored **0.843464 (10W-1D-1L)** — exactly the same rate as v1 — and ranked
#134 as the board grew to 3,442 entries. The format change alone did not move
the judge's score, so v3 keeps the content and redesigns the look instead.

## v1 — boarding pass (submitted 02:06 WIB, entry 01a1f533, superseded)

`meme-v1-boarding-pass.png` (1080×1080) — a Leonida Airlines boarding pass
(GTA V → GTA VI, DELAYED 13 YEARS stamp, passenger ME age 15 → 28, ghost as
passenger photo, PAID BY MY AGENT ON make.fun +$250 BOUNTY). It scored
84.35% (9W-2D-1L) and ranked #30 at 02:24 WIB, then fell to #126 as new
entries scored above it. The other concepts studied are in `../concepts.md`
(WANTED poster, bank statement, report card).

## The post (Bos posts this himself)

First picture: `meme.png` (the v3 redesigned receipt), posted 20:20 WIB at
https://x.com/mrsaepudin40/status/2123768244523991258. Caption:

> Waited 13 years for GTA 6. My agent was earning on make.fun the whole time.
> Now checking out in Vice City 🛒
> make.fun @makefunai
> makefun-topaz-salmon-lynx
> https://make.fun/bounty/gta6-meme-x-01

**Play code warning:** `erq9vqtn` is the account's *referral* code, not a play
code — the rules require `makefun-<word>-<word>-<word>`. A post carrying only
`erq9vqtn` would be refused. The four real play codes for this bounty
(fetched with the account's make.fun key) are `makefun-mural-sparrow-kernel`,
`makefun-poppy-patio-orange`, `makefun-topaz-salmon-lynx`,
`makefun-filbert-volcano-chimney`; this post uses the third. Any one passes.

## This repository

- `main.ts` (Node 22, stdlib only) — copies `POST.json` to `/output/POST.json`.
  That is all the program has to do; the house reads the post itself from X.
- `POST.json` — names the **v3 post**
  (`https://x.com/mrsaepudin40/status/2123768244523991258`).
- `meme.png` — the v3 redesigned receipt, the picture to post, first picture
  of the post. `meme-v2-receipt.png` keeps the v2 image,
  `meme-v1-boarding-pass.png` the v1 image.

Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
