import PageTitle from "../_components/Common/PageTitle";
import SectionTitle from "../_components/Common/SectionTitle";
import TabsServices from "../_components/Services/TabServices";
import WhatIsIncluded from "../_components/Services/WhatIsIncluded";
import ListWithTitle from "../_components/Common/ListWithTitle";
import TabInfo from "../_components/Services/TabInfo";
//Page Layout
export default function Services() {
  return (
    <>
      <PageTitle dataTitle="Gas Heater Services" />
      <main id="tt-pageContent" className="overflow-hidden bg-[radial-gradient(circle_at_top,#e7eefc_0%,#ffffff_42%)]">
        <div className="section__indent">
          <div className="container__fluid">
            <div className="mx-auto max-w-[980px] rounded-[22px] border border-[#dbe5fb] bg-white/95 p-[24px] md:p-[30px] shadow-[0_22px_55px_rgba(14,47,116,0.12)] backdrop-blur-sm">
              <SectionTitle
                dataSubtitle="professional gas heater services"
                dataTitle={"Reliable Gas Heater Services You Can Trust"}
                dataTextUnder="Expert Care"
                dataText="We provide comprehensive gas heater installation, repair, and maintenance services. Our certified technicians ensure your heating system operates safely and efficiently year-round."
                dataAddClass="text-center"
                dataMaxWidth="600px"
              />
              <div className="mt-[10px] grid gap-[10px] sm:grid-cols-3">
                {[
                  { label: "Service Types", value: "Install + Repair + Service" },
                  { label: "Technicians", value: "Licensed Gas Fitters" },
                  { label: "Coverage", value: "Melbourne Wide" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[12px] border border-[#dfe8fb] bg-[#f6f9ff] px-[12px] py-[11px] text-center"
                  >
                    <p className="mb-[2px] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#46628f]">
                      {item.label}
                    </p>
                    <p className="mb-0 text-[15px] font-bold text-[#092a66]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <TabsServices />
        </div>
        <div className="section__indent">
          <div className="container container__fluid-lg rounded-[20px] border border-[#d9e4fa] bg-white p-[18px] md:p-[24px] shadow-[0_14px_32px_rgba(17,42,84,0.08)]">
            <WhatIsIncluded />
          </div>
        </div>
        <TabInfo />
      </main>
    </>
  );
}
