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
      <main id="tt-pageContent" className="coverage-modern overflow-hidden bg-[radial-gradient(circle_at_top,#e7eefc_0%,#ffffff_42%)]">
        <CoverageLayout />
      </main>
    </>
  );
}
