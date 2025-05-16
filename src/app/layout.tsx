import { ReactNode } from 'react';

import './globals.css';
import type { Metadata } from 'next';
import { Archivo_Black, Overpass } from 'next/font/google';

const headerSans = Overpass({
  variable: '--font-overpass',
  subsets: ['latin'],
});

const second = Archivo_Black({
  variable: '--font-archivoblack',
  weight: '400',
  subsets: ['latin'],
});

//

export const metadata: Metadata = {
  title: 'bankara.ink',
  description: 'A chaotic collection of cute things',
};

export interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={`${headerSans.variable} ${second.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
