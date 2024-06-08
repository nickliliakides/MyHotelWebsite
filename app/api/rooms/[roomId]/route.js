import { getBookedDatesByRoomId, getRoom } from '@/app/_lib/data-service';

export const GET = async (req, { params }) => {
  const { roomId } = params;

  try {
    // eslint-disable-next-line no-undef
    const [room, bookedDates] = await Promise.all([
      getRoom(roomId),
      getBookedDatesByRoomId(roomId),
    ]);
    return Response.json({ room, bookedDates });
  } catch {
    return Response.json({ message: 'Room not found' });
  }
};
