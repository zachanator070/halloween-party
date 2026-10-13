# The Hallowmas Feast at Ravenmoor

Medieval Halloween murder mystery for 13 players (16 characters designed; 3 spares).

| Path | What it is |
|---|---|
| `site/` | Static web root. `invitation.html` and `p1/<token>.html` (one private Phase 1 page per character) go to players. |
| `site/review-<token>/` | Reviewer and host documents: `reviewer.html` (links to everything, decrypts the solution in the browser), `party-materials.html` (printable Phase 2 / evidence / reward cards), `host-guide.html`, `phase1-all.html`. Do not send to players. |
| `distribution.md` | Which link goes to which player. |
| `src/characters.js` | All character, invitation and reward-slip text. |
| `src/cast.json` | Player to character assignments and spare characters. |
| `src/solution.enc.json` | The solution, encrypted (AES-256-GCM / PBKDF2). Embedded into `reviewer.html` by the build. |
| `.sealed/reviewer-passphrase.txt` | Passphrase for the reviewer only (git-ignored). Forward it without opening it. |

Rebuild after editing `src/`: `node build.js` (tokens in `src/tokens.json` are kept so existing links stay valid).
Re-encrypt a changed solution: `node scripts/encrypt-solution.js <solution.md> <passphrase-file>`.
