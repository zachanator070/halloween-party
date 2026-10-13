// Invitation page: turn a guest's name into the (unguessable) address of their Phase 1 page.
(function () {
  const SALT = '__SALT__', ITER = __ITER__;
  const norm = (s) => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const hex2bytes = (h) => Uint8Array.from(h.match(/../g), (x) => parseInt(x, 16));
  const bytes2hex = (b) => Array.from(new Uint8Array(b), (x) => x.toString(16).padStart(2, '0')).join('');
  async function tokenFor(name) {
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(norm(name)), 'PBKDF2', false, ['deriveBits']);
    return bytes2hex(await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: hex2bytes(SALT), iterations: ITER, hash: 'SHA-256' }, key, 128));
  }
  const form = document.getElementById('nameForm'), err = document.getElementById('nameErr');
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); err.textContent = '';
    const name = document.getElementById('guestName').value;
    if (norm(name).split(' ').length < 2) { err.textContent = 'Please enter your first and last name.'; return; }
    const url = 'p1/' + (await tokenFor(name)) + '.html';
    try {
      const r = await fetch(url, { method: 'HEAD' });
      if (!r.ok) { err.textContent = 'The Steward cannot find that name on the guest list. Try your full name as the host knows it.'; return; }
    } catch (x) { /* offline or local file: just try to go there */ }
    location.href = url;
  });
})();
