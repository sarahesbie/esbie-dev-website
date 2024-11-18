import { Azeret_Mono, Figtree } from "next/font/google";

export const azeretMono = Azeret_Mono({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-azaret-mono",
  subsets: ["latin"],
});

export const figtree = Figtree({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-figtree",
  subsets: ["latin"],
});
