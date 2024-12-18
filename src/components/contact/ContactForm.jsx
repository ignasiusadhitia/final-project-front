import React, { useState } from 'react';

import PropTypes from 'prop-types';

const ContactForm = ({ onSubmitHandler }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form
      className="w-full shadow-md rounded px-8 py-10"
      onSubmit={onSubmitHandler}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative w-full">
          <label
            className={`${name ? 'hidden' : 'block'} absolute top-3 mx-4 text-black text-opacity-50 transition-all duration-200 ease-in-out`}
            htmlFor="name"
          >
            Your Name <span className="text-secondary-3">*</span>
          </label>

          <input
            required
            className="w-full rounded bg-secondary-1 py-[0.813rem] px-4 placeholder:text-base"
            id="name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="relative w-full">
          <label
            className={`${email ? 'hidden' : 'block'} absolute top-3 mx-4 text-black text-opacity-50 transition-all duration-200 ease-in-out`}
            htmlFor="email"
          >
            Your Email <span className="text-secondary-3">*</span>
          </label>

          <input
            required
            className="w-full rounded bg-secondary-1 py-[0.813rem] px-4 placeholder:text-base"
            id="email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative w-full">
          <label
            className={`${phone ? 'hidden' : 'block'} absolute top-3 mx-4 text-black text-opacity-50 transition-all duration-200 ease-in-out`}
            htmlFor="phone"
          >
            Your Phone <span className="text-secondary-3">*</span>
          </label>

          <input
            required
            className="w-full rounded bg-secondary-1 py-[0.813rem] px-4 placeholder:text-base"
            id="phone"
            name="phone"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="relative w-full">
        <label
          className={`${message ? 'hidden' : 'block'} absolute top-7 mx-4 text-black text-opacity-50 transition-all duration-200 ease-in-out`}
          htmlFor="message"
        >
          Your Message <span className="text-secondary-3">*</span>
        </label>

        <textarea
          required
          className="w-full h-52 rounded bg-secondary-1 py-[0.813rem] px-4 mt-4"
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-end mt-8">
        <button
          className="w-full md:w-fit py-4 px-12 rounded bg-button-2 hover:bg-button-hover-1 text-text-1"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmitHandler: PropTypes.func,
};

export default ContactForm;
