// app/emi-calculator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import EMICalculator from "./EMICalculator"; // Should be EMI

export const metadata: Metadata = {
  title: "EMI Calculator - Calculate Loan EMI Online",
  description: "Free EMI calculator to calculate monthly loan EMI based on loan amount, interest rate and tenure.",
};

export default function Page() {
  return (
    <div className="space-y-16">
      <EMICalculator />
      {/* Rest of your SEO content... */}
    </div>
  );
}
