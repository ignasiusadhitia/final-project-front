import React from 'react';

import { Mail, Phone } from '@icons';
import { useSelector } from 'react-redux';

const ContactCard = () => {
  const lang = useSelector((state) => state.lang.lang);

  const translations = {
    en: {
      callToUs: 'Call To Us',
      callDescription: 'We are available 24/7, 7 days a week.',
      phoneLabel: 'Phone',
      writeToUs: 'Write To Us',
      writeDescription: 'Fill out our form and we will contact you within 24 hours.',
      emailLabel: 'Emails',
    },
    id: {
      callToUs: 'Hubungi Kami',
      callDescription: 'Kami tersedia 24/7, 7 hari seminggu.',
      phoneLabel: 'Telepon',
      writeToUs: 'Tulis Kepada Kami',
      writeDescription: 'Isi formulir kami dan kami akan menghubungi Anda dalam 24 jam.',
      emailLabel: 'Email',
    },
  };

  const text = translations[lang];
  return (
    <section className="max-w-full md:max-w-[340px] flex flex-col gap-9 px-[2.188rem] pt-10 pb-[3.188rem] rounded shadow-md text-black">
      {/* Call To Us */}
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <Phone />
          <h2 className="text-sm md:text-base font-medium">{text.callToUs}</h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs md:text-sm">
            {text.callDescription}
          </p>
          <p className="text-xs md:text-sm">{text.phoneLabel}: +8801611112222</p>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-[1px] border-black border-opacity-30" />

      {/* Write To Us */}
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <Mail />
          <h2 className="text-sm md:text-base font-medium">{text.writeToUs}</h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm md:text-sm">
            {text.writeDescription}
          </p>
          <p className="text-sm md:text-sm">{text.emailLabel}: customer@exclusive.com</p>
          <p className="text-sm md:text-sm">{text.emailLabel}: support@exclusive.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
