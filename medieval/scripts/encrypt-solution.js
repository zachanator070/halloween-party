// Usage: node scripts/encrypt-solution.js <plaintext.md> <passphrase-file>
// Writes src/solution.enc.json (PBKDF2-SHA256 + AES-256-GCM). Create the passphrase file first (see README in reviewer page).
const fs = require('fs');
const crypto = require('crypto');
const [plainPath, passPath] = process.argv.slice(2);
const pass = fs.readFileSync(passPath, 'utf8').trim();
const plain = fs.readFileSync(plainPath);
const salt = crypto.randomBytes(16), iv = crypto.randomBytes(12), iter = 310000;
const key = crypto.pbkdf2Sync(pass, salt, iter, 32, 'sha256');
const c = crypto.createCipheriv('aes-256-gcm', key, iv);
const ct = Buffer.concat([c.update(plain), c.final(), c.getAuthTag()]); // WebCrypto expects tag appended
fs.writeFileSync(__dirname + '/../src/solution.enc.json', JSON.stringify({ v: 1, iter, salt: salt.toString('base64'), iv: iv.toString('base64'), ct: ct.toString('base64') }));
console.log('encrypted', plain.length, 'bytes');
