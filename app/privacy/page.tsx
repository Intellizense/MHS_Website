import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — My Hebrew Story",
  description:
    "How My Hebrew Story handles website and app analytics, speaking exercises, and information stored on your device.",
  alternates: {
    canonical: "https://myhebrewstory.com/privacy/",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <header className="site-header privacy-header">
        <Link className="brand" href="/" aria-label="My Hebrew Story home">
          <img src="/favicon.png" alt="" width="44" height="44" />
          <span className="brand-name">My Hebrew Story</span>
        </Link>
        <nav aria-label="Privacy page navigation">
          <Link href="/">Home</Link>
        </nav>
      </header>

      <article className="privacy-content">
        <header className="privacy-title">
          <p className="eyebrow">YOUR PRIVACY</p>
          <h1>Privacy Policy</h1>
          <p className="privacy-effective">Effective August 14, 2026</p>
          <p className="privacy-lead">
            My Hebrew Story does not require an account and does not
            intentionally collect direct personal identifiers. We collect only
            limited, pseudonymous usage analytics to improve the experience,
            while speaking audio is processed for speech recognition and may be
            temporarily uploaded when real-time processing is unavailable.
          </p>
        </header>

        <div className="privacy-document">
          <section aria-labelledby="privacy-scope">
            <h2 id="privacy-scope">1. Scope</h2>
            <p>
              This Privacy Policy explains how the My Hebrew Story mobile
              application and website handle information, including when you
              use the app, visit the website, or voluntarily contact us.
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
              We collect limited information about how the app and website are
              used. Depending on which service you use, this may include:
            </p>
            <ul>
              <li>App launches and session duration</li>
              <li>Screens, lessons, or chapters opened</li>
              <li>Features and controls used</li>
              <li>Website pages visited and general referral information</li>
              <li>App version, browser, operating-system version, and general device type</li>
              <li>Country or general geographic region, without precise location information</li>
            </ul>
            <p>
              On the website, we use Google Analytics. Google Analytics uses a
              first-party cookie named <code>_ga</code> containing a randomly
              generated client identifier to distinguish browsers and sessions.
              It also processes information such as pages visited, approximate
              location, and browser and device information. Google Analytics may
              use an IP address during collection to derive approximate location,
              but GA4 does not log or store the IP address.
            </p>
            <p>
              We use analytics only to understand general usage patterns,
              improve lessons, features, and website content, and identify
              technical problems. We do not intentionally associate analytics
              identifiers with your name or email address. We have disabled
              Google Signals and advertising-personalization signals for the
              website tag. Analytics information is not sold or used by us to
              track your activity across other companies’ apps or websites.
            </p>
          </section>

          <section aria-labelledby="privacy-speech">
            <h2 id="privacy-speech">4. Speech recognition</h2>
            <p>
              My Hebrew Story includes optional speaking exercises. When you use
              a speaking exercise, microphone audio is transmitted securely to a
              third-party speech-recognition service for transcription.
            </p>
            <p>
              Where available, audio is processed transiently through real-time
              speech recognition. If real-time transcription is unavailable or
              interrupted, the recording may be temporarily uploaded to our
              server and our speech-recognition service provider for batch
              transcription. Temporary audio files and transcripts created for
              this fallback are deleted promptly after processing.
            </p>
            <p>
              Audio and transcripts are used only to convert your speech into
              text and provide feedback within the exercise. They are not used
              for advertising, user profiling, or training
              artificial-intelligence models.
            </p>
            <p>
              Any recording saved by the app remains locally on your device
              unless the temporary batch fallback described above is required.
              Outside that limited processing, we do not retain a server copy.
              You can remove locally stored recordings through the app or by
              deleting the app.
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
              improve the app and website. We periodically delete or aggregate
              this information. Website analytics are retained according to our
              Google Analytics retention settings and Google’s applicable
              policies. Aggregated statistics that cannot reasonably identify an
              individual may be retained for longer.
            </p>
            <p>
              Audio processed through the real-time path is not retained
              off-device. If the temporary batch fallback is used, uploaded audio
              and the resulting transcript are deleted promptly after
              transcription and evaluation. Locally stored information remains
              until you delete it or remove the app. Messages you voluntarily
              send through our inquiry form may be retained for as long as
              necessary to respond and maintain appropriate business records.
            </p>
          </section>

          <section aria-labelledby="privacy-choices">
            <h2 id="privacy-choices">9. Your choices and rights</h2>
            <p>
              You can choose not to use the optional speaking exercises and can
              delete locally stored recordings at any time. You can control or
              delete website cookies through your browser settings. You may also
              contact us with questions or requests concerning our privacy
              practices. Because the app does not require an account and we do
              not intentionally associate analytics identifiers with your name
              or email address, we may be unable to locate analytics associated
              with a particular person.
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
        <Link className="brand" href="/" aria-label="My Hebrew Story home">
          <img src="/favicon.png" alt="" width="40" height="40" />
          <span>My Hebrew Story</span>
        </Link>
        <div className="footer-meta">
          <p>© 2026 My Hebrew Story.</p>
          <a href="/privacy/" aria-current="page">Privacy Policy</a>
        </div>
      </footer>
    </main>
  );
}
