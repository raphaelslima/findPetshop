import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Header from '@/components/Header';
import { DogShowerProvider } from '@/context/dogShower';

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
    <html lang="pt-br">
      <body className={roboto.className}>
        <DogShowerProvider>
          <Header />
          {children}
        </DogShowerProvider>
      </body>
    </html>
  );
}
