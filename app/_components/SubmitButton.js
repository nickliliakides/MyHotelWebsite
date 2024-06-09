'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import SpinnerMini from './SpinnerMini';

const SubmitButton = ({ label, isDisabled }) => {
  const { pending } = useFormStatus();

  return (
    <button
      className='bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 rounded-md'
      disabled={pending || isDisabled}
    >
      <div className='flex items-center gap-4'>
        {pending && <SpinnerMini />}
        {pending ? 'Submitting...' : label}
      </div>
    </button>
  );
};

export default SubmitButton;
