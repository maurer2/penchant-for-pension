import type { Metadata } from 'next';
import './globals.css';

import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Penchant for pension',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
