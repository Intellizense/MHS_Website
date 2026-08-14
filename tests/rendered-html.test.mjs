import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  assert.match(html, />Contact<\/button>/);
  assert.match(html, />Join Wait List<\/button>/);
  assert.match(html, /https:\/\/tally\.so\/widgets\/embed\.js/);
  assert.match(
    html,
    /https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-CGBSDC7EJK/,
  );
  assert.match(html, /gtag\('config', 'G-CGBSDC7EJK'/);
  assert.match(html, /allow_google_signals: false/);
  assert.match(html, /allow_ad_personalization_signals: false/);
  assert.match(html, /Join the waitlist/);
  assert.match(html, /Download on the/);
  assert.match(html, /Google Play/);
  assert.match(html, /proof-row-desktop/);
  assert.match(html, /proof-row-mobile/);
  assert.match(html, /\/assets\/gal-arrival\.jpg/);
  assert.doesNotMatch(html, /\/assets\/ron-arrival\.jpg/);
  assert.match(html, /Your story\. Your Hebrew\. Every step supported\./);
  assert.match(html, /Know exactly what to say\./);
  assert.match(html, /Say it your way\./);
  assert.match(html, /Choose the Hebrew meant for you\./);
  assert.match(html, /Live Gal’s version of the story\./);
  assert.match(html, /Or step into Ron’s\./);
  assert.match(html, /Understand Israel, not just Hebrew\./);
  assert.match(html, /\/assets\/feature-speak\.jpg/);
  assert.match(html, /\/assets\/feature-done-speak\.jpg/);
  assert.match(html, /\/assets\/feature-settings\.jpg/);
  assert.match(html, /\/assets\/feature-gal-story\.jpg/);
  assert.match(html, /\/assets\/feature-ron-story\.jpg/);
  assert.match(html, /\/assets\/feature-culture\.jpg/);
  assert.doesNotMatch(html, /Grammar that carries the whole story|ONE WORD\. TWO MEANINGS/);
  assert.match(html, /\/assets\/last-banner\.jpg/);
  assert.doesNotMatch(html, /\/assets\/tel-aviv\.jpg/);
  assert.match(html, /A New Life in Tel Aviv/);
  assert.match(html, /Shabbat with a New Family/);
  assert.match(html, /Finding Your Rhythm/);
  assert.match(html, /The Jerusalem Adventure/);
  assert.match(html, /Becoming a Local/);
  assert.match(html, /North of Tel Aviv/);
  assert.match(html, /Building a Life in Israel/);
  assert.match(html, /A Year Comes Full Circle/);
  assert.doesNotMatch(html, />Arrival<|>Belonging<|>Full circle</);
  assert.match(html, /\/assets\/chapter5-ron\.jpg/);
  assert.doesNotMatch(html, /\/assets\/app-journey\.jpg/);
  assert.doesNotMatch(html, /Let&apos;s talk Hebrew|Let&#x27;s talk Hebrew|Send us an inquiry/);
  assert.doesNotMatch(html, /Download Now|word-card/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
  assert.match(html, /href="\/privacy\/"[^>]*>Privacy Policy<\/a>/);
});

test("exports a complete GitHub Pages website", async () => {
  const html = await readFile(
    new URL("../dist/github-pages/index.html", import.meta.url),
    "utf8",
  );
  const cname = await readFile(
    new URL("../dist/github-pages/CNAME", import.meta.url),
    "utf8",
  );

  assert.match(html, /<title>My Hebrew Story — Learn Hebrew by Living a Story<\/title>/i);
  assert.match(html, /\/_next\/static\/css\//);
  assert.match(html, /\/_next\/static\/chunks\//);
  assert.match(html, /https:\/\/tally\.so\/widgets\/embed\.js/);
  assert.match(
    html,
    /https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-CGBSDC7EJK/,
  );
  assert.match(html, /gtag\('config', 'G-CGBSDC7EJK'/);
  assert.equal(cname.trim(), "myhebrewstory.com");
});

test("exports the complete privacy policy for App Store review", async () => {
  const html = await readFile(
    new URL("../dist/github-pages/privacy/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /<title>Privacy Policy — My Hebrew Story<\/title>/i);
  assert.match(html, /Effective August 14, 2026/);
  assert.match(html, /Usage analytics/);
  assert.match(html, /Google Analytics/);
  assert.match(html, /first-party cookie named/);
  assert.match(html, /GA4 does not log or store the IP address/);
  assert.match(html, /Google Signals and advertising-personalization signals/);
  assert.match(html, /Country or general geographic region/);
  assert.match(html, /Speech recognition/);
  assert.match(html, /processed transiently/);
  assert.match(html, /temporarily uploaded/);
  assert.match(html, /deleted promptly after processing/);
  assert.match(html, /temporary batch fallback/);
  assert.match(html, /Service providers/);
  assert.match(html, /Retention and deletion/);
  assert.match(html, /Contact My Hebrew Story/);
  assert.doesNotMatch(
    html,
    /is not stored on our servers or by our speech-recognition service provider/,
  );
  assert.doesNotMatch(html, /Soniox/i);
});
