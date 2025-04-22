import type { Metadata } from "next";
import { aileron } from './fonts'
import "./globals.css";
import { Navbar } from "./components/Layout/Navbar";

export const metadata: Metadata = {
  title: "KAMINEVOX",
  description: "KAMINEVOX official website",
  icons: {
    icon: '/public/kaminevox.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={aileron.variable}>
      <body className="font-aileron bg-black text-white overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}