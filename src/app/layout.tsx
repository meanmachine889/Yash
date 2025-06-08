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
  description: "Full Stack Blockahain Developer",
  metadataBase: new URL("https://yourdomain.com"), // important for relative image URLs

  openGraph: {
    title: "Yash Bharadwaj",
    description: "Check out my work.",
    url: "https://yourdomain.com",
    siteName: "Yash Bharadwaj",
    images: [
      {
        url: "/preview.jpg", // will be resolved against metadataBase
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
    images: ["/preview.jpg"], // also resolved against metadataBase
    creator: "@yourhandle", // optional
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
