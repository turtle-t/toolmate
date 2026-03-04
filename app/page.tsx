import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ToolMate - Pixel Tools",
  description: "Retro styled online calculators and tools.",
};

export default function Home() {
  return (
    <div className="space-y-24">

      {/* Hero */}
      <section className="text-center space-y-8 py-20">
        <h1 className="text-4xl md:text-6xl leading-relaxed">
          TOOLMATE
        </h1>

        <p className="text-sm md:text-base text-gray-700">
          {"< Free Retro Online Tools >"}
        </p>

        <Link
          href="/age-calculator"
          className="inline-block bg-[#3a86ff] text-white px-8 py-3 
                     border-4 border-black 
                     shadow-[6px_6px_0px_#000] 
                     hover:translate-x-1 hover:translate-y-1 
                     hover:shadow-none transition"
        >
          USE AGE CALCULATOR
        </Link>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 font-black text-black tracking-wide">

        <ToolCard
          title="AGE CALCULATOR"
          desc="Calculate your exact age instantly."
          link="/age-calculator"
        />

        <ToolCard
          title="BMI CALCULATOR "
          desc="Check your body mass index."
          link="/bmi-calculator"
        />

        <ToolCard
          title="EMI CALCULATOR"
          desc="Calculate loan EMI easily."
          link="/emi-calculator"
        />

      </section>

    </div>
  );
}

function ToolCard({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div className="bg-white border-4 border-black p-8 
                    shadow-[8px_8px_0px_#000] 
                    hover:translate-x-1 hover:translate-y-1 
                    hover:shadow-none transition">

      <h2 className="text-lg font-bold mb-4">{title}</h2>

      <p className="text-sm text-gray-600 mb-6">{desc}</p>

      <Link
        href={link}
        className="inline-block bg-[#ff006e] text-white px-5 py-2 
                   border-4 border-black 
                   shadow-[4px_4px_0px_#000] 
                   hover:translate-x-1 hover:translate-y-1 
                   hover:shadow-none transition"
      >
        OPEN TOOL
      </Link>
    </div>
  );
}