crypto module

Cipher/Decipher - used for encrypting and decrypting data

DiffieHellman/ECDH - method of exchanging keys when using asymmetric cryptography. It makes https possible. (ecdh - elliptic curve diffiehelman)

Hash - Hashing

HMAC - Hash based message authentication codes. These are sent along with the message to verify the authenticity of the sender and the integrity of the message

Sign/Verify - Used for signing and verifying the documents. Used for protecting data in transit

Other utility functions

All crypto classes are not meant to be created by `new` but by using helper methods on classes