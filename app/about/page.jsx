import PageTitle from "../_components/Common/PageTitle";

import AboutCompany from "../_components/About/AboutCompany";
import WhyChooseUs from "../_components/About/WhyChooseUs";
import RSF from "../_components/About/RSF";
import Portfolio from "../_components/About/Portfolio";
import OurTeam from "../_components/About/OurTeam";
import OurCertificates from "../_components/About/OurCertificates";
import AreasWeCover from "../_components/About/AreasWeCover";

export const metadata = {
  title: "About Us | Professional Gas Heater Service Melbourne | 15+ Years Experience",
  description:
    "Learn about our gas heater repair, service & installation company in Melbourne. 15+ years experience,  licensed technicians, 4.9★ rating, serving 144 suburbs. Call 0405133761.",
  keywords:
    "about gas heater company Melbourne, professional heating service, experienced technicians,  licensed, gas heater specialists Melbourne, trusted heating repair service",
  alternates: {
    canonical: "https://gasheaterservicemelbourne.com.au/about/"
  },
};

export default function About() {
  return (
    <>
      <PageTitle dataTitle="About us" />
      <main id="tt-pageContent" className="overflow-hidden">
        <AboutCompany />
        <WhyChooseUs />
        <RSF />

        <AreasWeCover />
      </main>
    </>
  );
}
