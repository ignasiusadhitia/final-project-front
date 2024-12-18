import React from 'react';

import { Mail, Phone } from '@icons';

const ContactCard = () => {
  return (
    <section className="max-w-full md:max-w-[340px] flex flex-col gap-9 px-[2.188rem] pt-10 pb-[3.188rem] rounded shadow-md text-black">
      {/* Call To Us */}
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <Phone />
          <h2 className="text-sm md:text-base font-medium">Call To Us</h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs md:text-sm">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-xs md:text-sm">Phone: +8801611112222</p>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-[1px] border-black border-opacity-30" />

      {/* Write To Us */}
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <Mail />
          <h2 className="text-sm md:text-base font-medium">Write To Us</h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm md:text-sm">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm md:text-sm">Emails: customer@exclusive.com</p>
          <p className="text-sm md:text-sm">Emails: support@exclusive.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
