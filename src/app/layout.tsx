import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Toaster } from "sonner";
import { Footer } from "@/components/common/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import UmamiAnalytics from "@/components/analytics/UmamiAnalytics";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL || "https://samyetibetanmedical.com",
  ),
  alternates: {
    canonical: "https://samyetibetanmedical.com",
  },
  title: {
    default: "Samye Tibetan Medical Treatment Centre",
    template: "%s | Samye Medical",
  },
  description:
    "Samye Tibetan Medical Treatment Centers utilize the profound expertise of ancient Tibetan healing traditions to address comprehensive health challenges and human wellness.",

  openGraph: {
    type: "website",
    url: "https://samyetibetanmedical.com/",
    title: "Samye Tibetan Medical Treatment Centre",
    description:
      "Samye Tibetan Medical Treatment Centers utilize the profound expertise of ancient Tibetan healing traditions to address comprehensive health challenges and human wellness.",
    siteName: "Samye Tibetan Medical Treatment Centre",
    images: [
      {
        url: "https://samyetibetanmedical.com/meta/opengraph-img.png",
        width: 1200,
        height: 630,
        alt: "Samye Tibetan Medical's Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Samye Tibetan Medical Treatment Centre",
    description:
      "Samye Tibetan Medical Treatment Centers utilize the profound expertise of ancient Tibetan healing traditions to address comprehensive health challenges and human wellness.",
    images: ["https://samyetibetanmedical.com/meta/opengraph-img.png"],
    creator: "@_igmoni",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />

        <main>{children}</main>
        <Footer />
        <Analytics />
        <UmamiAnalytics />
        <SpeedInsights />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
