import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const clientDirectory = resolve(root, "dist", "client");
const outputDirectory = resolve(root, "dist", "github-pages");
const serverEntry = resolve(root, "dist", "server", "index.js");
const siteUrl = "https://myhebrewstory.com/";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function fetchAsset(request) {
  const pathname = decodeURIComponent(new URL(request.url).pathname);
  const assetPath = resolve(clientDirectory, `.${pathname}`);
  const clientRoot = `${clientDirectory}${sep}`;

  if (!assetPath.startsWith(clientRoot)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const body = await readFile(assetPath);
    const contentType = contentTypes[extname(assetPath)] ?? "application/octet-stream";
    return new Response(body, { headers: { "content-type": contentType } });
  } catch (error) {
    if (error?.code === "ENOENT" || error?.code === "EISDIR") {
      return new Response("Not found", { status: 404 });
    }
    throw error;
  }
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const serverUrl = pathToFileURL(serverEntry);
serverUrl.searchParams.set("static-export", `${Date.now()}`);
const { default: worker } = await import(serverUrl.href);
const routes = [
  {
    pathname: "/",
    output: "index.html",
    expectedText: "Learn Hebrew by living a story.",
  },
  {
    pathname: "/privacy",
    output: "privacy/index.html",
    expectedText: "Privacy Policy",
  },
];

for (const route of routes) {
  const response = await worker.fetch(
    new Request(new URL(route.pathname, siteUrl), {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: fetchAsset } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(
      `Static render for ${route.pathname} failed with status ${response.status}.`,
    );
  }

  const html = await response.text();
  if (!html.includes(route.expectedText) || !html.includes("/_next/static/")) {
    throw new Error(`Static render for ${route.pathname} is incomplete.`);
  }

  const outputPath = resolve(outputDirectory, route.output);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}
await writeFile(
  resolve(outputDirectory, "CNAME"),
  `${new URL(siteUrl).hostname}\n`,
);

console.log(`GitHub Pages export created at ${outputDirectory}`);
