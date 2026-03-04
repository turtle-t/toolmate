import type { Metadata } from "next";
import Link from "next/link";
import EMICalculator from "./EMICalculator";

export const metadata: Metadata = {
  title: "EMI Calculator - Calculate Monthly Loan Installments Online",
  description:
    "Free online EMI calculator for Home Loans, Car Loans, and Personal Loans. Calculate your monthly interest and total repayment instantly.",
};

export default function Page() {
  // Schema for Financial Tools (Helps Google show your tool in search results)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ToolMate EMI Calculator",
    "url": "https://toolmate-seven.vercel.app/emi-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "description": "Calculates Equated Monthly Installments (EMI) for various types of loans.",
  };

  return (
    <div className="space-y-16">
      {/* Google Structure Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <EMICalculator />

      {/* Finance SEO Content Block */}
      <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000] text-sm space-y-6 text-black tracking-wide">
        
        <h2 className="text-2xl font-bold uppercase">
          What is an EMI?
        </h2>

        <p>
          An <strong>Equated Monthly Installment (EMI)</strong> is a fixed payment amount 
          made by a borrower to a lender at a specified date each calendar month. 
          EMIs are used to pay off both interest and principal each month so that 
          over a specified number of years, the loan is paid off in full.
        </p>

        <h3 className="text-xl font-semibold uppercase">
          How EMI is Calculated
        </h3>

        <p>
          Our calculator uses the standard mathematical formula for EMI calculation:
        </p>

        <div className="bg-[#f1f1f1] border-2 border-black p-4 font-mono text-center">
          $$E = P \times r \times \frac{(1 + r)^n}{((1 + r)^n - 1)}$$
        </div>

        <p className="text-[10px] md:text-xs">
          Where: <br />
          <strong>P</strong> = Principal loan amount <br />
          <strong>r</strong> = Monthly interest rate (Annual rate / 12 / 100) <br />
          <strong>n</strong> = Loan tenure in months
        </p>

        <h3 className="text-xl font-semibold uppercase">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          <div>
            <p className="font-semibold underline uppercase">
              Can I use this for Home and Car loans?
            </p>
            <p>
              Yes! This EMI calculator is universal. You can use it for 
              <strong> Personal Loans, Home Loans, Car Loans</strong>, or any other 
              reducing balance loan.
            </p>
          </div>

          <div>
            <p className="font-semibold underline uppercase">
              Does the interest rate stay the same?
            </p>
            <p>
              This calculator assumes a <strong>Fixed Interest Rate</strong>. If you 
              have a floating rate loan, your EMI may change over time based on 
              bank fluctuations.
            </p>
          </div>
        </div>

        {/* Navigation for SEO Strength */}
        <div className="pt-6 border-t-2 border-black">
          <p className="font-semibold mb-2 uppercase">
            Check Our Other Tools:
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/age-calculator" className="underline hover:bg-black hover:text-white px-1">
              Age Calculator
            </Link>
            <Link href="/bmi-calculator" className="underline hover:bg-black hover:text-white px-1">
              BMI Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
