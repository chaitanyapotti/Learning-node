const crypto = require("crypto");

const hash = crypto.createHash("sha512");

hash.update(process.argv[2] || "password1") // can only be called once on a createdHash

console.log(hash.digest("hex")) // can only be called once on a createdHash