import { Suspense } from 'react';
import Filters from '../_components/Filters';
import ReservationReminder from '../_components/ReservationReminder';
import RoomList from '../_components/RoomList';
import Spinner from '../_components/Spinner';

// revalidate in seconds - only for static rendering
// export const revalidate = 3600;
export const metadata = {
  title: 'Rooms',
};

const Page = ({ searchParams }) => {
  const filter = searchParams?.capacity ?? 'all';

  return (
    <div>
      <h1 className='text-4xl mb-5 text-accent-400 font-medium'>
        Our Luxury Rooms and Studios
      </h1>
      <p className='text-primary-200 text-lg mb-10'>
        Cozy modern and luxurious rooms and condominiums, located right in the
        heart of the cosmopolis of city of London. Enjoy you vacations in your
        own little home away from home. The perfect location for access to all
        great places and sight-seeings of amazing London. Welcome to MyHotel.
      </p>
      <div className='flex justify-end mb-8'>
        <Filters />
      </div>

      <Suspense key={filter} fallback={<Spinner />}>
        <RoomList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
};

export default Page;
