'use server';

import { isWithinInterval } from 'date-fns';
import { signIn, signOut, auth } from './auth';
import {
  createBooking,
  deleteBooking,
  getBookedDatesByRoomId,
  getBookings,
  updateBooking,
  updateGuest,
} from './data-service';

const isAlreadyBooked = (range, datesArr) => {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
};

export const signInAction = async () => {
  await signIn('google', {
    redirectTo: '/account',
  });
};

export const signOutAction = async () => {
  await signOut({
    redirectTo: '/',
  });
};

export const updateGuestProfile = async (formData) => {
  const session = await auth();
  if (!session) throw new Error('You must be logged in to update profile');
  const nationalId = formData.get('nationalId');
  const [nationality, countryFlag] = formData.get('nationality').split('%');
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId))
    throw new Error('Please provide a national ID of 6-12 alphanumeric digits');

  const updateData = { nationality, countryFlag, nationalId };
  await updateGuest(session.user.guestId, updateData);
};

export const deleteReservation = async (bookingId) => {
  const session = await auth();
  if (!session) throw new Error('You must be logged in to delete reservation');
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((b) => b.id);
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error('You are not allowed to delete this booking');
  }
  await deleteBooking(bookingId);
};

export const updateReservation = async (bookingData) => {
  const session = await auth();
  if (!session) throw new Error('You must be logged in to delete reservation');
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((b) => b.id);
  const bookingId = Number(bookingData.get('bookingId'));
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error('You are not allowed to update this booking');
  }
  const updateData = {
    numGuests: Number(bookingData.get('numGuests')),
    comments: bookingData.get('comments').slice(0, 1000).trim(),
  };

  await updateBooking(bookingId, updateData);
};

export const createReservation = async (bookingData, formData) => {
  const session = await auth();
  if (!session) throw new Error('You must be logged in to create reservation');
  const bookedDates = await getBookedDatesByRoomId(bookingData.roomId);
  const range = {
    from: new Date(bookingData.startDate),
    to: new Date(bookingData.endDate),
  };
  if (isAlreadyBooked(range, bookedDates))
    throw new Error('Reservation cannot be done, please contact the hotel');

  const reservation = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get('numGuests')),
    comments: formData.get('comments').slice(0, 1000).trim(),
    extrasCharge: 0,
    totalPrice: bookingData.roomCharge,
    isPaid: false,
    hasBreakfast: false,
    status: 'unconfirmed',
  };

  await createBooking(reservation);
};
