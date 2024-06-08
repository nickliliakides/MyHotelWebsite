import React from 'react';
import RoomCard from './RoomCard';
import { getRooms } from '../_lib/data-service';

const RoomList = async ({ filter }) => {
  const rooms = await getRooms();
  let filteredRooms;
  if (filter === 'all') filteredRooms = rooms;
  if (filter === 'sm') filteredRooms = rooms.filter((r) => r.maxCapacity < 4);
  if (filter === 'md')
    filteredRooms = rooms.filter((r) => r.maxCapacity > 3 && r.maxCapacity < 8);
  if (filter === 'lg') filteredRooms = rooms.filter((r) => r.maxCapacity > 7);

  return filteredRooms.length > 0 ? (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {filteredRooms.map((room) => (
        <RoomCard room={room} key={room.id} />
      ))}
    </div>
  ) : null;
};

export default RoomList;
