import type { Metadata } from "next";
import React from "react";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGroteskSans = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capsule",
  description: "A modern landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGroteskSans.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
