import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished My Hebrew Story landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>My Hebrew Story — Learn Hebrew by Living a Story<\/title>/i);
  assert.match(html, /Learn Hebrew by living a story\./);
  assert.match(html, /36 voiced lessons/);
  assert.match(html, /href="#home"[^>]*>Home<\/a>/);
  assert.match(html, /href="#contact"[^>]*>Contact<\/a>/);
  assert.match(html, /href="#download"[^>]*>Download Now<\/a>/);
  assert.match(html, /hello@myhebrewstory\.com/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});
