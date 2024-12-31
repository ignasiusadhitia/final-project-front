import React from 'react';

import { ContactCard, ContactForm, SEO } from '@components';

const Contact = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us - Exclusive',
    url: 'https://www.exclusive-store.com/contact',
    description:
      'Get in touch with Exclusive for inquiries about limited edition items and more.',
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <>
      <SEO
        description="Get in touch with Exclusive for inquiries about limited edition items and more."
        jsonLd={jsonLd}
        keywords="contact exclusive, inquiries, limited edition"
        title="Contact Us - Exclusive"
        url="https://exclusive-store-front.vercel.app/contact"
      />

      <div className="container mt-6 lg:mb-32 md:mt-20 px-6 md:px-0">
        <main className="flex flex-col md:flex-row gap-[1.875rem]">
          <ContactCard />
          <ContactForm onSubmitHandler={submitHandler} />
        </main>
      </div>
    </>
  );
};

export default Contact;
