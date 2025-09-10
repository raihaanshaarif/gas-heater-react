import { Inter, Mulish, Raleway } from "next/font/google";
import { lazy, Suspense } from "react";
import "./globals.css";

import Header from "./_components/Header/Header";
import GlobalState from "./_context";

const Footer = lazy(() => import("./_components/Footer/Footer"));
const ButtonScrollUp = lazy(() =>
  import("./_components/Common/ButtonScrollUp")
);

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal"],
  variable: "--base-font",
  preload: true,
  adjustFontFallback: false,
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["800"],
  style: ["normal"],
  variable: "--base-font2",
  preload: true,
  adjustFontFallback: false,
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["900"],
  style: ["normal"],
  variable: "--base-font3",
  preload: true,
  adjustFontFallback: false,
});
//Fonts Local Icon
import localFont from "next/font/local";
const fontIcons = localFont({
  src: "../public/fonts-icon/fonts/font-icon.woff",
  variable: "--font-icons",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});
export const metadata = {
  title:
    "Gas Heater Repair Melbourne | Emergency Service & Installation | #1 Experts",
  description:
    "★★★★★ Melbourne's #1 Gas Heater Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians. Free Quotes. Call 0405133761!",
  keywords:
    "gas heater repair melbourne, emergency gas heater repair, gas heater installation melbourne, gas heater service melbourne, gas heater maintenance melbourne, rinnai repair melbourne, brivis repair melbourne, bonaire repair melbourne, 24/7 gas heater emergency, melbourne gas heating specialists, gas heater technician melbourne",
  authors: [{ name: "Gas Heater Service Melbourne" }],
  creator: "Gas Heater Service Melbourne",
  publisher: "Gas Heater Service Melbourne",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://gasheaterservicemelbourne.com.au",
    siteName: "Gas Heater Service Melbourne",
    title:
      "Gas Heater Repair Melbourne | Emergency Service & Installation | #1 Experts",
    description:
      "★★★★★ Melbourne's #1 Gas Heater Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians. Free Quotes. Call 0405133761!",
    images: [
      {
        url: "https://gasheaterservicemelbourne.com.au/images/gas-heater-service-melbourne-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gas Heater Service Melbourne - Emergency Repairs & Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Heater Repair Melbourne | Emergency Service & Installation",
    description:
      "★★★★★ Melbourne's #1 Gas Heater Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Call 0405133761!",
    images: [
      "https://gasheaterservicemelbourne.com.au/images/gas-heater-service-melbourne-og.jpg",
    ],
  },
  alternates: {
    canonical: "https://gasheaterservicemelbourne.com.au",
  },
  category: "Gas Heating Services",
  classification: "Business",
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Melbourne",
    "geo.position": "-37.8136;144.9631",
    ICBM: "-37.8136, 144.9631",
    "business:contact_data:locality": "Melbourne",
    "business:contact_data:region": "Victoria",
    "business:contact_data:country_name": "Australia",
    "business:contact_data:phone_number": "0405133761",
    "business:contact_data:email": "nihaanexpertise@gmail.com",
  },
};
export const viewport = {
  themeColor: "#0c4c93",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
//Script
import Script from "next/script";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mulish.variable} ${raleway.variable} ${fontIcons.variable}`}
      >
        <Header />
        <GlobalState>{children}</GlobalState>
        <Suspense>
          <Footer />
          <ButtonScrollUp />
        </Suspense>
        <Script src="/js/global-main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
