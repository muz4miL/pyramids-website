import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pyramids Consulting Engineers & Architects",
  description:
    "A dynamic, fast-growing and multidimensional organization providing Engineering & Architectural Services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="video"
          href="/heroPreview.mp4"
          type="video/mp4"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
