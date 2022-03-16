// npm install crypto-js

import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

const message = 'crf-client-cache-secret-key',
  privateKey = '*G-KaPdSgVkXp2s5';

const hashDigest = sha256(message);

console.log(hashDigest);

const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, privateKey));

console.log(hmacDigest);

var CryptoJS = require('crypto-js');

var data = [{ id: 1 }, { id: 2 }];

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(
  JSON.stringify(data),
  hmacDigest
).toString();

console.log(ciphertext);

// Decrypt
var bytes = CryptoJS.AES.decrypt(ciphertext, hmacDigest);
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText);

console.log(CryptoJS);
