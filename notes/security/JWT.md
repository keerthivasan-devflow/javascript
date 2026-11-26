## From Basic Authentication (User credentials) → Session ID → Access Token

## Challenges w/ user credentials verification for every HTTP requests

HTTP is a stateless protocol, which means the server does not automatically remember or maintain information about previous HTTP requests made by a client. Every HTTP request is treated as an independent request. Therefore, mechanisms such as cookies, sessions, or JWTs are used to maintain user's identity across multiple requests.

1. Security risks

- Sending passwords repeatedly increases the chances of exposing sensitive credentials.
- If an attacker intercepts a request, they might obtain the user's actual password.
- The password is being transmitted much more frequently than necessary.

2. Performance overhead

- The server needs to verify the credentials for every protected API request.
- This may involve querying the database and comparing password hashes repeatedly.
- It introduces unnecessary processing and database operations.

3. Poor user experience

- The client needs to provide credentials repeatedly.
- Managing authentication for every API request becomes complicated.

## What is JWT?

## Why it is so called JSON Web Token?

- Once the user is authenticated, relevant user details are stored in JSON format. From this json details only, access token is generated using encoding scheme like Base64URL so it is called JSON web token.

## Parts of JWT Token

- Algorithm - Token Type (Header Part)
- users details (Payload Part)
- Signature

## Fundamental Recap of JWT Token

## 1. Initial authentication (Login)

1. The user enters their credentials (username/email and password).
2. The browser sends an HTTP request containing those credentials to the server.
3. The server verifies the credentials against the stored user information.
4. If the credentials are valid, the server generates a JWT (JSON Web Token).
5. The server sends the JWT to the browser, usually through a `Set-Cookie` response header.
6. The browser stores the JWT in a cookie or the client stores the token using an appropriate storage mechanism.

## 2. Subsequent API requests

1. The browser automatically attaches the JWT stored in the cookie to the HTTP request (if the cookie's rules allow it).
2. The server receives the request along with the JWT.
3. The server verifies the JWT's signature and checks its validity and expiration.
4. If the JWT is valid, the server identifies the authenticated user and processes the request.
5. If the JWT is invalid or expired, the server rejects the request (usually with a `401 Unauthorized` response).

There are three things worth noting:

- JWT is not necessarily stored in cookies but can also be stored elsewhere, such as memory or local storage.
- The browser does not manually attach cookies when cookie rules match, the browser automatically sends them.
- The server does not necessarily authenticate the username and password again

Also, when using cookies for JWT authentication, `HttpOnly`, `Secure`, and appropriate `SameSite` settings are important security considerations.

## How JWT solves this problem

- Whenever the client makes a subsequent request to a protected API, it sends the JWT in the authorization header.
- The JWT is included in the HTTP request header rather than being sent in the request body or URL.
- The backend extracts the token from the authorization header and then verifies its signature (server only verifies its signatures) using the appropriate secret or public key.
- Also checks its expiration and other relevant claims.
- Furthermore, checks the user's role and allows access if the user has the required permissions.
- If the token is valid and the user is authorized, the backend allows access to the protected resource.

```js
fetch("http://localhost:5000/profile", {
  method: "GET",
  headers: {
    Authorization: `user-token : ${token}`,
  },
});
```

## JWT - Important points to remember

1. JWT avoids sending the user's credentials with every request.
2. JWT is self-contained: it can carry claims such as user ID, role, and expiration time.
   - Note: Here claims means that information about users and other relevant details required by the server.
3. JWT is digitally signed, so the server can verify that its contents haven't been tampered with.
4. JWT payload is Base64URL encoded, not encrypted by default. Anyone possessing it can generally decode its payload, so sensitive information should not be stored in it.
5. Self-contained does not mean database access is never required. The server may still need the database to check current permissions, account status, or other updated information.

## Load Balancer

A Load Balancer is a component that distributes incoming HTTP requests across multiple server instances so that no single server has to handle all the traffic.

In simple words, it acts as a traffic manager between the client and multiple backend servers.

How does it decide which server receives the request?
Load balancers use different algorithms, such as:

- Round Robin: Distributes requests one by one across available servers.
- Least Connections: Sends requests to the server with the fewest active connections.
- IP Hash: Uses the client's IP address to determine which server receives the request.
