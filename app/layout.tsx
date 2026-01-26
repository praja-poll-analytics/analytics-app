import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';

const primaryFont = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
});

const siteUrl = 'https://www.prajapoll.com';
const siteName = 'Praja Poll Analytics';
const siteDescription =
  "India's trusted partner in political research and opinion polling. Get accurate election predictions, constituency-wise analysis, and comprehensive survey reports.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'election polls',
    'political surveys',
    'election predictions',
    'India elections',
    'poll analytics',
    'constituency analysis',
    'Bihar elections',
    'Uttar Pradesh elections',
    'state elections',
    'Lok Sabha',
    'Vidhan Sabha',
    'municipality elections',
  ],
  authors: [{ name: 'Praja Poll Analytics' }],
  creator: 'Praja Poll Analytics',
  publisher: 'Praja Poll Analytics',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: '/assets/logo.png',
        width: 588,
        height: 580,
        alt: 'Praja Poll Analytics - Election Predictions & Political Research',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: ['/assets/logo.png'],
    creator: '@prajapoll',
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '48x48' },
      { url: '/assets/logo.png', type: 'image/png', sizes: '588x580' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
