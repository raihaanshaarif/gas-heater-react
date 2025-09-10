import MainSlider from "./_components/index/MainSlider";
import OurServicesIndex from "./_components/index/OurServicesIndex";
import AboutIndex from "./_components/index/AboutIndex";
import TabsIndex from "./_components/index/TabsIndex";
import AdditionalServices from "./_components/index/AdditionalServices";
import HowWeWork from "./_components/index/HowWeWork";
import PromoFullWidth from "./_components/Common/PromoFullWidth";
import RequestQuote from "./_components/index/RequestQuote";
import FaqIndex from "./_components/index/FaqIndex";
import Testimonials from "./_components/index/Testimonials";
import NewsLayout from "./_components/index/NewsLayout";
import Partners from "./_components/index/Partners";

export const metadata = {
  title:
    "Gas Heater Repair Melbourne | Emergency Service & Installation | #1 Experts",
  description:
    "★★★★★ Melbourne's #1 Gas Heater Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians. Free Quotes. Call 0405133761!",
  keywords:
    "gas heater repair melbourne, emergency gas heater repair, gas heater installation melbourne, gas heater service melbourne, gas heater maintenance melbourne, same day gas heater repair, 24/7 emergency gas heating, melbourne gas heating specialists, rinnai repair melbourne, brivis repair melbourne",
  alternates: {
    canonical: "https://gasheaterservicemelbourne.com.au",
  },
  openGraph: {
    title:
      "Gas Heater Repair Melbourne | Emergency Service & Installation | #1 Experts",
    description:
      "★★★★★ Melbourne's #1 Gas Heater Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians. Free Quotes. Call 0405133761!",
    url: "https://gasheaterservicemelbourne.com.au",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://gasheaterservicemelbourne.com.au/#business",
            name: "Gas Heater Service Melbourne",
            description:
              "Melbourne's #1 Gas Heater Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians.",
            url: "https://gasheaterservicemelbourne.com.au",
            telephone: "0405133761",
            email: "nihaanexpertise@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Melbourne",
              addressRegion: "Victoria",
              addressCountry: "Australia",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-37.8136",
              longitude: "144.9631",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Melbourne",
              },
              {
                "@type": "State",
                name: "Victoria",
              },
            ],
            serviceType: [
              "Gas Heater Repair",
              "Gas Heater Installation",
              "Gas Heater Maintenance",
              "Emergency Gas Heater Service",
              "Gas Leak Detection",
              "Carbon Monoxide Testing",
            ],
            priceRange: "$$",
            openingHours: ["Mo-Su 00:00-23:59"],
            image:
              "https://gasheaterservicemelbourne.com.au/images/gas-heater-service-melbourne.jpg",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Gas Heater Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Gas Heater Repair Melbourne",
                    description:
                      "24/7 emergency gas heater repair service in Melbourne. Same-day service available.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Gas Heater Installation Melbourne",
                    description:
                      "Professional gas heater installation service for residential and commercial properties.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Gas Heater Service & Maintenance Melbourne",
                    description:
                      "Regular gas heater servicing and maintenance to keep your heating system running efficiently.",
                  },
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
            sameAs: [
              "https://www.facebook.com/gasheaterservicemelbourne",
              "https://www.instagram.com/gasheaterservicemelb",
            ],
          }),
        }}
      />

      <main id="tt-pageContent" className="overflow-hidden">
        {/* H1 hidden for SEO - visible in MainSlider */}
        <h1 style={{ position: "absolute", left: "-9999px", fontSize: "1px" }}>
          Gas Heater Repair Melbourne | Emergency Service & Installation
        </h1>

        <MainSlider />
        <OurServicesIndex />
        <AboutIndex />
        <AdditionalServices />
        <Testimonials />
        <FaqIndex />
        <Partners />

        {/* Emergency Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EmergencyService",
              name: "Emergency Gas Heater Repair Melbourne",
              description:
                "24/7 emergency gas heater repair service available throughout Melbourne. Same-day service and immediate response for heating emergencies.",
              provider: {
                "@type": "LocalBusiness",
                name: "Gas Heater Service Melbourne",
                telephone: "0405133761",
                email: "nihaanexpertise@gmail.com",
              },
              areaServed: {
                "@type": "City",
                name: "Melbourne",
                containedInPlace: {
                  "@type": "State",
                  name: "Victoria",
                },
              },
              availableLanguage: "English",
              telephone: "0405133761",
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Gas Heater Repair Melbourne",
              description:
                "Professional gas heater repair, installation and maintenance services in Melbourne. Emergency repairs available 24/7.",
              provider: {
                "@type": "LocalBusiness",
                name: "Gas Heater Service Melbourne",
                telephone: "0405133761",
                email: "nihaanexpertise@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Melbourne",
                  addressRegion: "Victoria",
                  addressCountry: "Australia",
                },
              },
              areaServed: "Melbourne",
              serviceType: "Gas Heater Repair",
              category: "Home Services",
            }),
          }}
        />
      </main>
    </>
  );
}
