import type { Metadata } from "next";
import "./globals.scss";
import { azeretMono, figtree } from "../libs/fonts";
import "../libs/fontawesome";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Sarah Brown | Full Stack Web Developer",
  description: "Sarah Brown - full stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${azeretMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
