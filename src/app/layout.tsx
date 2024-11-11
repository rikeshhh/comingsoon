import type { Metadata } from "next";
import { Bagel_Fat_One } from "next/font/google";

import "./globals.css";

const BagelFatOne =  Bagel_Fat_One({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-bagel-fat-one',
});

export const metadata: Metadata = {
  title: "Sweven Visuals | Coming Soon",
  description: "Coming soon!The website is currently under construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BagelFatOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
