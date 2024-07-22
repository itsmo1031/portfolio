import type { Metadata } from 'next';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import meta from '@/config/metadata';

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    url: meta.url,
    locale: meta.locale,
    type: 'website',
  },
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL(meta.url)
      : new URL('http://localhost:3000/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="selection:bg-primary selection:text-white">
        {children}
      </body>
      <GoogleTagManager gtmId={meta.gtag} />
    </html>
  );
}
