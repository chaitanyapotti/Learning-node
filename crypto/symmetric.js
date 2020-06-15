// using symmetric encryption to protect data at rest
// To preserve confidentiality, integrity, availability

// Keys need protection
// Use KMS (key management store) to store keys
// Encryption keys encrypted by master key
// User requests key when data is needed
// keystore decrypts keys and sends to user
// keys can be rotated regularly for extra security
// Use AWS KMS, Azure Vault or Hashicorp Vault

const crypto = require("crypto");
const assert = require("assert");

const algorithm = "aes-256-cbc";
const password = "strong password";
const salt = crypto.randomBytes(32);

const iv = crypto.randomBytes(16);

let ssn = "11-1--1-1-1100";

crypto.pbkdf2(password, salt, 100000, 32, "sha256", (err, key) => {
  if (err) throw err;
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(ssn, "utf-8", "hex");
  encrypted += cipher.final("hex");
  console.log("encrypted", encrypted);

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  decipher.update(encrypted, "hex", "utf-8");
  const decrypted = decipher.final("utf-8");
  console.log("decrypted", decrypted);
  assert.equal(decrypted, ssn, "It's not correct");
});
