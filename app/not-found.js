import SectionTitle from "./_components/Common/SectionTitle";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container container__fluid-lg section__inner text-center">
      <SectionTitle
        dataSubtitle="oops!"
        dataTitle="Page Not Found"
        dataTextUnder="404"
        dataAddClass="text-center"
      />
      <p style={{ marginBottom: "30px", fontSize: "18px", color: "#666" }}>
        The page you&apos;re looking for doesn&apos;t exist, but we&apos;re here
        to help with all your gas heater needs in Melbourne!
      </p>
      <div style={{ marginBottom: "40px" }}>
        <Link href="/" className="btn" style={{ marginRight: "15px" }}>
          <span>🏠 Go to Home Page</span>
        </Link>
        <Link
          href="/services/services__emergency"
          className="btn btn--secondary"
        >
          <span>🚨 Emergency Service</span>
        </Link>
      </div>
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ color: "#ff6b35", marginBottom: "15px" }}>
          Need Gas Heater Service?
        </h3>
        <p style={{ marginBottom: "15px" }}>
          Emergency repairs, installation, and maintenance available 24/7
        </p>
        <a
          href="tel:0405133761"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ff6b35",
            textDecoration: "none",
          }}
        >
          📞 Call 0405133761
        </a>
      </div>
    </div>
  );
};
export default NotFoundPage;
