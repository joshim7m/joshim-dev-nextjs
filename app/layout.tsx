import type { Metadata } from "next";
import { Inter, Playwrite_RO } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playWrite = Playwrite_RO({
  variable: "--font-playwrite_RO",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshim dev",
  description: "A Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        <div className="w-full h-screen flex flex-col">
          <Header />
          <div className="main grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
