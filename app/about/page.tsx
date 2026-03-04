import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - ToolMate",
  description: "Learn more about ToolMate and our free online tools.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000]">

      <h1 className="text-3xl font-black mb-6 text-black tracking-wide">
        ABOUT TOOLMATE
      </h1>

      <p className="mb-4 text-sm  font-black text-black tracking-wide">
        ToolMate is a free online platform providing simple,
        fast and accurate calculators for everyday use.
      </p>

      <p className="mb-4 text-sm font-black text-black tracking-wide">
        Our mission is to make essential tools easily accessible
        without requiring any signup or payment.
      </p>

      <p className="text-sm font-black text-black tracking-wide">
        We focus on performance, accuracy and user-friendly design.
      </p>

    </div>
  );
}