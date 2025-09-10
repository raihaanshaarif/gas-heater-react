import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/cart/",
          "/shop/",
          "/blog/",
          "/success/",
          "/faq/",
          "/testimonials/",
          "/price/",
          "/_components/",
          "/_context/",
          "/_dataGeneralSite/",
        ],
      },
    ],
    sitemap: "https://gasheaterservicemelbourne.com.au/sitemap.xml",
  };
}
