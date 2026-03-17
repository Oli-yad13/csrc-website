import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CSRC - Civil Society Resource Center",
  description: "Empowering civil society organizations through resource sharing and collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
