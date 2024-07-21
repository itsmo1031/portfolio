import type { Metadata } from 'next';
import { Pretendard } from './fonts';
import './globals.css';
import cn from '@/utils/cn';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          Pretendard.className,
          'selection:bg-primary selection:text-white',
        )}
      >
        {children}
      </body>
      <GoogleTagManager gtmId={meta.gtag} />
    </html>
  );
}
