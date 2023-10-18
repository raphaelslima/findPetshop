import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Header from '@/components/Header';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Teste - Raphael Lima',
  description: 'Teste técnico para a DTI de Raphael Lima'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
