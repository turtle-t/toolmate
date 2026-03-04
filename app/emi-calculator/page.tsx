import type { Metadata } from "next";
import Link from "next/link";
import EMICalculator from "./EMICalculator";

export const metadata: Metadata = {
  title: "EMI Calculator - Calculate Loan EMI Online",
  description:
    "Free EMI calculator to calculate monthly loan EMI based on loan amount, interest rate and tenure.",
};

export default function Page() {
  return (
    <div className="space-y-16">

      <EMICalculator />

      {/* SEO Content Section */}
      <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000] text-sm space-y-6 text-black tracking-wide">

        <h2 className="text-2xl font-extrabold text-gray-700">
          What is EMI?
        </h2>

        <p>
          EMI (Equated Monthly Installment) is the fixed amount you pay
          every month towards repaying your loan.
        </p>

        <h3 className="text-xl font-bold text-gray-600">
          EMI Formula
        </h3>

        <p>
          EMI = P × r × (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> - 1)
        </p>

        <p>
          Where:
          <br />
          P = Loan Amount
          <br />
          r = Monthly Interest Rate
          <br />
          n = Loan Tenure in Months
        </p>

        <h3 className="text-xl font-bold text-gray-600">
          Example
        </h3>

        <p>
          If you take a loan of ₹1,00,000 at 10% annual interest for 1 year,
          your EMI will be calculated based on the formula above.
        </p>

        <h3 className="text-xl font-bold text-gray-600">
          Related Tools
        </h3>

        <div className="flex gap-4 flex-wrap">
          <Link href="/age-calculator" className="underline">
            Age Calculator
          </Link>
          <Link href="/bmi-calculator" className="underline">
            BMI Calculator
          </Link>
        </div>

      </div>

    </div>
  );
}