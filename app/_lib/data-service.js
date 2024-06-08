import { eachDayOfInterval } from 'date-fns';
import { supabase } from './supabase';
import { notFound, redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
/////////////
// GET

export async function getRoom(id) {
  const { data, error } = await supabase
    .from('Rooms')
    .select('*')
    .eq('id', id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getRoomPrice(id) {
  const { data, error } = await supabase
    .from('Rooms')
    .select('price, discount')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getRooms = async function () {
  const { data, error } = await supabase
    .from('Rooms')
    .select('id, name, maxCapacity, price, discount, image')
    .order('name');

  if (error) {
    console.error(error);
    throw new Error('Rooms could not be loaded');
  }

  return data;
};

// Guests are uniquely identified by their email address
export async function getGuest(email) {
  const { data, error } = await supabase
    .from('Guests')
    .select('*')
    .eq('email', email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function getBooking(id) {
  const { data, error, count } = await supabase
    .from('Bookings')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not get loaded');
  }

  return data;
}

export async function getBookings(guestId) {
  const { data, error, count } = await supabase
    .from('Bookings')
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, roomId, Rooms(name, image)'
    )
    .eq('guestId', guestId)
    .order('startDate');

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  return data;
}

export async function getBookedDatesByRoomId(roomId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase
    .from('Bookings')
    .select('*')
    .eq('roomId', roomId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getSettings() {
  const { data, error } = await supabase.from('Settings').select('*').single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch(
      'https://countriesnow.space/api/v0.1/countries/flag/images'
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error('Could not fetch countries');
  }
}

/////////////
// CREATE

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from('Guests').insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error('Guest could not be created');
  }

  return data;
}

export async function createBooking(newBooking) {
  console.log('🚀 ~ createBooking ~ newBooking:', newBooking);
  const { data, error } = await supabase.from('Bookings').insert([newBooking]);
  // So that the newly created object gets returned!
  // .select()
  // .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be created');
  }
  revalidatePath(`/rooms/${newBooking.roomId}`);
  redirect('/rooms/thank');
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(id, updatedFields) {
  const { data, error } = await supabase
    .from('Guests')
    .update(updatedFields)
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }
  revalidatePath('/account/profile');
}

export async function updateBooking(id, updatedFields) {
  const { data, error } = await supabase
    .from('Bookings')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
  revalidatePath('/account/reservations');
  revalidatePath(`/account/reservations/edit/${id}`);
  redirect('/account/reservations');
}

/////////////
// DELETE

export async function deleteBooking(id) {
  const { data, error } = await supabase.from('Bookings').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  revalidatePath('/account/reservations');
}
