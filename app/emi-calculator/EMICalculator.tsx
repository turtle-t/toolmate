"use client";

import { useState } from "react";

export default function EMICalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenureYears, setTenureYears] = useState("");
  const [emi, setEmi] = useState<string | null>(null);

  const calculateEMI = () => {
    if (!principal || !rate || !tenureYears) return;

    const P = Number(principal);
    const annualRate = Number(rate);
    const years = Number(tenureYears);

    const n = years * 12; // Convert years to months
    const r = annualRate / 12 / 100;

    const emiValue =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="max-w-xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000]">

      <h2 className="text-3xl font-black mb-6 text-black tracking-wide">
        EMI CALCULATOR
      </h2>

      {/* Loan Amount */}
      <label className="block text-sm mb-2 text-black font-black text-black tracking-wide">
        Loan Amount (₹)
      </label>
      <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        className="w-full mb-6 p-3 border-4 border-black bg-white text-black font-sans text-sm"
      />

      {/* Interest Rate */}
      <label className="block text-sm mb-2  text-black font-black text-black tracking-wide">
        Annual Interest Rate (%)
      </label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="w-full mb-6 p-3 border-4 border-black bg-white text-black font-sans text-sm"
      />

      {/* Tenure in Years */}
      <label className="block text-sm mb-2  text-black font-black text-black tracking-wide">
        Loan Tenure (Years)
      </label>
      <input
        type="number"
        value={tenureYears}
        onChange={(e) => setTenureYears(e.target.value)}
        className="w-full mb-6 p-3 border-4 border-black bg-white text-black font-sans text-sm"
      />

      {/* Button */}
      <button
        onClick={calculateEMI}
        className="bg-[#3a86ff] text-white px-6 py-3 border-4 border-black 
                   shadow-[4px_4px_0px_#000] 
                   hover:translate-x-1 hover:translate-y-1 
                   hover:shadow-none transition"
      >
        CALCULATE EMI
      </button>

      {/* Result */}
      {emi && (
        <div className="mt-6 p-4 border-2 border-black bg-[#f1f1f1]">
          <p className="text-sm font-semibold text-black">
            Monthly EMI:
          </p>
          <p className="text-xl mt-2 font-bold text-black">
            ₹ {emi}
          </p>
        </div>
      )}
    </div>
  );
}