import React from 'react';
import ContactForm from '../_components/ContactForm';

export const metadata = {
  title: 'Contact',
};

const Contact = () => {
  return (
    <div className='max-w-5xl mx-auto' data-cy='contact-page'>
      <h1 className='text-4xl mb-8 text-accent-400 font-medium'>
        Any question? Please send us a message.
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
