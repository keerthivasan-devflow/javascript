## Cross-Origin Resource Sharing (CORS)

- CORS is a security feature of our application.
- CORS is a mechanism that allows web applications running at one origin (domain) to request resources from a different origin.
- An origin consists of three components: protocol, hostname, and port number.
- All three must match for two URLs to have the same origin.
  - Protocol like HTTP vs HTTPS
  - Domain Name Server
  - Port Number

By default, browsers block requests from one origin (e.g., `http://localhost:3000`) to a different origin (e.g., `http://localhost:3000`) unless the target server explicitly allows it via CORS headers.

## How does "proxy" avoid CORS?

1. Without proxy

- React frontend: http://localhost:3000
- Backend server: http://localhost:5000
- Here, the frontend and backend have different origins because their port numbers are different.
- Therefore, the browser applies CORS restrictions. The backend must allow requests from the frontend origin.

```json
{
  "proxy": "http://localhost:5000"
}
```

Important points

- Proxy is primarily used during local development.
- It avoids hardcoding the backend URL in every API request.
- It helps avoid CORS issues during development.
- It does not disable CORS.
- It does not automatically configure CORS on your backend.
- It does not apply automatically to production builds.

```javascript
fetch("/api/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

This will be proxied to `http://localhost:5000/api/data`.

Note: The "proxy" field shown above is supported by Create React App (CRA). Vite uses a different configuration in vite.config.js, typically through server.proxy.

## Handle CORS in Production Environment

While using the `proxy` in React development is helpful, it's also important to configure CORS properly on your server when deploying your app in production. The backend server needs to send the appropriate CORS headers to allow cross-origin requests.

```javascript
app.use(
  cors({
    origin: "https://www.example.com", // Allow requests only from this origin
    methods: ["GET", "POST"],
  }),
);
```

## Common CORS Errors

- **No Access-Control-Allow-Origin**
  - This means that your server isn't configured to allow the origin of the request. Make sure your backend is sending the appropriate CORS headers (`Access-Control-Allow-Origin`).

- **Preflight Request Failed**
  - When making certain types of requests (like `POST` with custom headers), the browser sends a "preflight" `OPTIONS` request. If the server doesn't respond with the correct CORS headers, the request will fail. Ensure that your server is set up to handle `OPTIONS` requests and send the correct CORS headers.

## Temporary Solution

- For development or quick testing, you can use a public CORS proxy service to bypass CORS restrictions.
- `https://cors-anywhere.herokuapp.com/`

```javascript
fetch("https://cors-anywhere.herokuapp.com/https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
```
