import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Fruit Travel',
    template: '%s | Fruit Travel',
  },
  description: 'Welcome to Fruit Travel',
  authors: [{ name: 'HyoungMin', url: 'https://github.com/hyoungqu23' }],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
