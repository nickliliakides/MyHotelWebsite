'use client';
import React from 'react';
import { sendNewContact } from '../_lib/actions';
import SubmitButton from './SubmitButton';

const ContactForm = () => {
  return (
    <form
      action={sendNewContact}
      className='bg-primary-900 py-10 px-14 text-lg space-y-6'
      data-cy='contact-form'
    >
      <div className='space-y-2'>
        <label>Full name</label>
        <input
          required
          name='fullName'
          type='text'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          required
          name='email'
          type='email'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Subject</label>
        <input
          required
          name='subject'
          type='text'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Subject</label>
        <textarea
          // disabled
          required
          rows='3'
          name='message'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='flex justify-end items-center gap-6'>
        <SubmitButton label='Submit form' />
      </div>
    </form>
  );
};

export default ContactForm;
