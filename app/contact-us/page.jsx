//Import Sections
import PageTitle from "../_components/Common/PageTitle";
import SectionTitle from "../_components/Common/SectionTitle";
import Socials from "../_components/Common/Socials";
import FormContact from "../_components/Common/FormContact";
import ListEmail from "../_components/Common/ListEmail";

export const metadata = {
  title: "Contact Us | Gas Heater Repair Melbourne | 24/7 Emergency Service",
  description:
    "Contact us for emergency gas heater repair, service & installation in Melbourne. 24/7 available. Licensed technicians, fast response times. Call 0405133761 or use our online form.",
  keywords:
    "contact gas heater repair, Melbourne heating service contact, emergency heater repair, gas heater installation contact, get quote gas heater service",
  canonical: "https://gasheaterservicemelbourne.com.au/contact-us/",
};

//Page Layout
export default function ContactUs() {
  return (
    <>
      <PageTitle dataTitle="Contact Us" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div
          className="section__inner bg-no-repeat bg-center lazyload tablet-bg-none"
          data-bg="/images/section-map-contact.png"
        >
          <div className="container container__fluid-lg">
            <div className="flex md:gap-[30px] md-max:gap-[50px] md-max:flex-col">
              <div className="md:basis-5/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="contact us"
                  dataTitle="Get in Touch"
                  dataTextUnder="Contact"
                  dataAddClass="blocktitle__left blocktitle__topNone"
                />
                <strong className="base__color">
                  Our team proudly offers an on-time guarantee and a 100%
                  customer satisfaction guarantee.
                </strong>
                <p className="indent__top">
                  Request a quote for gas heater service, repair, maintenance,
                  or installation. Manage your current bookings online, or
                  contact us for more information. We’re here to help with all
                  your gas heating needs.
                </p>
                <ListEmail />
                <div className="lg:mt-[35px] lg-max:mt-[25px] sm-max:mt-[20px]">
                  <Socials
                    wrapperClass="social"
                    titleData="Follow us"
                    titleClass="ttsubtitle"
                  />
                </div>
              </div>
              <div className="md:basis-7/12">
                <FormContact wrapperClass="form__box" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
