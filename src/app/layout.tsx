import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdPulse Digital | AI-Powered Digital Marketing & Growth Agency",
  description:
    "AdPulse Digital is a premier performance marketing, SEO, paid media, and digital growth agency helping enterprise brands and ambitious companies scale at speed through data-driven campaigns and magnetic creative.",
  keywords: [
    "Digital Marketing Agency",
    "Performance Marketing",
    "SEO & Generative Engine Optimization",
    "Paid Advertising & ROAS Optimization",
    "Social Media Marketing",
    "Conversion Rate Optimization",
    "AI Marketing Automation",
    "Content Marketing & Copywriting",
    "AdPulse Digital",
  ],
  authors: [{ name: "AdPulse Digital" }],
  openGraph: {
    title: "AdPulse Digital | AI-Powered Digital Marketing & Growth Agency",
    description:
      "Enterprise digital marketing, SEO dominance, paid media, and high-impact full-funnel growth solutions.",
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
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans antialiased text-[#242321] bg-white selection:bg-[#FD6E12] selection:text-white min-h-screen flex flex-col"
      >
        {children}
      </body>
    </html>
  );
}
