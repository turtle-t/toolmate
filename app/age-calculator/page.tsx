import type { Metadata } from "next";
import Link from "next/link";
import AgeCalculator from "./AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator - Calculate Your Exact Age Online",
  description:
    "Free online age calculator to calculate your exact age in years, months and days. No signup required, 100% accurate results.",
};

export default function Page() {
  // This is the "Secret Sauce" for Google Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ToolMate Age Calculator",
    "url": "https://toolmate-seven.vercel.app/age-calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "All",
    "description": "Calculates chronological age in years, months, and days.",
    "browserRequirements": "Requires JavaScript",
  };

  return (
    <div className="space-y-16">
      {/* Schema.org tag for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AgeCalculator />

      {/* SEO Content */}
      <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000] text-sm space-y-6 text-black tracking-wide">
        <h2 className="text-2xl font-bold text-black tracking-wide uppercase">
          How to Calculate Age?
        </h2>

        <p>
          Age is calculated by finding the difference between your date of birth
          and a selected target date. Our calculator provides the result in
          years, months, and days instantly.
        </p>

        <p>
          This tool is useful for official forms, exams, job applications,
          retirement planning, and more.
        </p>

        <h3 className="text-xl font-semibold text-black tracking-wide uppercase">
          Example
        </h3>

        <p>
          If someone was born on 1 January 2000 and today's date is
          1 January 2025, their age would be 25 years.
        </p>

        <h3 className="text-xl font-semibold uppercase">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-black tracking-wide underline">
              Is this age calculator accurate?
            </p>
            <p>
              Yes, it calculates age based on calendar year, month and day difference.
            </p>
          </div>

          <div>
            <p className="font-semibold text-black tracking-wide underline">
              Can I calculate future age?
            </p>
            <p>
              Yes, select a future date in the second field to check future age.
            </p>
          </div>
        </div>

        {/* Internal Links */}
        <div className="pt-6 border-t-2 border-black">
          <p className="font-semibold mb-2 uppercase">
            Related Tools:
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/bmi-calculator" className="underline hover:bg-black hover:text-white px-1">
              BMI Calculator
            </Link>
            <Link href="/emi-calculator" className="underline hover:bg-black hover:text-white px-1">
              EMI Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
