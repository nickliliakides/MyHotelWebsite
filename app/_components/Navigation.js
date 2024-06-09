/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { auth } from '../_lib/auth';

const Navigation = async () => {
  const session = await auth();

  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/rooms'
            className='hover:text-accent-400 transition-colors'
          >
            Rooms
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='hover:text-accent-400 transition-colors'
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href='/account'
              className='hover:text-accent-400 transition-colors flex items-center gap-3'
            >
              <img
                src={session?.user?.image}
                alt={`user-${session.user.name}-avatar`}
                className='h-8 rounded-full'
                referrerPolicy='no-referrer'
              />
              <span>{session.user.name}</span>
            </Link>
          ) : (
            <Link
              href='/account'
              className='hover:text-accent-400 transition-colors'
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
