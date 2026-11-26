## Encoding vs Encryption

In cryptography and network security, encoding and encryption are two different processes, even though both transform data from one form into another.

## Encoding

- Encoding is the process of converting data from one format into another format using a predefined encoding scheme.
- Purpose: To make data suitable for storage, transmission, or processing.
- Encoding does not provide security because anyone who knows the encoding scheme can decode the data.
- Here, btoa() encodes a string into Base64, and atob() decodes it.
- Encoding → Base64

## Encryption

- Encryption is the process of converting readable data (plaintext) into an unreadable format (ciphertext) using a cryptographic algorithm and a key. Suppose we encrypt it using an encryption algorithm and a secret key.
- Purpose: To protect sensitive information from unauthorized access.
- Encryption → AES, RSA
- Advanced Encryption Standard(AES) → Symmetric encryption — uses the same secret key for encryption and decryption.
- Rivest–Shamir–Adleman (RSA) → Asymmetric encryption — uses a public key and a private key.

## Hashing

- Hashing → SHA-256, SHA-512

## Remember these points

1. Encoding is used for data representation, not security.
2. Encryption is used to protect sensitive data from unauthorized access.
3. Hashing is used to generate a one-way digest, commonly for integrity verification and password storage. (using dedicated password-hashing algorithm)
