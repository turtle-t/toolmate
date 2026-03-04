"use client";

import { useState } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const endDate = targetDate ? new Date(targetDate) : new Date();

    if (birthDate > endDate) {
      setResult("Invalid date selection.");
      return;
    }

    let years = endDate.getFullYear() - birthDate.getFullYear();
    let months = endDate.getMonth() - birthDate.getMonth();
    let days = endDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        0
      ).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult(`${years} years, ${months} months, ${days} days`);
  };

  return (
    <div className="max-w-xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000]">

      {/* Bold Heading */}
      <h2 className="text-3xl font-black mb-6 text-black tracking-wide">
        AGE CALCULATOR
      </h2>

      {/* Date of Birth */}
      <label className="block text-sm mb-2 font-black text-black tracking-wide">Date of Birth</label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="w-full mb-6 p-3 border-4 border-black bg-white text-black font-black text-sm"
      />

      {/* Target Date */}
      <label className="block text-sm mb-2 font-black text-black tracking-wide">
        Calculate Age On (Optional)
      </label>
      <input
        type="date"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        className="w-full mb-6 p-3 border-4 border-black bg-white text-black font-sans text-sm"
      />

      {/* Button */}
      <button
        onClick={calculateAge}
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
          RESULT: <strong>{result}</strong>
        </p>
      )}
    </div>
  );
}