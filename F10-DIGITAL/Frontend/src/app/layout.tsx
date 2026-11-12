import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "F10 DIGITAL | Building Digital Growth. Enabling Performance Transformation.",
  description:
    "Your Digital Growth & Performance Transformation Partner. Integrating Enterprise Technology, Growth Marketing, AI & Automation, and Cinematic Media Production across UAE and India.",
  keywords: [
    "F10 Digital",
    "Digital Transformation Dubai",
    "Enterprise Technology UAE",
    "AI Automation Dubai",
    "Growth Marketing Middle East",
    "Corporate Films Production",
  ],
  authors: [{ name: "F10 Digital" }],
  openGraph: {
    title: "F10 DIGITAL | Digital Transformation & Performance Growth Agency",
    description: "Building Digital Growth. Enabling Performance Transformation.",
    url: "https://www.f10.digital",
    siteName: "F10 DIGITAL",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-[#FFFFFF] text-[#0F172A] antialiased selection:bg-[#2554D7] selection:text-white min-h-screen flex flex-col font-body">
        {/* Scroll-Responsive Luxury Progress Bar */}
        <ScrollProgressBar />
        {/* Global Navigation */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-grow">{children}</main>
        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
