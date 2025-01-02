import type { Metadata } from "next";
import { Bagel_Fat_One, Montserrat } from "next/font/google";

import "./globals.css";

const BagelFatOne =  Bagel_Fat_One({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-bagel-fat-one',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  variable: '--font-montserrat',
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
        className={`${BagelFatOne.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
