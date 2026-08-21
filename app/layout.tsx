import type { Metadata } from "next";
import "./globals.css";

const GOOGLE_ANALYTICS_ID = "G-CGBSDC7EJK";

export const metadata: Metadata = {
  metadataBase: new URL("https://myhebrewstory.com"),
  title: "My Hebrew Story — A Story-Driven Hebrew Learning App",
  description:
    "Learn to speak and understand Modern Hebrew through 36 voiced beginner lessons, guided speaking practice, and a year-long story set in Israel.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "My Hebrew Story — A Story-Driven Hebrew Learning App",
    description:
      "Learn to speak and understand Modern Hebrew through a story you live.",
    url: "https://myhebrewstory.com",
    siteName: "My Hebrew Story",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "My Hebrew Story — A Story-Driven Hebrew Learning App",
    description:
      "Learn to speak and understand Modern Hebrew through a story you live.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script src="https://tally.so/widgets/embed.js" defer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const productionHosts = ['myhebrewstory.com', 'www.myhebrewstory.com'];
                if (!productionHosts.includes(window.location.hostname)) return;

                const googleTag = document.createElement('script');
                googleTag.async = true;
                googleTag.src = 'https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}';
                document.head.appendChild(googleTag);

                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ANALYTICS_ID}', {
                  allow_google_signals: false,
                  allow_ad_personalization_signals: false
                });
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
