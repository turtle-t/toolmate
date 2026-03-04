import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToolMate - Pixel Tools",
  description:
    "Retro styled online calculators and tools including Age Calculator, BMI and EMI tools.",
  metadataBase: new URL('https://toolmate-seven.vercel.app'),
  alternates: {
    canonical: '/',
  },
  verification: {
    // I extracted the ID from the filename you provided: google7cdedb0e53ced8b7
    google: "7cdedb0e53ced8b7", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pixelFont.className} bg-[#fefae0] text-black`}
      >
        <div className="min-h-screen flex flex-col">

          {/* Navbar */}
          <header className="border-b-4 border-black">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <Link href="/" className="text-lg">
                TOOLMATE
              </Link>

              <nav className="flex flex-wrap gap-6 text-xs md:text-sm">
                <Link href="/" className="hover:underline">
                  HOME
                </Link>
                <Link href="/age-calculator" className="hover:underline">
                  AGE
                </Link>
                <Link href="#" className="hover:underline">
                  BMI
                </Link>
                <Link href="#" className="hover:underline">
                  EMI
                </Link>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-16">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t-4 border-black mt-20">
            <div className="max-w-6xl mx-auto px-6 py-8 text-center text-xs md:text-sm space-y-4">
              <p>© {new Date().getFullYear()} TOOLMATE</p>

              <div className="flex justify-center gap-6 flex-wrap">
                <Link href="/about" className="hover:underline">
                  ABOUT
                </Link>
                <Link href="/privacy" className="hover:underline">
                  PRIVACY
                </Link>
                <Link href="/terms" className="hover:underline">
                  TERMS
                </Link>
                <Link href="/contact" className="hover:underline">
                  CONTACT
                </Link>
              </div>

              <p className="text-[10px] md:text-xs">
                100% FREE • NO SIGNUP • PIXEL POWERED
              </p>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
