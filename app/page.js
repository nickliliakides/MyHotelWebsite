import Image from 'next/image';
import Link from 'next/link';
import homeBg from '@/public/home.jpg';

export default function Page() {
  return (
    <main className='mt-24'>
      <Image
        src={homeBg}
        className='object-cover object-top'
        fill
        placeholder='blur'
        alt='MyHotel luxurious lobby'
      />
      <div className='absolute left-0 top-0 w-screen h-screen bg-green-950 opacity-60' />

      <div className='relative z-10 text-center'>
        <h1 className='text-8xl text-primary-50 mb-10 tracking-tight font-normal'>
          Welcome to myHotel.
        </h1>
        <a
          href='/rooms'
          className='bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all'
        >
          Book a room
        </a>
      </div>
    </main>
  );
}
