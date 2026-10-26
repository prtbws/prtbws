import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prtbws.github.io"),
  title: "Partha Biswas | AI & Data Science · Competitive Programmer · Systems & Quant Builder",
  description:
    "Official portfolio of Partha Biswas, an Artificial Intelligence and Data Science undergraduate at IIITDM Kurnool. Explore projects in algorithmic trading, triple-redundant IoT systems, low-level C programming, and competitive problem-solving achievements.",
  keywords: [
    "Partha Biswas",
    "prtbws",
    "IIITDM Kurnool",
    "Competitive Programming",
    "Data Science",
    "Artificial Intelligence",
    "Quantitative Finance",
    "Algorithmic Trading",
    "SyncSwitch",
    "Codeforces Pupil",
  ],
  authors: [{ name: "Partha Biswas", url: "https://github.com/prtbws" }],
  creator: "Partha Biswas",
  openGraph: {
    title: "Partha Biswas | AI & Data Science · Competitive Programmer",
    description:
      "I build intelligent systems and engineer ideas into reality. Undergraduate at IIITDM Kurnool exploring AI, algorithmic trading, and high-performance systems.",
    url: "https://github.com/prtbws",
    siteName: "Partha Biswas Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Partha Biswas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partha Biswas | Portfolio",
    description: "AI & Data Science undergraduate at IIITDM Kurnool · Quant & Systems Builder",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#07070a" />
      </head>
      <body className="bg-[#07070a] text-slate-100 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
