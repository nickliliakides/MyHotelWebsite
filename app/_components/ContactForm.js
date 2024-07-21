'use client';
import React from 'react';
import { sendNewContact } from '../_lib/actions';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import TextArea from './TextArea';

const ContactForm = () => {
  return (
    <form
      action={sendNewContact}
      className='bg-primary-900 py-10 px-14 text-lg space-y-6'
      data-cy='contact-form'
    >
      <TextInput label='Full name' name='fullName' type='text' />
      <TextInput label='Email address' name='email' type='email' />
      <TextInput label='Subject' name='subject' type='text' />

      <TextArea label='Message' rows='3' name='message' />

      <div className='flex justify-end items-center gap-6'>
        <SubmitButton label='Submit form' />
      </div>
    </form>
  );
};

export default ContactForm;
