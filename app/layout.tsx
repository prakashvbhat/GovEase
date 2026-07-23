import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'GovEase | Government Services, Simplified with AI',
  description:
    'GovEase helps citizens understand, fill, submit, and track government forms with AI-powered guidance, OCR, voice, and regional-language support.',
  openGraph: {
    title: 'GovEase | Government Services, Simplified with AI',
    description: 'A premium AI assistant for government forms, documents, eligibility, offices, and application tracking.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-ink font-sans text-white antialiased`}>{children}</body>
    </html>
  );
}
