// Implementación para layout.tsx o RootLayout.tsx
import './globals.css';
import { Metadata } from 'next';
import { Navbar } from './components/Layout/Navbar';
import { aileron } from './fonts';

export const metadata: Metadata = {
  title: "KAMINEVOX",
  description: "KAMINEVOX official website",
  icons: {
    icon: [
      {
        url: '/kaminevox.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        url: '/kaminevox.ico',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/kaminevox.ico',
      sizes: '180x180',
      type: 'image/png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={aileron.variable}>
      <head>
        <link rel="icon" href="/kaminevox.ico" sizes="any" />
        <link rel="icon" href="/kaminevox.ico" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/kaminevox.ico" />
      </head>
      <body className={`font-aileron bg-black text-white overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}