## Secure Socket Layer (SSL) Handshake

When a client sends a request to a server, it first passes through a security layer(Nginx) before reaching the backend application. The server shares its SSL certificate with the client. The client verifies the certificate and extracts the server’s public key from it.

The client then generates a secret key, encrypts it using the server’s public key, and sends it back to the server. The server decrypts this secret using its private key. After that, both the client and server use this shared secret to establish session keys for encrypting all further communication.

## Man-in-the-Middle (MITM) Attack

The problem is that an attacker could position themselves between the client and the server.

1. The attacker generates their own public-private key pair.
2. The attacker sends their own public key to the client, pretending to be the actual server.
3. The client might mistakenly trust the attacker's public key.
4. The attacker can then intercept and potentially read or modify the communication between the client and the server.

Note: How does the client identify whether it is communicating with the actual server or an attacker?

## Certificate Authority (CA) → DigiCert - Let's Encrypt

To solve this problem, trusted third-party organizations called Certificate Authorities (CAs) are introduced.

- A CA verifies the identity and ownership of a domain before issuing a digital certificate.
- The certificate acts as proof that the public key belongs to the verified domain.

## How to Get a Certificate for My Server

1. Generate a public-private key pair → The server generates its own public key and private key.
2. Certificate Signing Request → The server creates a CSR containing its public key and domain information and sends it to the CA.
3. Domain Verification → The CA asks the server owner to complete certain verification steps to prove ownership of the domain.
4. Certificate Issuance → Once verification is successful, the CA issues a digital certificate.

## Certificate Information

1. Domain name (Subject)
2. Issuer (Certificate Authority)
3. Validity period (Start date and expiry date)
4. Server's public key

## Transport Layer Security (TLS)

In modern TLS (TLS 1.2 with ephemeral key exchange and TLS 1.3), the client generally does not encrypt a secret key using the server's public key. Instead, the client and server use a key exchange mechanism such as ECDHE to establish shared secret material and derive symmetric encryption keys.
