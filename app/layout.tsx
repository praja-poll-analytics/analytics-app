import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const primaryFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Praja Poll Analytics',
  description: 'Poll analytics & predictions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" type="image/svg" />
      </head>
      <body className={`${primaryFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
