## Response Types

1. application/json | response.json()
2. text/plain | response.text()
3. text/html | response.text()
4. application/xml | response.text() or XML parser
5. image/png | response.blob()
6. image/jpeg | response.blob()
7. application/pdf | response.blob()

## To Check or Verify Response Content-Type

- response.headers.get("Content-Type")

## Network Error

A network error occurs when the request cannot successfully communicate with the server. An HTTP error occurs when the server receives the request and responds with an HTTP status indicating a problem. (or when a server sends an HTTP response with an unsuccessful status code)

1. Network errors

- No internet connection.
- The server cannot be reached.
- A DNS lookup fails (the domain name cannot be resolved).
- The connection is blocked or interrupted.

2. HTTP errors

- 400 — `Bad Request` → The request contains invalid data.
- 401 — `Unauthorized` → Authentication is required or invalid.
- 403 — `Forbidden` → Access to the resource is denied.
- 404 — `Not Found` → The requested resource does not exist.
- 500 — `Internal Server Error` → The server encountered an unexpected problem.
- 503 — `Service Unavailable` → The server is temporarily unable to handle the request.

## DNS Lookup

Once your application is ready - then the important process is "hoisting" - which means you can put your application on some other computer - which can be available 24/7 - accessed by internet (basically called a server computer) - You will get an IP address - but it is difficult to remember - so get domain name available which is unique and make the domain points to an your IP address - then type domain name in the URL in browser - which redirect to corresponding IP address technically called this process as "DNS"

godaddy - For Domain Name Server (DNS)

## Important Note

1. URL + options in fetch() → Works well for one‑off requests; you provide the URL and configuration together only at the moment of the call.

2. Request object → Encapsulates the URL and options into a single reusable data unit; allows retries, reuse, or sharing across functions without rewriting configuration.

## URL() Constructor

1. This allows you to easily read and modify the components of a URL.

```js
// Example 1: Basic URL Object
let url = new URL("https://api.restful-api.dev/objects/");
console.log(url);
console.log(url.searchParams.get("model")); // Get the "model" parameter from the URL's search string if exists

URL {
  href: 'https://api.restful-api.dev/objects/',
  origin: 'https://api.restful-api.dev',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'api.restful-api.dev',
  hostname: 'api.restful-api.dev',
  port: '',
  pathname: '/objects/',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
}
```

2. Useful when you need to manipulate or build URLs dynamically.

```js
// Example 2: URL Object | Useful when you need to manipulate or build URLs dynamically.
const URL = new URL("https://example.com/search");
URL.searchParams.append("category", "books");
URL.searchParams.append("sort", "price");

fetch(URL); // Expected Output: https://example.com/search?category=books&sort=price
```

When I say a URL object is useful for manipulating or building URLs dynamically, I mean that instead of treating a URL as a plain string, you can break it into parts and programmatically change or construct it. This is especially handy when you need to add query parameters, switch domains, or adjust paths without manually concatenating strings - You don’t have to manually type out the entire URL with query parameters, slashes, and symbols.

## Invalid URLs → TypeError

1. If the URL is valid string as an absolute URL → It creates an URL object.
2. If URL(relativeURL, baseURL) → Resolves a relative URL against the base URL → It converts the relative to absolute URL.
3. An invalid URL causes a TypeError.
   - Absence of protocol in an absolute URL
   - Using a relative URL without a base URL → the constructor cannot determine the complete URL without a base URL.
   - Invalid base URL or URL syntax or port number.

## Risks

1. Dynamic query building: Add or remove parameters based on user input.
2. Safe manipulation: No risk of malformed strings when concatenating.
   - Malformed strings - improperly formed text data that breaks encoding rules.
   - Encoding rules - guidelines for converting text into byte sequences.
3. Readable code: Easier to understand than long string concatenations.
4. Integration with fetch: Pass the object directly to fetch().

## Request() Constructor

- Encapsulates both the URL and request options (method, headers, body, etc.).
- Useful when you want to reuse or clone requests, or pass around a fully configured request.

```js
Request {
  method: 'GET',
  url: 'https://api.restful-api.dev/objects/',
  headers: Headers {},
  destination: '',
  referrer: 'about:client',
  referrerPolicy: '',
  mode: 'cors',
  credentials: 'same-origin',
  cache: 'default',
  redirect: 'follow',
  integrity: '',
  keepalive: false,
  isReloadNavigation: false,
  isHistoryNavigation: false,
  signal: AbortSignal { aborted: false }
}
```

```js
// Example 1: Reusing a Request
// You can create a Request once with all its configuration (URL, method, headers, body, etc.) and
// then call fetch() multiple times with the same request.

// When you create a Request Object + methods + headers + body
// All of this is bundled into the Request object and kept in memory. It’s not sent until you call fetch(request).
// That’s why you can call fetch(orderRequest) again, and it resends the exact same payload.

const request = new Request("https://example.com/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Keerthivasan" }),
});

fetch(request);
fetch(request);

// Example 2: A Request can be cloned using .clone(). This is important because a request’s body
// can only be read once — cloning lets you duplicate it safely.

// A Request object’s body (like JSON, text, or form data) is implemented as a stream.
// Streams are consumable only once — once you read it (e.g., in fetch() or with .text() / .json()), it’s gone.
// If you try to reuse the same Request object again, the body will be empty because it has already been consumed.

const request = new Request("https://api.example.com/data", {
  method: "POST",
  body: JSON.stringify({ id: 123 }),
});

const copy = request.clone();

fetch(request);
fetch(copy); // works because it's a clone

// Example 3: Without clone
const request = new Request("https://api.example.com/data", {
  method: "POST",
  body: JSON.stringify({ id: 123 }),
});

// First fetch consumes the body
fetch(request).then((res) => console.log("First call done"));

// Second fetch would fail because body is already used
// fetch(request); ❌

// Clone the request to reuse safely
const copy = request.clone();
fetch(copy).then((res) => console.log("Second call done"));
```

1. Encapsulation: Keeps all request details in one object.
2. Reusability: You don’t have to redefine headers/methods each time.
3. Cloning: Lets you safely duplicate requests with bodies.
4. Flexibility: Easy to pass requests between functions or modules.
