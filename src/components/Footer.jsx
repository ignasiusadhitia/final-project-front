import React from 'react';

// ICONS
import { Send, Facebook, Twitter, Instagram, Linkedin } from '@icons';
import { playStore, appleStore, qrCode } from '@images';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5">
      <div className="container p-5 md:px-0 grid gap-10 grid-cols-2 lg:grid-cols-5">
        {/* Header (Exclusive) */}
        <div className="flex col-span-2 md:col-span-1 justify-between order-1 md:order-none">
          {/* TEXT, LOGO & INPUT */}
          <div className="flex justify-between flex-col gap-4 md:justify-normal">
            <h2 className="text-base md:text-xl font-semibold">Exclusive</h2>
            <p className="text-sm md:text-base font-medium">Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="flex items-center relative">
              <label className="hidden" htmlFor="email-input"></label>
              <input
                className="bg-black text-white w-full max-w-[217px] border rounded p-2 text-sm"
                id="email-input"
                placeholder="Enter your Email"
                type="email"
              />
              <button className="absolute right-10">
                <Send />
              </button>
            </div>
          </div>
          {/* ICONS */}
          <ul className="md:hidden flex justify-between flex-col gap-4">
            <li>
              <a
                href="https://facebook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4 order-3 md:order-none">
          <h3 className="text-base md:text-lg">Support</h3>
          <ul className="text-base space-y-2 font-light">
            <li>
              Jl. Gatot Subroto <br /> Jakarta, 12930, <br /> Indonesia.
            </li>
            <li>
              {' '}
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            </li>
            <li>
              {' '}
              <a href="tel:+62815-8888-9999">+62815-8888-9999</a>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div className="space-y-4 order-4 md:order-none">
          <h3 className="text-base md:text-lg">Account</h3>
          <ul className="text-base space-y-2 font-light">
            <li>
              {' '}
              <a href="#">My Account</a>
            </li>
            <li>
              {' '}
              <a href="#">Login / Register</a>
            </li>
            <li>
              {' '}
              <a href="#">Cart</a>
            </li>
            <li>
              {' '}
              <a href="#">Wishlist</a>
            </li>
            <li>
              {' '}
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="space-y-4 order-2 md:order-none">
          <h3 className="text-base md:text-lg">Quick Link</h3>
          <ul className="text-base space-y-2 font-light">
            <li>
              {' '}
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              {' '}
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              {' '}
              <a href="#">FAQ</a>
            </li>
            <li>
              {' '}
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div className="space-y-4 order-5 md:order-none">
          <h3 className="text-base md:text-lg">Download App</h3>
          <p className="text-sm text-gray-400">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-4">
            <div>
              <img alt="Barcode" src={qrCode} />
            </div>
            <div className="grid grid-rows-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.example.myapp "
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="Barcode" src={playStore} />
              </a>
              <a
                href="https://apps.apple.com/us/app/example/id123456789"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="Barcode" src={appleStore} />
              </a>
            </div>
          </div>
          <ul className="md:flex gap-5 hidden">
            <li>
              <a
                href="https://facebook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-600">
        &copy; Copyright Lumoshive. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
