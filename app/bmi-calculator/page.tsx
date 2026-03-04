import type { Metadata } from "next";
import Link from "next/link";
import BMICalculator from "./BMICalculator";

export const metadata: Metadata = {
  title: "BMI Calculator - Calculate Body Mass Index",
  description:
    "Free BMI calculator to check your Body Mass Index based on height and weight.",
};

export default function Page() {
  return (
    <div className="space-y-16">

      <BMICalculator />

      <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000] text-sm space-y-6 text-black tracking-wide">

        <h2 className="text-2xl font-bold">
          What is BMI?
        </h2>

        <p>
          Body Mass Index (BMI) is a measurement that compares your weight
          to your height to determine if you are underweight, normal,
          overweight, or obese.
        </p>

        <h3 className="text-xl font-semibold">
          BMI Formula
        </h3>

        <p>
          BMI = Weight (kg) / (Height (m) × Height (m))
        </p>

        <h3 className="text-xl font-semibold">
          BMI Categories
        </h3>

        <ul className="list-disc pl-6">
          <li>Underweight: Below 18.5</li>
          <li>Normal: 18.5 – 24.9</li>
          <li>Overweight: 25 – 29.9</li>
          <li>Obese: 30 and above</li>
        </ul>

        <div className="pt-6 border-t-2 border-black">
          <p className="font-semibold mb-2">
            Related Tools:
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/age-calculator" className="underline">
              Age Calculator
            </Link>
            <Link href="/emi-calculator" className="underline">
              EMI Calculator
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}