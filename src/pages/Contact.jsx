import React from 'react';

import { ContactCard, ContactForm } from '@components';

const Contact = () => {
  return (
    <div className="container">
      <main className="flex gap-[1.875rem]">
        <ContactCard />
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
