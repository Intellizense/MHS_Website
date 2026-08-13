import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — My Hebrew Story",
  description:
    "How My Hebrew Story handles usage analytics, speaking exercises, and information stored on your device.",
  alternates: {
    canonical: "https://myhebrewstory.com/privacy/",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <header className="site-header privacy-header">
        <a className="brand" href="/" aria-label="My Hebrew Story home">
          <img src="/favicon.png" alt="" width="44" height="44" />
          <span className="brand-name">My Hebrew Story</span>
        </a>
        <nav aria-label="Privacy page navigation">
          <a href="/">Home</a>
        </nav>
      </header>

      <article className="privacy-content">
        <header className="privacy-title">
          <p className="eyebrow">YOUR PRIVACY</p>
          <h1>Privacy Policy</h1>
          <p className="privacy-effective">Effective August 13, 2026</p>
          <p className="privacy-lead">
            My Hebrew Story does not require an account and does not
            intentionally collect direct personal identifiers. We collect only
            limited, de-identified usage analytics to improve the experience,
            while speaking audio is processed transiently for real-time speech
            recognition.
          </p>
        </header>

        <div className="privacy-document">
          <section aria-labelledby="privacy-scope">
            <h2 id="privacy-scope">1. Scope</h2>
            <p>
              This Privacy Policy explains how the My Hebrew Story mobile
              application handles information. It also explains what happens
              when you voluntarily contact us through our website.
            </p>
          </section>

          <section aria-labelledby="privacy-not-collected">
            <h2 id="privacy-not-collected">2. Information we do not collect</h2>
            <p>
              My Hebrew Story does not require you to create an account. We do
              not intentionally collect your name, email address, phone number,
              physical address, precise location, contacts, payment information,
              or advertising identifier through the app.
            </p>
          </section>

          <section aria-labelledby="privacy-analytics">
            <h2 id="privacy-analytics">3. Usage analytics</h2>
            <p>
              We collect limited information about how the app is used. This may
              include:
            </p>
            <ul>
              <li>App launches and session duration</li>
              <li>Screens, lessons, or chapters opened</li>
              <li>Features and controls used</li>
              <li>App version, operating-system version, and general device type</li>
              <li>Country or general geographic region, without precise location information</li>
              <li>General performance, reliability, and error information</li>
            </ul>
            <p>
              We use this information only to understand how the app is used,
              compare general usage patterns across device and operating-system
              versions and countries, improve lessons and features, and identify
              technical problems. It is not linked to an identified individual,
              used for advertising, sold, or used to track your activity across
              other companies’ apps or websites.
            </p>
          </section>

          <section aria-labelledby="privacy-speech">
            <h2 id="privacy-speech">4. Speech recognition</h2>
            <p>
              My Hebrew Story includes optional speaking exercises. When you use
              a speaking exercise, microphone audio is transmitted securely to a
              third-party speech-recognition service for real-time transcription.
            </p>
            <p>
              The audio is processed only to convert your speech into text and
              provide feedback within the exercise. It is processed transiently
              and is not stored on our servers or by our speech-recognition
              service provider. It is not used for advertising, user profiling,
              or training artificial-intelligence models.
            </p>
            <p>
              Any recording saved by the app remains locally on your device. We
              do not receive or store a copy. You can remove locally stored
              recordings through the app or by deleting the app.
            </p>
            <p>
              Our speech-recognition service provider may retain limited,
              content-free operational information—such as request timestamps,
              duration, status, latency, and error information—for security,
              billing, reliability, and service operation. This operational
              information does not contain raw audio or transcript content.
            </p>
          </section>

          <section aria-labelledby="privacy-device">
            <h2 id="privacy-device">5. Information stored on your device</h2>
            <p>
              Lesson progress, app preferences, and recordings you choose to
              keep may be stored locally on your device. This information is
              under your control and may be included in device backups according
              to your device and backup settings. We do not receive this locally
              stored information. Removing the app removes its locally stored
              data from the device, subject to any backups you control.
            </p>
          </section>

          <section aria-labelledby="privacy-providers">
            <h2 id="privacy-providers">6. Service providers</h2>
            <p>
              We use carefully selected service providers to perform limited
              functions on our behalf, such as speech recognition, analytics,
              and technical infrastructure. They may process information only as
              necessary to provide these services and are required to protect it
              appropriately. We do not permit our service providers to use this
              information for advertising or cross-app tracking.
            </p>
          </section>

          <section aria-labelledby="privacy-sharing">
            <h2 id="privacy-sharing">7. How information is shared</h2>
            <p>
              We do not sell or rent information. Limited information may be
              processed by our service providers as described above. We may also
              disclose information if reasonably necessary to comply with law,
              protect the security and integrity of the app, prevent fraud or
              abuse, or protect legal rights and safety.
            </p>
          </section>

          <section aria-labelledby="privacy-retention">
            <h2 id="privacy-retention">8. Retention and deletion</h2>
            <p>
              We retain non-aggregated usage analytics only for as long as
              reasonably necessary to understand usage, maintain security, and
              improve the app. We periodically delete or aggregate this
              information. Aggregated statistics that cannot reasonably identify
              an individual may be retained for longer.
            </p>
            <p>
              Real-time speaking audio is not retained off-device. Locally stored
              information remains until you delete it or remove the app. Messages
              you voluntarily send through our inquiry form may be retained for
              as long as necessary to respond and maintain appropriate business
              records.
            </p>
          </section>

          <section aria-labelledby="privacy-choices">
            <h2 id="privacy-choices">9. Your choices and rights</h2>
            <p>
              You can choose not to use the optional speaking exercises and can
              delete locally stored recordings at any time. You may also contact
              us with questions or requests concerning our privacy practices.
              Because the app does not require an account and analytics are not
              linked to an identified individual, we may be unable to locate
              analytics associated with a particular person.
            </p>
            <p>
              Depending on where you live, you may have additional rights under
              applicable privacy law. We will respond to valid requests as
              required by law.
            </p>
          </section>

          <section aria-labelledby="privacy-contact-data">
            <h2 id="privacy-contact-data">10. Information you provide voluntarily</h2>
            <p>
              If you contact us, we receive the information you choose to
              provide, such as your email address and the contents of your
              message. We use it only to respond to your inquiry, provide
              support, or maintain appropriate business records. Contacting us
              is optional and is not required to use the app.
            </p>
          </section>

          <section aria-labelledby="privacy-security">
            <h2 id="privacy-security">11. Security and international processing</h2>
            <p>
              We use reasonable administrative, technical, and organizational
              safeguards designed to protect information. No method of electronic
              transmission or storage is completely secure, however, so we cannot
              guarantee absolute security.
            </p>
            <p>
              Our service providers may process limited information in countries
              other than the country where you live. Where required, we use
              appropriate safeguards for international processing.
            </p>
          </section>

          <section aria-labelledby="privacy-children">
            <h2 id="privacy-children">12. Children’s privacy</h2>
            <p>
              My Hebrew Story is not directed to children under 13, and we do not
              knowingly collect personal information from children under 13. If
              you believe a child has provided personal information to us, please
              contact us so we can take appropriate action.
            </p>
          </section>

          <section aria-labelledby="privacy-updates">
            <h2 id="privacy-updates">13. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post
              the revised policy on this page and update the effective date. If a
              change materially affects how information is handled, we will
              provide additional notice where appropriate.
            </p>
          </section>

          <section aria-labelledby="privacy-contact" className="privacy-contact">
            <h2 id="privacy-contact">14. Contact us</h2>
            <p>
              If you have questions or requests about this Privacy Policy or our
              privacy practices, please use the My Hebrew Story inquiry form.
            </p>
            <a href="https://tally.so/r/gDVB14" target="_blank" rel="noreferrer">
              Contact My Hebrew Story
            </a>
          </section>
        </div>
      </article>

      <footer className="site-footer section-shell privacy-footer">
        <a className="brand" href="/" aria-label="My Hebrew Story home">
          <img src="/favicon.png" alt="" width="40" height="40" />
          <span>My Hebrew Story</span>
        </a>
        <div className="footer-meta">
          <p>© 2026 My Hebrew Story.</p>
          <a href="/privacy/" aria-current="page">Privacy Policy</a>
        </div>
      </footer>
    </main>
  );
}
