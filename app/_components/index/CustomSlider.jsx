"use client";
import Link from "next/link";
import React from "react";
import {
  LuPhoneCall,
  LuWrench,
  LuFlame,
  LuSettings,
  LuShieldCheck,
} from "react-icons/lu";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { sendGTMEvent } from "@next/third-parties/google";

const CustomSlider = () => {
  return (
    <section className="group relative h-[85vh] min-h-[100svh] overflow-hidden z-0 -mt-22 isolate">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#061932_0%,#0c4c93_50%,#0f6bc1_100%)]" />
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_20%_20%,rgba(81,172,251,0.45),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,73,23,0.28),transparent_40%)] animate-pulse" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute -top-32 -left-24 h-[22rem] w-[22rem] rounded-full bg-sky-300/20 blur-3xl transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2" />
      <div className="absolute -bottom-28 -right-20 h-[20rem] w-[20rem] rounded-full bg-orange-400/20 blur-3xl transition-transform duration-700 group-hover:scale-110 group-hover:translate-y-2" />

      {/* Mechanical background animation layer */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <LuSettings
          className="absolute top-[10%] left-[8%] text-white/20"
          size={88}
          style={{ animation: "spin 18s linear infinite" }}
        />
        <LuSettings
          className="absolute bottom-[12%] left-[22%] text-sky-200/20"
          size={64}
          style={{ animation: "spin 12s linear infinite reverse" }}
        />
        <LuSettings
          className="absolute top-[20%] right-[10%] text-orange-200/20"
          size={72}
          style={{ animation: "spin 20s linear infinite" }}
        />
        <LuSettings
          className="absolute bottom-[18%] right-[20%] text-white/15"
          size={54}
          style={{ animation: "spin 10s linear infinite reverse" }}
        />

        <LuWrench
          className="absolute top-[34%] left-[14%] rotate-12 text-white/18 transition-transform duration-700 group-hover:-translate-y-2"
          size={38}
          style={{ animation: "pulse 2.8s ease-in-out infinite" }}
        />
        <LuWrench
          className="absolute bottom-[26%] right-[14%] -rotate-12 text-sky-100/18 transition-transform duration-700 group-hover:translate-y-2"
          size={34}
          style={{ animation: "pulse 3.2s ease-in-out infinite" }}
        />
        <LuFlame
          className="absolute top-[48%] right-[28%] text-orange-200/20"
          size={30}
          style={{ animation: "pulse 2.2s ease-in-out infinite" }}
        />
        <LuFlame
          className="absolute bottom-[34%] left-[32%] text-orange-100/15"
          size={24}
          style={{ animation: "pulse 2.6s ease-in-out infinite" }}
        />

        <div
          className="absolute top-[16%] right-[32%] h-28 w-28 rounded-full border border-white/15"
          style={{ animation: "spin 16s linear infinite" }}
        />
        <div
          className="absolute bottom-[20%] left-[40%] h-20 w-20 rounded-full border border-sky-200/20"
          style={{ animation: "spin 9s linear infinite reverse" }}
        />

        <div className="absolute top-[14%] left-[24%] rounded-full border border-orange-200/20 bg-orange-400/10 px-3 py-1 text-[11px] font-bold tracking-wide text-orange-100">
          EMERGENCY READY
        </div>
        <div className="absolute bottom-[16%] right-[30%] rounded-full border border-sky-200/20 bg-sky-400/10 px-3 py-1 text-[11px] font-bold tracking-wide text-sky-100">
          LIVE DIAGNOSTICS
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-16 text-center text-white">
        {/* Eyebrow */}
        <span className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-secondary opacity-90">
          24 / 7 Gas Heater Repair Team
        </span>

        {/* H1 */}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Gas Heater Repair Melbourne | Same-Day Emergency Service
        </h1>

        {/* H2 with SEO Bolding */}
        <h2 className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
          No heat, ignition failure, strange noises, or gas smell? Our licensed
          technicians provide <strong>urgent fault diagnosis and same-day gas heater repairs</strong> to restore safe heating fast.
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/90">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
            <LuSettings className="text-secondary" /> Same-Day Diagnostics
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
            <LuShieldCheck className="text-secondary" /> Licensed & Insured
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
            <LuFlame className="text-secondary" /> Gas Safety Response
          </span>
        </div>

        {/* CTA Section */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a href="#services">
            <button className="px-10 py-2 border border-secondary rounded-4xl text-white font-bold transition duration-300 hover:border-transparent hover:text-gray-200 hover:bg-red-600">
              Book Urgent Repair
            </button>
          </a>

          <p className="text-slate-300 font-medium">or</p>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <LuPhoneCall className="text-2xl text-secondary" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-slate-300">
                Call For Emergency Repair
              </span>
              <a
                href="tel:0405133761"
                onClick={() =>
                  sendGTMEvent({
                    event: "phone_call_click",
                    value: "hero_emergency",
                    type: "click_to_call",
                  })
                }
                className="text-lg font-bold text-white transition-colors duration-300 hover:text-secondary"
              >
                0405 133 761
              </a>
            </div>
          </div>
        </div>

        {/* Service Cards (Fixed for Mobile & SEO) */}
        <div className="mt-16 w-full flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/services/services__residential/gas-heater-installation/"
            className="group bg-white text-black px-6 py-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold group-hover:text-[#1E60AA] transition-colors">
              GAS HEATING INSTALLATION
            </h3>
            <BsArrowRightSquareFill className="text-2xl text-[#1E60AA]" />
          </Link>

          <Link
            href="/services/services__residential/gas-heater-servicing/"
            className="group bg-white text-black px-6 py-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold group-hover:text-[#1E60AA] transition-colors">
              GAS HEATING SERVICE
            </h3>
            <BsArrowRightSquareFill className="text-2xl text-[#1E60AA]" />
          </Link>

          <Link
            href="/services/services__residential/gas-heater-repairs/"
            className="group bg-white text-black px-6 py-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold group-hover:text-[#1E60AA] transition-colors">
              GAS HEATING REPAIR
            </h3>
            <BsArrowRightSquareFill className="text-2xl text-[#1E60AA]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomSlider;
