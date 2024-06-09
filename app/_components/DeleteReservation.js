'use client';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';

const DeleteReservation = ({ bookingId, onDelete }) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this reservation?')) {
      startTransition(() => onDelete(bookingId));
    }
  };

  return (
    <button
      className='group flex items-center gap-2 uppercase text-xs font-bold flex-grow px-3 hover:bg-red-600 transition-colors'
      onClick={handleDelete}
      title='Delete Reservation'
    >
      {isPending ? (
        <span className='mx-auto'>
          <SpinnerMini />
        </span>
      ) : (
        <>
          <TrashIcon className='h-5 w-5 flex-1 text-primary-500 group-hover:text-primary-100 transition-colors' />
        </>
      )}
    </button>
  );
};

export default DeleteReservation;
