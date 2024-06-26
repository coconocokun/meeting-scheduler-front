import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ziqzi meeting scheduler",
  description: "Find the best meeting/lecture time together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "How to use",
      link: "/",
    },
    {
      name: "Credits",
      link: "/",
    },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
