import MainSlider from "./_components/index/MainSlider";
import CustomSlider from "./_components/index/CustomSlider";
import OurServicesIndex from "./_components/index/OurServicesIndex";
import AboutIndex from "./_components/index/AboutIndex";
import TabsIndex from "./_components/index/TabsIndex";
import AdditionalServices from "./_components/index/AdditionalServices";
import HowWeWork from "./_components/index/HowWeWork";
import PromoFullWidth from "./_components/Common/PromoFullWidth";
import RequestQuote from "./_components/index/RequestQuote";
import FaqIndex from "./_components/index/FaqIndex";
import { commonGasHeaterFAQs, generateFAQSchema } from "./_utils/faqSchema";
import { generateDetailedAggregateRating } from "./_utils/localReviewSchema";
import { generateMultiLocationBusinessSchema, generateServiceRadiusSchema } from "./_utils/geoSeoSchema";
import Testimonials from "./_components/index/Testimonials";
import NewsLayout from "./_components/index/NewsLayout";
import Partners from "./_components/index/Partners";
import WhyChooseUs from "./_components/About/WhyChooseUs";

export const metadata = {
  title:
    "Gas Heater Repair Melbourne | 24/7 Emergency Service & Installation",
  description:
    "Gas Heater Repair Melbourne - 24/7 emergency service. Same-day repairs across all Melbourne suburbs. Licensed VBA technicians. ★4.9/5 (127 reviews). Free quotes. Call 0405 133 761 now.",
  keywords:
    "gas heater repair melbourne, emergency gas heater repair, gas heater repair, 24 hour gas heater repair, same day gas heater repair, melbourne gas heater service, gas heating repairs, emergency heating melbourne, licensed gas heater repair",
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
              streetAddress: "Melbourne CBD, Victoria",
              addressLocality: "Melbourne",
              addressRegion: "Victoria",
              postalCode: "3000",
              addressCountry: "AU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-37.8136",
              longitude: "144.9631",
            },
            sameAs: [
              "https://www.facebook.com/gasheaterservicemelbourne",
              "https://www.instagram.com/gasheaterservicemelb",
            ],
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
          }),
        }}
      />

      <main id="tt-pageContent" className="overflow-hidden">
        {/* H1 hidden for SEO - visible in MainSlider */}
        <h1 style={{ position: "absolute", left: "-9999px", fontSize: "1px" }}>
          Gas Heater Repair Melbourne | Emergency Service & Installation
        </h1>

        {/* <MainSlider /> */}
        <CustomSlider />
        <AdditionalServices />

        {/* <AboutIndex /> */}
        <WhyChooseUs />
        <OurServicesIndex />

        <Partners />
        <Testimonials />
        <FaqIndex />

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
              areaServed: {
                "@type": "City",
                name: "Melbourne",
                containedInPlace: {
                  "@type": "State",
                  name: "Victoria",
                },
              },
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
              category: "Home Services",
            }),
          }}
        />

        {/* FAQ Schema for Answer Engine Optimization (AEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(commonGasHeaterFAQs)),
          }}
        />

        {/* Multi-Location Business Schema for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateMultiLocationBusinessSchema()),
          }}
        />

        {/* Service Radius Schema for Geographic Coverage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceRadiusSchema("Melbourne")),
          }}
        />

        {/* Detailed AggregateRating for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateDetailedAggregateRating()),
          }}
        />
      </main>
    </>
  );
}
