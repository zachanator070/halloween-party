# The Hallowmas Feast at Ravenmoor

Medieval Halloween murder mystery for 15 players (16 characters designed; 1 spare).

| Path | What it is |
|---|---|
| `site/` | Static web root. `invitation.html` (with a name form that sends each guest to their own page) and `p1/<token>.html` (one private character page each; its Phase 2 card is encrypted and unlocks with a passphrase). Cast addresses are derived from the guest's name; spare characters have random ones. |
| `site/review-<token>/` | Reviewer and host documents (`reviewer.html` itself lives at `site/reviewer.html`, i.e. `/halloween-party/reviewer.html`), `party-materials.html` (printable Phase 2 / evidence / bonus clue cards), `host-guide.html`, `phase1-all.html`. Do not send to players. |
| `distribution.md` | Which link goes to which player. |
| `src/characters.js` | Phase 1 character text and the invitation. |
| `src/phase2.base.js` | Phase 2 cards, evidence and bonus clues (base data). |
| `src/case.js`, `scripts/new-case.js` | Pick the murderer at random and generate `src/phase2.js` (git-tracked output) plus the encrypted solution, so nobody has to see the choice. Run `node scripts/new-case.js` then `node build.js`. |
| `src/cast.json` | Player to character assignments and spare characters. |
| `src/solution.enc.json` | The solution, encrypted (AES-256-GCM / PBKDF2). Embedded into `reviewer.html` by the build. |
| `.sealed/reviewer-passphrase.txt` | Passphrase for the reviewer only (git-ignored). Forward it without opening it. |
| `.sealed/phase2-passphrase.txt` | Phase 2 passphrase (git-ignored). The host reveals it when Phase 2 starts. `build.js` needs it (or the `PHASE2_PASSPHRASE` env var) to encrypt the Phase 2 cards. |
| `src/client/` | Browser scripts for the name form and the Phase 2 unlock. |

Rebuild after editing `src/`: `node build.js` (tokens in `src/tokens.json` are kept so existing links stay valid).
Re-encrypt a changed solution: `node scripts/encrypt-solution.js <solution.md> <passphrase-file>`.
