import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AdPulse Digital | Powering Digital. Accelerating Growth.",
  description:
    "AdPulse Digital is a premier IT software, digital transformation, and growth marketing company helping enterprise brands scale at speed through intelligent technology and creative performance.",
  keywords: [
    "IT Software Company",
    "Digital Marketing",
    "Enterprise Digital Transformation",
    "SEO",
    "Performance Marketing",
    "Web Application Development",
    "AI Marketing Automation",
    "AdPulse Digital",
  ],
  authors: [{ name: "AdPulse Digital" }],
  openGraph: {
    title: "AdPulse Digital | Powering Digital. Accelerating Growth.",
    description:
      "Enterprise digital transformation, technology consulting, and high-impact digital marketing solutions.",
    type: "website",
    locale: "en_US",
    siteName: "AdPulse Digital",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-[#242321] bg-white selection:bg-[#ED1B36] selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
