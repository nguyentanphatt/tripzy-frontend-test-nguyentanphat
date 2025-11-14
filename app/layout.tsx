import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import './globals.css';
import Header from "@/component/Header";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripzy-Frontend-Test-Nguyen-Tan-Phat",
  description: "Tripzy-Frontend-Test-Nguyen-Tan-Phat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased font-nunito-sans`}
      >
        <div className="h-screen w-full relative">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
