import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ToolMate",
  description: "Privacy Policy of ToolMate.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000]">

      <h1 className="text-3xl font-black mb-6">
        PRIVACY POLICY
      </h1>

      <p className="mb-4 text-sm font-black text-black tracking-wide">
        ToolMate does not collect personal information from users.
      </p>

      <p className="mb-4 text-sm font-black text-black tracking-wide">
        We may use third-party services such as analytics and advertising
        providers that may collect anonymized usage data.
      </p>

      <p className="text-sm font-black text-black tracking-wide">
        By using this website, you agree to this privacy policy.
      </p>

    </div>
  );
}