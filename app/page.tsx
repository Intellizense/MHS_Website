import { TallyPopupButton } from "./TallyPopupButton";
import { FeaturesShowcase } from "./FeaturesShowcase";

const INQUIRY_FORM_ID = "gDVB14";
const WAITLIST_FORM_ID = "D4Opkj";

const courseStats = [
  ["36", "lessons"],
  ["8", "chapters"],
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
  [
    "01",
    "A New Life in Tel Aviv",
    "Meet new neighbors, find the café, and begin talking about work and everyday life.",
  ],
  [
    "02",
    "Shabbat with a New Family",
    "Shop the shuk, buy challah, meet the family, share Shabbat dinner, and slow down by the sea.",
  ],
  [
    "03",
    "Finding Your Rhythm",
    "Return to ulpan, visit a startup, eat out, and learn to tell the stories of your week and weekend.",
  ],
  [
    "04",
    "The Jerusalem Adventure",
    "Plan a weekend away, navigate the Old City, and pause at the Western Wall.",
  ],
  [
    "05",
    "Becoming a Local",
    "Celebrate the New Year and Yom Kippur, ride the bus, meet the first rain, and cook shakshuka.",
  ],
  [
    "06",
    "North of Tel Aviv",
    "Rent a car, discover kibbutz roots, and solve a booking mix-up on a northern road trip.",
  ],
  [
    "07",
    "Building a Life in Israel",
    "Visit the doctor, celebrate Hanukkah and a bar mitzvah, tackle paperwork, find an apartment, and interview for a job.",
  ],
  [
    "08",
    "A Year Comes Full Circle",
    "Celebrate Purim and Seder night—one year after arriving, surrounded by friends and family.",
  ],
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
          <p className="eyebrow">A STORY-FIRST HEBREW COURSE</p>
          <h1 id="hero-title">Learn Hebrew by living a story.</h1>
          <p className="hero-intro">
            Move to Tel Aviv. Meet your neighbors. Build a life in Hebrew across
            36 voiced lessons—without streaks, drills, or getting stuck.
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
          <p className="eyebrow">THE HEBREW COURSE FOR STORY PEOPLE</p>
          <h2 id="manifesto-title">A novel you don&apos;t just read. You live it.</h2>
        </div>
        <p className="manifesto-copy">
          You arrive in Israel as the protagonist. Every lesson moves the plot
          forward through voiced dialogue, vocabulary, grammar, culture, and
          speaking practice. The story pulls you back—not a streak.
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
        <div className="download-art">
          <img
            src="/assets/chapter5-ron.jpg"
            alt="My Hebrew Story journey screen showing Ron’s Becoming a Local chapter"
            loading="lazy"
          />
        </div>
        <div className="download-copy">
          <p className="eyebrow">YOUR STORY STARTS SOON</p>
          <h2 id="download-title">Ready for your first chapter?</h2>
          <p>
            My Hebrew Story is preparing to launch on iPhone and Android.
            Join the waitlist and we&apos;ll let you know the moment it&apos;s ready.
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
