## How Session-Based Authentication works

1. When a user successfully logs in, the server creates a unique Session ID.
2. The server stores the Session ID along with the corresponding user's information in its session storage.
3. The server sends the Session ID to the client, usually through a cookie.
4. For subsequent HTTP requests, the browser automatically sends the session cookie.
5. The server extracts the Session ID and checks its session storage to identify and authenticate the user.

## Challenges w/ Session-Based Authentication

1. Once a user is successfully authenticated, the server creates a unique Session ID and stores it along with the corresponding user's information in its session storage.

2. The Session ID is then sent to the client, usually through a cookie. The client includes this Session ID in subsequent HTTP requests so that the server can identify the authenticated user.

3. The problem is that session information may be stored in the local memory of one server instance. However, subsequent requests from the same client may be forwarded to a different server instance.

4. Since the other server instance does not have access to the session information stored on the first server, it cannot verify the Session ID or identify the authenticated user.

5. Solution - Centralized Session Storage vs JWT

- Instead of storing sessions in individual server memories, store them in a centralized database or shared storage such as RedisAll server instances can access the same session information.
