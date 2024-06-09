import { Josefin_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '@/app/_styles/globals.css';
import Header from './_components/Header';
import { ReservationProvider } from './_context/ReservationContext';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: 'MyHotel - %s',
    default: 'MyHotel',
  },
  description: 'Luxurious and smart hotel located in the heart of London city.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className='flex-1 px-8 py-12 grid mt-16'>
          <main className='max-w-7xl mx-auto w-full'>
            <ReservationProvider>{children}</ReservationProvider>
          </main>
          <Analytics />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
