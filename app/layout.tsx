import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Decentralized Rights Protocol - DRP',
  description: 'Empowering human rights, sustainability, and AI transparency through blockchain technology.',
  keywords: ['blockchain', 'human rights', 'DRP', 'decentralized', 'AI', 'verification', 'NVIDIA'],
  authors: [{ name: 'Decentralized Rights Protocol' }],
  openGraph: {
    title: 'Decentralized Rights Protocol',
    description: 'Empowering human rights through blockchain technology',
    url: 'https://app.decentralizedrights.com',
    siteName: 'DRP',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decentralized Rights Protocol',
    description: 'Empowering human rights through blockchain technology',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}