Once your application is ready - then the important process is "hoisting" - which means you can put your application on some other computer - which can be available 24/7 - accessed by internet (basically called a server computer) - You will get an IP address - but it is difficult to remember - so get domain name available which is unique and make the domain points to an your IP address - then type domain name in the URL in browser - which redirect to corresponding IP address technically called this process as "DNS"

godaddy - For Domain Name Server (DNS)

## Important Note

1. URL + options in fetch() → Works well for one‑off requests; you provide the URL and configuration together only at the moment of the call.

2. Request object → Encapsulates the URL and options into a single reusable data unit; allows retries, reuse, or sharing across functions without rewriting configuration.

## URL Object

- Created using the built-in URL constructor.
- Represents a structured URL with easy access to its components (protocol, hostname, pathname, query parameters, etc.).
- Useful when you need to manipulate or build URLs dynamically.

When I say a URL object is useful for manipulating or building URLs dynamically, I mean that instead of treating a URL as a plain string, you can break it into parts and programmatically change or construct it. This is especially handy when you need to add query parameters, switch domains, or adjust paths without manually concatenating strings - You don’t have to manually type out the entire URL with query parameters, slashes, and symbols

1. Dynamic query building: Add or remove parameters based on user input.
2. Safe manipulation: No risk of malformed strings when concatenating.
   1. Malformed strings - improperly formed text data that breaks encoding rules.
   2. Encoding rules - guidelines for converting text into byte sequences.
3. Readable code: Easier to understand than long string concatenations.
4. Integration with fetch: Pass the object directly to fetch().

```js
// Example 1: Basic URL Object Implementation
let url = new URL("https://api.restful-api.dev/objects/");
console.log(url);
console.log(url.searchParams.get("model")); // Get the "model" parameter from the URL's search string if exists

// output
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

```js
// Example 2: URL Object | Useful when you need to manipulate or build URLs dynamically.
const url = "https://example.com/search?category=books&sort=price";

const url = new URL("https://example.com/search");
url.searchParams.append("category", "books");
url.searchParams.append("sort", "price");

fetch(url); // Result: https://example.com/search?category=books&sort=price
```

## Request Object

- Created using the Request constructor.
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
// All of this is bundled into the Request object and kept in memory. It’s not “sent” until you call fetch(request).
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
