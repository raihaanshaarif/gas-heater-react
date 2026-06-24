//Import Sections
import PageTitle from "../_components/Common/PageTitle";
import CoverageLayout from "../_components/Coverage/CoverageLayout";

export const metadata = {
  title: "Coverage Areas | Gas Heater Service Melbourne",
  description:
    "Explore all Melbourne suburbs we service for gas heater installation, repairs, servicing, and carbon monoxide safety checks.",
  alternates: {
    canonical: "https://gasheaterservicemelbourne.com.au/coverage/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Coverage() {
  return (
    <>
      <PageTitle dataTitle="Coverage" />
      
      {/* Coverage Introduction Section */}
      <section className="section__indent bg-gradient-to-b from-blue-50 to-white">
        <div className="container container__fluid-lg">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Gas Heater Service Available Across 144 Melbourne Suburbs</h2>
            <p className="text-lg mb-4">
              Gas Heater Service Melbourne provides professional gas heater repair, service, installation, and maintenance 
              across the greater Melbourne area. Whether you're in the CBD, suburbs, or outer regions, our licensed technicians 
              are ready to serve you with same-day emergency response available 24/7.
            </p>
            <p className="text-base mb-6">
              Click on your suburb below to learn more about our specific services in your area, view suburb-specific FAQs, 
              and find service details including typical repair costs, response times, and our full service range including 
              emergency repairs, gas heater servicing, installations, and carbon monoxide safety testing.
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 text-left">
              <p className="font-semibold mb-2">📍 Service Highlights:</p>
              <ul className="text-sm space-y-1">
                <li>✓ 144+ suburbs across Melbourne and surrounds</li>
                <li>✓ Same-day emergency response available</li>
                <li>✓ 24/7 availability for urgent repairs</li>
                <li>✓ All major heater brands serviced</li>
                <li>✓ Licensed, certified, and fully insured technicians</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <main id="tt-pageContent" className="coverage-modern overflow-hidden bg-[radial-gradient(circle_at_top,#e7eefc_0%,#ffffff_42%)]">
        <CoverageLayout />
      </main>
    </>
  );
}
