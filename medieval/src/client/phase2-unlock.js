// Character page: decrypt this character's Phase 2 card with the passphrase the host reveals.
(function () {
  const ENC = __ENC__;
  const KEY = 'hp-phase2-passphrase';
  const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  async function decrypt(pass) {
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass.trim().toLowerCase()), 'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: b64(ENC.salt), iterations: ENC.iter, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    return new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(ENC.iv) }, key, b64(ENC.ct)));
  }
  const form = document.getElementById('p2form'), err = document.getElementById('p2err'), out = document.getElementById('p2out'), lock = document.getElementById('p2lock');
  async function unlock(pass, silent) {
    try {
      out.innerHTML = await decrypt(pass);
      out.hidden = false; lock.hidden = true;
      try { localStorage.setItem(KEY, pass); } catch (x) { /* storage may be unavailable */ }
      if (!silent) out.scrollIntoView();
    } catch (x) {
      if (!silent) err.textContent = 'That is not the passphrase. Ask the host once the Baron has fallen.';
      try { localStorage.removeItem(KEY); } catch (y) { /* ignore */ }
    }
  }
  form.addEventListener('submit', (e) => { e.preventDefault(); err.textContent = ''; unlock(document.getElementById('p2pass').value, false); });
  let saved = null; try { saved = localStorage.getItem(KEY); } catch (x) { /* ignore */ }
  if (saved) unlock(saved, true);
})();
