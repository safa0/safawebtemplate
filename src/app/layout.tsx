import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Preloader } from "@/components/ui/Preloader";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { generateMetadata as genMeta, BASE_URL } from "@/config/metadata";
import { siteConfig } from "@/config/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  ...genMeta("home"),
  metadataBase: new URL(BASE_URL),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${BASE_URL}/#website`,
                  url: BASE_URL,
                  name: "Gradient Fellows",
                  description: siteConfig.description,
                },
                {
                  "@type": "Organization",
                  "@id": `${BASE_URL}/#organization`,
                  name: "Gradient Fellows",
                  url: BASE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: `${BASE_URL}/logo.png`,
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: siteConfig.contact.email,
                    contactType: "customer support",
                  },
                  foundingDate: "2026",
                  description: siteConfig.description,
                  sameAs: [
                    siteConfig.social.twitter,
                    siteConfig.social.linkedin,
                    siteConfig.social.github,
                  ].filter(Boolean),
                },
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Preloader />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
