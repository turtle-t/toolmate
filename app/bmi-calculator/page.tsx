import type { Metadata } from "next";
import Link from "next/link";
import BMICalculator from "./BMICalculator"; // CORRECTED THIS LINE

export const metadata: Metadata = {
  title: "BMI Calculator - Calculate Body Mass Index",
  description: "Free BMI calculator to check your Body Mass Index based on height and weight.",
};

export default function Page() {
  return (
    <div className="space-y-16">
      <BMICalculator /> {/* CORRECTED THIS LINE */}

      <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000] text-sm space-y-6 text-black tracking-wide">
        <h2 className="text-2xl font-bold uppercase">What is BMI?</h2>
        <p>
          Body Mass Index (BMI) is a measurement that compares your weight
          to your height to determine if you are in a healthy range.
        </p>
        {/* ... the rest of your SEO content ... */}
      </div>
    </div>
  );
}
