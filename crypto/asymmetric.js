// There are several threats to data in transit
// Attacker sees the data between two parties and changes it
// Attacker impersonates you or another party

// Common attack: Man in the middle

/*
To protect against attacks, we need to know data hasn't been changed and hasn't been seen during transit.
we can encrypt the data using symmetric encyrption to protect data from changing
but symmetric needs another key to be protected. we use asymmetric encryption for that

Two parties at both ends don't need the same keys. they can have public/private key pairs

we also need to know data hasn't been changed during transit. HMAC's allow us to do this.
Take the data in the message and create a keyed hash. the hash is sent along with the data to the other party.
The computer hashes it on itself and checks the match for the hash.

Another means of protecting data integrity while establishing identity is digital signatures (use asymmetric + hmac)
First, the document is hashed with a strong hashing algo. The hash output is encrypted with one of two keys.
The party receiving the document will decrypt the hash using the second key and then recaculate the hash to make sure data isn't tampered

Signing is a major part of PKI (public key infrastructure) - which forms a backbone for https

If two parties need to exchange keys, diffie helman is the way

*/

const crypto = require("crypto");
const assert = require("assert");

const sally = crypto.createDiffieHellman(2048);
const sallyKeys = sally.generateKeys();

const bob = crypto.createDiffieHellman(sally.getPrime(), sally.getGenerator());
const bobKeys = bob.generateKeys();

const sallySecret = sally.computeSecret(bobKeys);
const bobSecret = bob.computeSecret(sallyKeys);

assert.strictEqual(sallySecret.toString("hex"), bobSecret.toString("hex"), "Shared secret must be the same");

// This shared secret will be encrypted with asymmetric encryption of diffie helman protocol

const hmac = crypto.createHmac("sha256", "a secret");
hmac.update("some data to hash");
const hashedData = hmac.digest("hex");
console.log("hashedData", hashedData);
// If i have a document, i send along this hashedData too.!
// On the recipient's end, they will have the same secret. They'll hash the document too and should find the same hashedData

/*
Scenario: My computer wants to connect to a server

My computer tells the server which ciphers/ encryption algorithms it can use. Also, what version of TLS/HTTPS it can use
Now, server sends back it's certificate. The certificate holds the public key of the server.
My computer needs to verify it's digitial signature before trusting it
Certificates are signed by a third party(let's encrypt etc. - certificate authorities) which vouches for it.
If certificate is validated, my computer sends a pre-key which will be used by the server to create a private key.
Asymmetric encryption is much slower, so it's only used to securely share the private key, so no one can grab it in transit
All further messages, will be encrypted using symmetric encryption based on this generated private key
The server will generate the same private key on their end and ask for confirmation of the key being used.
If my computer says yes and sends back the key..
both parties can communicate securely.

*/
