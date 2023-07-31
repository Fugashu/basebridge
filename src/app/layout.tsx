import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BaseBridge',
  description:
    'Open Source, feeless BaseBridge GUI to migrate ETH from Ethereum Mainnet to Base Mainnet.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
