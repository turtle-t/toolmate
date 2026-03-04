"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightInMeters = Number(height) / 100;
    const bmi = Number(weight) / (heightInMeters * heightInMeters);

    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    setResult(`${bmi.toFixed(2)} (${category})`);
  };

  return (
    <div className="max-w-xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000]">

      {/* Bold Heading */}
      <h2 className="text-3xl font-black mb-6 text-black tracking-wide">
        BMI CALCULATOR
      </h2>

      {/* Height */}
      <label className="block text-sm mb-2 font-black text-black tracking-wide">Height (cm)</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full mb-6 p-3 border-4 border-black bg-white text-black font-sans text-sm"
      />

      {/* Weight */}
      <label className="block text-sm mb-2 font-black text-black tracking-wide">Weight (kg)</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full mb-6 p-3 border-4 border-black bg-white text-black font-sans text-sm"
      />

      {/* Button */}
      <button
        onClick={calculateBMI}
        className="bg-[#3a86ff] text-white px-6 py-3 border-4 border-black 
                   shadow-[4px_4px_0px_#000] 
                   hover:translate-x-1 hover:translate-y-1 
                   hover:shadow-none transition"
      >
        CALCULATE
      </button>

      {/* Result */}
      {result && (
        <p className="mt-6 text-sm font-sans text-black">
          YOUR BMI: <strong>{result}</strong>
        </p>
      )}
    </div>
  );
}