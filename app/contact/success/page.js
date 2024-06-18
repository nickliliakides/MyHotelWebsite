'use client';

import { useRouter } from 'next/navigation';

const Success = () => {
  const router = useRouter();

  return (
    <main className='flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Success!</h1>
      <p className='text-lg'>Your message has been sent to MyHotel.</p>

      <button
        className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
        onClick={() => router.push('/')}
      >
        Go back to homepage
      </button>
    </main>
  );
};

export default Success;
