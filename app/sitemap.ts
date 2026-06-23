import { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gasheaterservicemelbourne.com.au";
  const coverageDir = join(process.cwd(), "app", "coverage");
  const coverageSuburbs = readdirSync(coverageDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const coverageSuburbRoutes: MetadataRoute.Sitemap = coverageSuburbs.map(
    (suburb) => ({
      url: `${baseUrl}/coverage/${suburb}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/coverage/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...coverageSuburbRoutes,
    {
      url: `${baseUrl}/brands/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Main Service Pages
    {
      url: `${baseUrl}/services/services__residential/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/services__commercial/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/services__emergency/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Emergency Gas Heater Repair (High Priority - 880/mo searches)
    {
      url: `${baseUrl}/emergency-gas-heater-repair/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Hot Water Systems (New High-Value Service)
    {
      url: `${baseUrl}/hot-water-systems/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Residential Services
    {
      url: `${baseUrl}/services/services__residential/gas-heater-installation/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/services__residential/gas-heater-repairs/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/services__residential/gas-heater-servicing/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/services__residential/carbon-monoxide-testing/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/services__residential/emergency-gas-heater-repairs/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Commercial Services
    {
      url: `${baseUrl}/services/services__commercial/gas-heater-installation/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/services__commercial/gas-heater-repairs/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/services__commercial/gas-heater-servicing/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/services__commercial/carbon-monoxide-testing/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/services__commercial/emergency-gas-heater-repairs/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Emergency Services
    {
      url: `${baseUrl}/services/services__emergency/no-heating-emergencies/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/services/services__emergency/gas-leak-detection-repairs/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/services/services__emergency/carbon-monoxide-alarm-response/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/services/services__emergency/urgent-gas-heater-repairs/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/services/services__emergency/emergency-gas-heater-shutdowns/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Brand Pages
    {
      url: `${baseUrl}/brands/bonaire/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands/braemar/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands/brivis/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands/rinnai/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands/kaden/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands/pyrox/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands/vulcan/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
