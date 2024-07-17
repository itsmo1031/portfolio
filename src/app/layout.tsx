import type { Metadata } from 'next';
import { Pretendard } from './fonts';
import './globals.css';
import cn from '@/utils/cn';

export const metadata: Metadata = {
  title: '정필모 포트폴리오',
  description: '개발자 정필모 포트폴리오입니다.',
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
    </html>
  );
}
