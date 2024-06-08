import React from 'react';
import { getBookedDatesByRoomId, getSettings } from '../_lib/data-service';
import { auth } from '../_lib/auth';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';
import LoginMessage from './LoginMessage';

const Reservation = async ({ room }) => {
  const session = await auth();

  // eslint-disable-next-line no-undef
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByRoomId(room.id),
  ]);

  return (
    <div className='grid grid-cols-2 border border-primary-800 min-h-[400px]'>
      <DateSelector settings={settings} bookedDates={bookedDates} room={room} />
      {session?.user ? (
        <ReservationForm room={room} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
};

export default Reservation;
