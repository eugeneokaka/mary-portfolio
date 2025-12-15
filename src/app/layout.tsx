import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maryadhiambo.com"), // change when live

  title: "Mary Adhiambo | Registered Dietician & Nutritionist in Kenya",

  description:
    "Mary Adhiambo is a Registered Dietician and Nutritionist in Kenya with 10+ years of experience in clinical nutrition, patient education, public health programs, and health communication.",

  keywords: [
    "Mary Adhiambo",
    "Nutritionist in Kenya",
    "Registered Dietician Kenya",
    "Clinical Nutritionist Kenya",
    "Public Health Nutrition",
    "Patient Nutrition Education",
    "Health Communication Specialist",
    "Dietician Nairobi",
  ],

  authors: [{ name: "Mary Adhiambo" }],
  creator: "Mary Adhiambo",
  publisher: "Mary Adhiambo",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://mary-portfolio-azure.vercel.app/",
  },

  openGraph: {
    title: "Mary Adhiambo | Registered Dietician & Nutritionist in Kenya",
    description:
      "Simplifying health and nutrition through clinical care, patient education, and public health communication.",
    url: "https://mary-portfolio-azure.vercel.app/",
    siteName: "Mary Adhiambo Nutrition",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mary Adhiambo – Registered Dietician in Kenya",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mary Adhiambo | Nutritionist in Kenya",
    description:
      "Clinical nutrition, patient education, and public health communication in Kenya.",
    images: ["/og-image.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
