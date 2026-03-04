import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - ToolMate",
  description: "Contact ToolMate for inquiries or feedback.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000]">

      <h1 className="text-3xl font-black mb-6  text-black tracking-wide">
        CONTACT
      </h1>

      <p className="mb-4 text-sm  text-black tracking-wide">
        For inquiries, feedback, or suggestions, please contact us at:
      </p>

      <p className="text-sm font-bold  text-black tracking-wide">
        trilokrana1tr@gmail.com
      </p>

    </div>
  );
}