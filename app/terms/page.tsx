import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - ToolMate",
  description: "Terms and conditions of ToolMate.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000]">

      <h1 className="text-3xl font-black mb-6 font-black text-black tracking-wide">
        TERMS & CONDITIONS
      </h1>

      <p className="mb-4 text-sm font-black text-black tracking-wide">
        The tools provided on ToolMate are for informational purposes only.
      </p>

      <p className="mb-4 text-sm font-black text-black tracking-wide">
        We do not guarantee complete accuracy of results.
      </p>

      <p className="text-sm font-black text-black tracking-wide ">
        By using this website, you agree to these terms.
      </p>

    </div>
  );
}