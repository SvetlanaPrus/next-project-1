import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notosanskr = Noto_Sans_KR({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Курсы по Photoshop',
  description: 'Профессия дизайнер от 0 до PRO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={notosanskr.className}>{children}</body>
    </html>
  );
}
