import { TallyPopupButton } from "./TallyPopupButton";
import { FeaturesShowcase } from "./FeaturesShowcase";

const INQUIRY_FORM_ID = "gDVB14";
const WAITLIST_FORM_ID = "D4Opkj";

const courseStats = [
  ["36", "Hebrew lessons"],
  ["8", "story chapters"],
  ["1", "year in Israel"],
];

function CourseProof({ className }: { className: string }) {
  return (
    <dl className={`proof-row ${className}`} aria-label="Course overview">
      {courseStats.map(([value, label]) => (
        <div key={label}>
          <dt>{value}</dt>
          <dd>{label}</dd>
        </div>
      ))}
    </dl>
  );
}

const chapters = [
  {
    number: "01",
    title: "A New Life in Tel Aviv",
    story: "Meet your neighbors, find the café, and talk about work and everyday life.",
    learning:
      "Introduce yourself, ask simple questions, use gendered nouns and adjectives, build present-tense sentences, and order at a café.",
  },
  {
    number: "02",
    title: "Shabbat with a New Family",
    story: "Shop at the shuk, meet the family, share Shabbat dinner, and slow down by the sea.",
    learning:
      "Invite people, shop and ask prices, count in Hebrew, talk about family and possession, express what you like, and use essential question words.",
  },
  {
    number: "03",
    title: "Finding Your Rhythm",
    story: "Return to ulpan, visit a startup, eat out, and tell stories from your week.",
    learning:
      "Use classroom survival phrases, tell time, make plans, order a meal, and move from present Hebrew into the past tense.",
  },
  {
    number: "04",
    title: "The Jerusalem Adventure",
    story: "Plan a weekend away, navigate the Old City, and pause at the Western Wall.",
    learning:
      "Talk about the future, make suggestions, understand directions, say what you can do, use object pronouns, and express an opinion.",
  },
  {
    number: "05",
    title: "Becoming a Local",
    story: "Celebrate the holidays, ride the bus, meet the first rain, and cook shakshuka.",
    learning:
      "Use holiday greetings, talk about frequency, navigate public transport, compare things, give instructions, and follow a Hebrew recipe.",
  },
  {
    number: "06",
    title: "North of Tel Aviv",
    story: "Rent a car, discover kibbutz roots, and solve a hotel booking mix-up in northern Israel.",
    learning:
      "Handle car rental and travel rules, use larger numbers, describe what existed in the past, talk about what you had, and manage hotel check-in.",
  },
  {
    number: "07",
    title: "Building a Life in Israel",
    story: "Visit the doctor, face paperwork, find an apartment, and interview for a job.",
    learning:
      "Describe symptoms, understand instructions and signs, form noun chains and relative clauses, and use future-tense Hebrew for real plans and interviews.",
  },
  {
    number: "08",
    title: "A Year Comes Full Circle",
    story: "Celebrate Purim and Seder night—one year after arriving, surrounded by friends.",
    learning:
      "Use Hebrew for the holiday table, consolidate the major verb patterns, and bring past, present, and future together in your own story.",
  },
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
          <TallyPopupButton formId={INQUIRY_FORM_ID}>Contact</TallyPopupButton>
          <TallyPopupButton className="nav-download" formId={WAITLIST_FORM_ID}>
            Join Wait List
          </TallyPopupButton>
        </nav>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">A STORY-DRIVEN HEBREW LEARNING APP</p>
          <h1 id="hero-title">The Hebrew learning app where you live the story.</h1>
          <p className="hero-intro">
            Learn to speak and understand everyday Modern Hebrew through a year
            in Tel Aviv. Follow 36 fully voiced beginner lessons with dialogue,
            vocabulary, grammar, Israeli culture, and guided speaking practice.
          </p>
          <div className="hero-actions">
            <TallyPopupButton className="button button-primary" formId={WAITLIST_FORM_ID}>
              Join Wait List
            </TallyPopupButton>
            <div className="hero-store-status" aria-label="Coming soon to the App Store and Google Play">
              <span className="coming-soon">Coming soon</span>
              <div className="hero-store-badges" aria-hidden="true">
                <span className="hero-store-badge">
                  <span className="store-mark apple-mark"></span>
                  <span><small>Download on the</small>App Store</span>
                </span>
                <span className="hero-store-badge">
                  <span className="store-mark play-mark">▶</span>
                  <span><small>Get it on</small>Google Play</span>
                </span>
              </div>
            </div>
          </div>
          <CourseProof className="proof-row-desktop" />
        </div>

        <div className="hero-visual" aria-label="Ron and Gal overlooking Tel Aviv beach">
          <img src="/assets/hero-arrival.jpg" alt="Ron and Gal speaking above the Tel Aviv beach in a watercolor illustration" />
          <div className="story-stamp" aria-hidden="true">
            <strong>YOU</strong>
            <span>are the<br />main character</span>
          </div>
        </div>
        <CourseProof className="proof-row-mobile" />
      </section>

      <section className="manifesto section-shell" aria-labelledby="manifesto-title">
        <div className="manifesto-heading">
          <p className="eyebrow">HOW THE APP TEACHES HEBREW</p>
          <h2 id="manifesto-title">A complete beginner Hebrew course, built into a story.</h2>
        </div>
        <p className="manifesto-copy">
          Instead of memorizing disconnected phrases, you arrive in Israel as
          the protagonist. Every chapter teaches practical vocabulary, grammar,
          listening, pronunciation, and conversation through the next scene in
          your life. The story pulls you back—not a streak.
        </p>
        <figure className="manifesto-art manifesto-art-gal">
          <img
            src="/assets/gal-arrival.jpg"
            alt="Gal arriving on a sunlit Tel Aviv street with her suitcases"
            loading="lazy"
          />
        </figure>
      </section>

      <FeaturesShowcase />

      <section className="journey" aria-labelledby="journey-title">
        <div className="journey-image">
          <img
            src="/assets/last-banner.jpg"
            alt="Ron and Gal exploring Jerusalem with friends"
            loading="lazy"
          />
        </div>
        <div className="journey-content section-shell">
          <div className="journey-heading">
            <p className="eyebrow">THE 36-LESSON HEBREW CURRICULUM</p>
            <h2 id="journey-title">What you&apos;ll learn, chapter by chapter.</h2>
            <p className="journey-intro">
              Each chapter pairs a new part of life in Israel with the Modern
              Hebrew you need to understand it, talk through it, and make it
              your own.
            </p>
          </div>
          <ol className="chapter-list">
            {chapters.map(({ number, title, story, learning }) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p className="chapter-story">{story}</p>
                  <p className="chapter-learning">
                    <strong>Hebrew you&apos;ll learn:</strong> {learning}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="download section-shell" id="download" aria-labelledby="download-title">
        <div className="download-art">
          <img
            src="/assets/chapter5-ron.jpg"
            alt="My Hebrew Story journey screen showing Ron’s Becoming a Local chapter"
            loading="lazy"
          />
        </div>
        <div className="download-copy">
          <p className="eyebrow">THE HEBREW LEARNING APP IS COMING SOON</p>
          <h2 id="download-title">Ready to start speaking Hebrew?</h2>
          <p>
            My Hebrew Story is a guided beginner Hebrew course for iPhone and
            Android. Join the waitlist and we&apos;ll let you know when your first
            chapter is ready.
          </p>
          <div className="store-row" aria-label="Planned app availability">
            <span className="store-badge"><small>Coming soon to the</small>App Store</span>
            <span className="store-badge"><small>Coming soon on</small>Google Play</span>
          </div>
          <TallyPopupButton className="button button-light" formId={WAITLIST_FORM_ID}>
            Join Wait List
          </TallyPopupButton>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand" href="#home" aria-label="My Hebrew Story home">
          <img src="/favicon.png" alt="" width="40" height="40" />
          <span>My Hebrew Story</span>
        </a>
        <div className="footer-meta">
          <p>© 2026 My Hebrew Story. Learn Hebrew by living a story.</p>
          <a href="/privacy/">Privacy Policy</a>
        </div>
      </footer>
    </main>
  );
}
