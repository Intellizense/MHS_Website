import { TallyPopupButton } from "./TallyPopupButton";

const featurePanels = [
  {
    number: "01",
    eyebrow: "SPEAK INSIDE THE STORY",
    title: "Know exactly what to say.",
    body: "Step into guided scenes from real life—the café, the shuk, the clinic. Answer naturally and keep the conversation moving.",
    image: "/assets/app-speaking.jpg",
    alt: "My Hebrew Story guided speaking practice at a Tel Aviv café",
  },
  {
    number: "02",
    eyebrow: "HEBREW FOR YOU",
    title: "Every ending fits who you are.",
    body: "Choose Ron or Gal as your protagonist. The language changes with your story, so gendered Hebrew feels personal from the first lesson.",
    image: "/assets/app-gendered.jpg",
    alt: "Comparison of masculine and feminine Hebrew storylines in the app",
  },
  {
    number: "03",
    eyebrow: "MORE THAN WORDS",
    title: "Understand Israel, not just Hebrew.",
    body: "Meet grammar and culture where they matter—in the dialogue you just heard, the neighborhood you are exploring, and the life you are building.",
    image: "/assets/app-culture.jpg",
    alt: "Culture lesson about Yom Kippur inside My Hebrew Story",
  },
];

const chapters = [
  ["01", "Arrival", "A new apartment, a new neighbor, and your first words in Tel Aviv."],
  ["02", "Belonging", "Shabbat dinners, market mornings, and the people who begin to feel like family."],
  ["03", "Becoming local", "Work, ulpan, holidays, paperwork, and the small victories of everyday life."],
  ["04", "Full circle", "One year, thirty-six lessons, and a question that changes the meaning of everything."],
];

export default function Home() {
  return (
    <main id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="My Hebrew Story home">
          <img src="/favicon.png" alt="" width="44" height="44" />
          <span className="brand-name">My Hebrew Story</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#home">Home</a>
          <TallyPopupButton>Contact</TallyPopupButton>
          <a className="nav-download" href="#download">Download Now</a>
        </nav>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">A STORY-FIRST HEBREW COURSE</p>
          <h1 id="hero-title">Learn Hebrew by living a story.</h1>
          <p className="hero-intro">
            Move to Tel Aviv. Meet your neighbors. Build a life in Hebrew across
            36 voiced lessons—without streaks, drills, or getting stuck.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#download">Download Now</a>
            <span>Coming soon to iOS &amp; Android</span>
          </div>
          <dl className="proof-row" aria-label="Course overview">
            <div><dt>36</dt><dd>lessons</dd></div>
            <div><dt>8</dt><dd>chapters</dd></div>
            <div><dt>1</dt><dd>year in Israel</dd></div>
          </dl>
        </div>

        <div className="hero-visual" aria-label="Ron and Gal overlooking Tel Aviv beach">
          <img src="/assets/hero-arrival.jpg" alt="Ron and Gal speaking above the Tel Aviv beach in a watercolor illustration" />
          <div className="word-card">
            <span className="hebrew" lang="he" dir="rtl">חֲבֵרָה</span>
            <span>friend · girlfriend</span>
          </div>
          <div className="story-stamp" aria-hidden="true">
            <strong>YOU</strong>
            <span>are the<br />main character</span>
          </div>
        </div>
      </section>

      <section className="manifesto section-shell" aria-labelledby="manifesto-title">
        <div>
          <p className="eyebrow">THE HEBREW COURSE FOR STORY PEOPLE</p>
          <h2 id="manifesto-title">A novel you don&apos;t just read. You live it.</h2>
        </div>
        <p>
          You arrive in Israel as the protagonist. Every lesson moves the plot
          forward through voiced dialogue, vocabulary, grammar, culture, and
          speaking practice. The story pulls you back—not a streak.
        </p>
      </section>

      <section className="features" aria-labelledby="features-title">
        <div className="section-shell features-heading">
          <p className="eyebrow">HOW YOU LEARN</p>
          <h2 id="features-title">Private lesson depth.<br />Page-turner momentum.</h2>
        </div>
        <div className="feature-grid section-shell">
          {featurePanels.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="panel-frame">
                <img src={feature.image} alt={feature.alt} loading="lazy" />
              </div>
              <div className="feature-copy">
                <span className="feature-number">{feature.number}</span>
                <p className="eyebrow">{feature.eyebrow}</p>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hook section-shell" aria-labelledby="hook-title">
        <div className="hook-word">
          <span className="hebrew" lang="he" dir="rtl">חֲבֵרָה</span>
          <div>
            <span>friend</span>
            <span>girlfriend</span>
          </div>
        </div>
        <div className="hook-copy">
          <p className="eyebrow">ONE WORD. TWO MEANINGS.</p>
          <h2 id="hook-title">Grammar that carries the whole story.</h2>
          <p>
            The ambiguity begins in lesson one and follows you through a full
            year in Israel. In My Hebrew Story, grammar isn&apos;t a rule to memorize.
            It&apos;s what makes the plot move.
          </p>
        </div>
      </section>

      <section className="journey" aria-labelledby="journey-title">
        <div className="journey-image">
          <img src="/assets/tel-aviv.jpg" alt="Gal arriving with suitcases on a sunny Tel Aviv street" loading="lazy" />
        </div>
        <div className="journey-content section-shell">
          <div className="journey-heading">
            <p className="eyebrow">YOUR YEAR IN ISRAEL</p>
            <h2 id="journey-title">From new arrival to someone who belongs.</h2>
          </div>
          <ol className="chapter-list">
            {chapters.map(([number, title, body]) => (
              <li key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="download section-shell" id="download" aria-labelledby="download-title">
        <div className="download-art" aria-hidden="true">
          <img src="/assets/app-journey.jpg" alt="" loading="lazy" />
        </div>
        <div className="download-copy">
          <p className="eyebrow">YOUR STORY STARTS SOON</p>
          <h2 id="download-title">Ready for your first chapter?</h2>
          <p>
            My Hebrew Story is preparing to launch on iPhone and Android.
            Write to us and we&apos;ll let you know the moment it&apos;s ready.
          </p>
          <div className="store-row" aria-label="Planned app availability">
            <span className="store-badge"><small>Coming soon to the</small>App Store</span>
            <span className="store-badge"><small>Coming soon on</small>Google Play</span>
          </div>
          <a className="button button-light" href="mailto:hello@myhebrewstory.com?subject=Tell%20me%20when%20My%20Hebrew%20Story%20launches">
            Tell me when it launches
          </a>
        </div>
      </section>

      <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2 id="contact-title">Let&apos;s talk Hebrew.</h2>
        </div>
        <div className="contact-copy">
          <p>Questions, ideas, or just want to say <span lang="he" dir="rtl">שָׁלוֹם</span>?</p>
          <TallyPopupButton className="contact-link">Send us an inquiry</TallyPopupButton>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand" href="#home" aria-label="My Hebrew Story home">
          <img src="/favicon.png" alt="" width="40" height="40" />
          <span>My Hebrew Story</span>
        </a>
        <p>© 2026 My Hebrew Story. Learn Hebrew by living a story.</p>
      </footer>
    </main>
  );
}
