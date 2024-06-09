import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-4 z-10 '>
      <Image
        src={logo}
        height='64'
        width='64'
        quality={90}
        alt='MyHotel logo'
        className='rounded-full'
      />
      <span className='text-xl font-semibold text-primary-100'>MyHotel</span>
    </Link>
  );
};

export default Logo;
