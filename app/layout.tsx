import type { Metadata } from 'next';
import './globals.css';
import { cormorant, inter } from './fonts';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: 'The Birch House by Everstay',
  description: 'White Mountains, NH',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={` ${inter.className} ${cormorant} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
