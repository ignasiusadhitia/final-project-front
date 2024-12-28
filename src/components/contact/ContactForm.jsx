import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ContactForm = ({ onSubmitHandler }) => {
  const lang = useSelector((state) => state.lang.lang);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const translations = {
    en: {
      nameLabel: 'Your Name',
      emailLabel: 'Your Email',
      phoneLabel: 'Your Phone',
      messageLabel: 'Your Message',
      requiredMark: '*',
      submitButton: 'Send Message',
    },
    id: {
      nameLabel: 'Nama Anda',
      emailLabel: 'Email Anda',
      phoneLabel: 'Nomor Telepon Anda',
      messageLabel: 'Pesan Anda',
      requiredMark: '*',
      submitButton: 'Kirim Pesan',
    },
  };

  const text = translations[lang];

  return (
    <form
      className="w-full shadow-md rounded px-8 py-10"
      onSubmit={onSubmitHandler}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative w-full">
          <label
            className={`${name ? 'hidden' : 'block'} absolute top-3 mx-4 text-black text-opacity-50 transition-all duration-200 ease-in-out text-sm md:text-base`}
            htmlFor="name"
          >
            {text.nameLabel} <span className="text-secondary-3">*</span>
          </label>

          <input
            required
            className="w-full rounded bg-secondary-1 py-[0.813rem] px-4 text-sm md:text-base"
            id="name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="relative w-full">
          <label
            className={`${email ? 'hidden' : 'block'} absolute top-3 mx-4 text-black text-opacity-50 transition-all duration-200 ease-in-out text-sm md:text-base`}
            htmlFor="email"
          >
            {text.emailLabel} <span className="text-secondary-3">*</span>
          </label>

          <input
            required
            className="w-full rounded bg-secondary-1 py-[0.813rem] px-4 text-sm md:text-base"
            id="email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative w-full">
          <label
            className={`${phone ? 'hidden' : 'block'} absolute top-3 mx-4 text-black text-opacity-50 transition-all duration-200 ease-in-out text-sm md:text-base`}
            htmlFor="phone"
          >
            {text.phoneLabel} <span className="text-secondary-3">*</span>
          </label>

          <input
            required
            className="w-full rounded bg-secondary-1 py-[0.813rem] px-4 text-sm md:text-base"
            id="phone"
            name="phone"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="relative w-full">
        <label
          className={`${message ? 'hidden' : 'block'} absolute top-7 mx-4 text-black text-opacity-50 transition-all duration-200 ease-in-out text-sm md:text-base`}
          htmlFor="message"
        >
          {text.messageLabel} <span className="text-secondary-3">{text.requiredMark}</span>
        </label>

        <textarea
          required
          className="w-full h-52 rounded bg-secondary-1 py-[0.813rem] px-4 mt-4 text-sm md:text-base"
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
          {text.submitButton}
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmitHandler: PropTypes.func,
};

export default ContactForm;
