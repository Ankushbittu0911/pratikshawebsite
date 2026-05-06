import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratiksha Technologies | Intelligent MCC Panels & Power Distribution",
  description:
    "Pratiksha Technologies engineers precision-built MCC panels and industrial power distribution systems. Industrial-grade components, optimized cable management, and maximum uptime — built for reliability.",
  keywords: [
    "MCC panels",
    "motor control center",
    "electrical panels",
    "power distribution",
    "industrial panels",
    "Pratiksha Technologies",
    "panel manufacturer",
  ],
  openGraph: {
    title: "Pratiksha Technologies | Intelligent MCC Panels",
    description:
      "Precision-built MCC panels engineered for industrial reliability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
