import React from 'react';

// ICONS
import { useSelector } from 'react-redux';

import { Send, Facebook, Twitter, Instagram, Linkedin } from '@icons';
import { playStore, appleStore, qrCode } from '@images';

const Footer = () => {
  const lang = useSelector((state) => state.lang.lang);

  const translations = {
    en: {
      subscribe: 'Subscribe',
      discount: 'Get 10% off your first order',
      support: 'Support',
      account: 'Account',
      myAccount: 'My Account',
      loginRegister: 'Login / Register',
      cart: 'Cart',
      wishlist: 'Wishlist',
      shop: 'Shop',
      quickLinks: 'Quick Link',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms Of Use',
      faq: 'FAQ',
      contact: 'Contact',
      downloadApp: 'Download App',
      appDiscount: 'Save $3 with App New User Only',
      copyRight: 'Copyright Lumoshive. All rights reserved',
    },
    id: {
      subscribe: 'Berlangganan',
      discount: 'Dapatkan diskon 10% untuk pembelian pertama Anda',
      support: 'Dukungan',
      account: 'Akun',
      myAccount: 'Akun Saya',
      loginRegister: 'Masuk / Daftar',
      cart: 'Keranjang',
      wishlist: 'Daftar Keinginan',
      shop: 'Toko',
      quickLinks: 'Tautan Cepat',
      privacyPolicy: 'Kebijakan Privasi',
      termsOfUse: 'Syarat Penggunaan',
      faq: 'FAQ',
      contact: 'Kontak',
      downloadApp: 'Unduh Aplikasi',
      appDiscount: 'Hemat $3 hanya untuk Pengguna Baru Aplikasi',
      copyRight: 'Copyright Lumoshive. Semua hak dilindungi',
    },
  };

  const text = translations[lang];

  return (
    <footer className="bg-black text-white p-5">
      <div className="container p-5 md:px-0 grid gap-10 grid-cols-2 lg:grid-cols-5">
        {/* Header (Exclusive) */}
        <div className="flex col-span-2 md:col-span-1 justify-between order-1 md:order-none">
          {/* TEXT, LOGO & INPUT */}
          <div className="flex justify-between flex-col gap-4 md:justify-normal">
            <h2 className="text-base md:text-xl font-semibold">Exclusive</h2>
            <p className="text-sm md:text-base font-medium">{text.subscribe}</p>
            <p className="text-sm">{text.discount}</p>
            <div className="flex justify-between items-center relative">
              <label className="hidden" htmlFor="email-input"></label>
              <input
                className="bg-black text-white w-full max-w-[217px] border rounded p-2 text-sm"
                id="email-input"
                placeholder="Enter your Email"
                type="email"
              />
              <button className="absolute right-3">
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
          <h3 className="text-base md:text-lg">{text.support}</h3>
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
          <h3 className="text-base md:text-lg">{text.account}</h3>
          <ul className="text-base space-y-2 font-light">
            <li>
              {' '}
              <a href="#">{text.myAccount}</a>
            </li>
            <li>
              {' '}
              <a href="#">{text.loginRegister}</a>
            </li>
            <li>
              {' '}
              <a href="#">{text.cart}</a>
            </li>
            <li>
              {' '}
              <a href="#">{text.wishlist}</a>
            </li>
            <li>
              {' '}
              <a href="#">{text.shop}</a>
            </li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="space-y-4 order-2 md:order-none">
          <h3 className="text-base md:text-lg">{text.quickLinks}</h3>
          <ul className="text-base space-y-2 font-light">
            <li>
              {' '}
              <a href="#">{text.privacyPolicy}</a>
            </li>
            <li>
              {' '}
              <a href="#">{text.termsOfUse}</a>
            </li>
            <li>
              {' '}
              <a href="#">{text.faq}</a>
            </li>
            <li>
              {' '}
              <a href="#">{text.contact}</a>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div className="space-y-4 order-5 md:order-none">
          <h3 className="text-base md:text-lg">{text.downloadApp}</h3>
          <p className="text-sm text-gray-400">{text.appDiscount}</p>
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
      <p className="text-center text-gray-600">&copy; {text.copyRight}</p>
    </footer>
  );
};

export default Footer;
