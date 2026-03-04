import type { Metadata } from "next";
import Link from "next/link";
import BMICalculator from "./BMICalculator"; // Make sure this says BMI, not EMI

export const metadata: Metadata = {
  title: "BMI Calculator - Calculate Body Mass Index",
  description: "Free BMI calculator to check your Body Mass Index.",
};

export default function Page() {
  return (
    <div className="space-y-16">
      <BMICalculator /> {/* Make sure this says BMI, not EMI */}
      
      {/* Your SEO text below... */}
    </div>
  );
}
