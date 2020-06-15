const crypto = require("crypto");

const password = process.argv[2] || "password1";

const salt = crypto.randomBytes(256).toString("hex");

crypto.pbkdf2(password, salt, 100000, 512, "sha512", (err, key) => {
  if (err) console.error(err);
  const hashedPwd = key;
  console.log(hashedPwd.toString("hex"));
});

// For production, you need to store both salt and hashedPwd as `salt|hashedPwd`
// Other algos are argon2, pbkdf2, scrypt, bcrypt