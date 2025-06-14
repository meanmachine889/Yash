import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Bharadwaj",
  description: "Full Stack Blockchain Developer",
  metadataBase: new URL("https://yxshcodes.vercel.app"),

  icons: {
    icon: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1749390603/y_qqrdor.svg",
    shortcut: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1749390603/y_qqrdor.svg",
    apple: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1749390603/y_qqrdor.svg",
  },

  openGraph: {
    title: "Yash Bharadwaj",
    description: "Check out my work.",
    url: "https://yxshcodes.vercel.app",
    siteName: "Yash Bharadwaj",
    images: [
      {
        url: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1749394872/huhuhuhuhuhu_ncgf48.png",
        width: 1200,
        height: 630,
        alt: "portfolio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yash Bharadwaj",
    description: "Check out my work.",
    site: "@YashBha95474776",
    images: [
      "https://res.cloudinary.com/dnfv0h10u/image/upload/v1749394872/huhuhuhuhuhu_ncgf48.png",
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased font-[family-name:var(--font-poppins)] dark`}
      >
        {children}
      </body>
    </html>
  );
}