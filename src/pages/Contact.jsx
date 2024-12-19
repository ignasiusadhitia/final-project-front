import React from 'react';

import { ContactCard, ContactForm } from '@components';

const Contact = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <div className="container mt-6 md:mt-20 px-6 md:px-0">
      <main className="flex flex-col md:flex-row gap-[1.875rem]">
        <ContactCard />
        <ContactForm onSubmitHandler={submitHandler} />
      </main>
    </div>
  );
};

export default Contact;
