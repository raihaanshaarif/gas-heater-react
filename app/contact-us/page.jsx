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

        {/* Company Overview Section */}
        <div className="section__indent">
          <div className="container container__fluid-lg">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Why Choose Gas Heater Service Melbourne?</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Expert Service Across Melbourne</h3>
                <p className="mb-4">
                  Gas Heater Service Melbourne is Melbourne's leading provider of professional gas heater repair, service, and installation. 
                  With over 15 years of industry experience and 35,000+ completed services, our team has established itself as the trusted choice 
                  for residential and commercial heating solutions across Melbourne and the surrounding suburbs.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Our Commitment</h3>
                <p className="mb-4">
                  We understand how critical heating is to your home's comfort and safety. That's why we've built our reputation on:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Same-Day Response:</strong> Emergency calls handled within 2-4 hours</li>
                  <li><strong>Licensed Technicians:</strong> All staff fully certified and insured</li>
                  <li><strong>Transparent Pricing:</strong> No hidden fees, quotes provided upfront</li>
                  <li><strong>Warranty Coverage:</strong> 12-month workmanship guarantee on all services</li>
                  <li><strong>24/7 Availability:</strong> Emergency repairs available around the clock</li>
                  <li><strong>100% Satisfaction:</strong> We stand behind every job we do</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Services We Provide</h3>
                <p className="mb-4">
                  Whether you need emergency repairs, routine maintenance, new installation, or specialized servicing for brands like Braemar, Rinnai, 
                  Brivis, Bonaire, Vulcan, and more—our certified technicians have the expertise to handle it. We serve over 144 Melbourne suburbs 
                  with consistent quality and reliability.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Get Your Free Quote Today</h3>
                <p>
                  Ready to get started? Contact us using the form above, call us at <strong>0405 133 761</strong>, or email us at 
                  <strong> nihaanexpertise@gmail.com</strong>. We'll assess your needs and provide a competitive, obligation-free quote 
                  within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
