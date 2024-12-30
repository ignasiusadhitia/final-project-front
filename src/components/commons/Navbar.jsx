import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { setLanguage } from '@store/features/languageSlice';
import { selectCartTotalItems } from '@store/features/productSlice';

import {
  Search,
  WishList,
  BlackCart,
  UserLogin,
  User,
  Order,
  Reviews,
  Logout,
  Hamburger,
  Close,
} from '@icons';

const Navbar = () => {
  const location = useLocation().pathname;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);
  // login simulation
  const login = true;

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const lang = useSelector((state) => state.lang.lang);
  const { cartItemsCount } = useSelector((state) => state.product);
  const totalItems = useSelector(selectCartTotalItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setNavbarOpen(false);
    setDropdownOpen(false);

    window.scrollTo(0, 0);
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [location]);

  const handleNavbarClick = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const handleUserClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (e) => {
    const selectedLang = e.target.value;
    dispatch(setLanguage(selectedLang));
  };

  const translations = {
    en: {
      sale: 'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!',
      showNow: 'Show Now',
      showNowLower: 'ShowNow',
      home: 'Home',
      contact: 'Contact',
      about: 'About',
      wishlist: 'Wishlist',
      login: 'Login',
      signUp: 'Sign Up',
      manageAccount: 'Manage My Account',
      myOrder: 'My Order',
      myReviews: 'My Reviews',
      logout: 'Logout',
      searchPlaceholder: 'What are you looking for?',
    },
    id: {
      sale: 'Diskon Musim Panas Untuk Semua Baju Renang dan Pengiriman Ekspres Gratis - Diskon 50%!',
      showNow: 'Lihat Sekarang',
      showNowLower: 'LihatSekarang',
      home: 'Beranda',
      contact: 'Kontak',
      about: 'Tentang',
      wishlist: 'Favorit',
      login: 'Masuk',
      signUp: 'Daftar',
      manageAccount: 'Kelola Akun Saya',
      myOrder: 'Pesanan Saya',
      myReviews: 'Ulasan Saya',
      logout: 'Keluar',
      searchPlaceholder: 'Apa yang Anda cari?',
    },
  };

  const text = translations[lang];

  return (
    <header className="border-b-2 fixed top-0 left-0 w-full bg-white z-50">
      {!isSmallScreen || location !== '/login' ? (
        <div className="bg-black py-3">
          <div className="container px-5 lg:px-0 flex justify-end items-center">
            <div
              className={`${lang === 'id' ? 'w-[959px]' : 'w-[859px]'} flex justify-between`}
            >
              <div className="flex items-center lg:gap-3">
                <p className="text-xs lg:text-sm font-normal text-center lg:text-start text-text-1">
                  {text.sale}
                  <Link
                    className="lg:hidden text-text-1 font-semibold ml-2"
                    to={'products'}
                  >
                    {text.showNow}
                  </Link>
                </p>
                <Link
                  className="hidden lg:block text-text-1 font-semibold underline"
                  to={'products'}
                >
                  {text.showNowLower}
                </Link>
              </div>
              <div className="hidden lg:block">
                <select
                  className="bg-black text-text-1"
                  id="language"
                  name="language"
                  value={lang}
                  onChange={changeLanguage}
                >
                  <option className="text-text-1" value="en">
                    English
                  </option>
                  <option className="text-text-1" value="id">
                    Indonesia
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={`${isNavbarOpen ? '-translate-y-0' : '-translate-y-full'} transition ease-in duration-200 absolute z-50 bg-white shadow-md rounded-bl-3xl rounded-br-3xl left-0 right-0 top-0 h-[472px] lg:hidden`}
      >
        <div className="flex justify-between py-8 px-5 ">
          <h1 className="text-base text-black font-semibold">Exclusive</h1>

          <button onClick={handleNavbarClick}>
            <Close />
          </button>
        </div>

        <div className="px-5">
          <div className="block lg:hidden relative">
            <input
              className="w-full text-xs bg-secondary-1 border border-secondary-1 rounded-md px-6 py-3 focus:border focus:outline-none focus:border-gray-300"
              placeholder={text.searchPlaceholder}
              type="text"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search />
            </button>
          </div>
        </div>
        <div className="block lg:hidden my-8">
          <ul className="flex flex-col gap-8">
            <li>
              <Link
                className={`${location === '/' ? 'text-black font-medium border-secondary-3' : 'text-text-2 font-normal border-transparent'} border-l-8 py-2 px-3 text-sm font-normal`}
                to={''}
              >
                {text.home}
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/contact' ? 'text-black font-medium border-secondary-3' : 'text-text-2 font-normal border-transparent'} border-l-8 py-2 px-3 text-sm font-normal`}
                to={'contact'}
              >
                {text.contact}
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/about' ? 'text-black font-medium border-secondary-3' : 'text-text-2 font-normal border-transparent'} border-l-8 py-2 px-3 text-sm font-normal`}
                to={'about'}
              >
                {text.about}
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/wishlist' ? 'text-black font-medium border-secondary-3' : 'text-text-2 font-normal border-transparent'} border-l-8 py-2 px-3 text-sm font-normal`}
                to={'wishlist'}
              >
                {text.wishlist}
              </Link>
            </li>
          </ul>
        </div>

        {login ? (
          <div className="px-5">
            <div className="border-b-2 pb-6 flex items-center gap-3">
              <img
                alt="user-image"
                className="border border-text-2 rounded-full w-8 h-8"
                src="https://picsum.photos/200/300"
              />
              <p className="text-text-2 text-sm font-normal">Andre Gunawan</p>
            </div>
          </div>
        ) : (
          <div className="px-5">
            <div className="border-t-2 pt-7 flex items-end justify-end gap-3">
              <Link
                className="flex items-center justify-center w-[100px] h-[30px] border border-secondary-3 text-secondary-3 rounded-md text-xs"
                to={'sign-up'}
              >
                {text.signUp}
              </Link>
              <Link
                className="flex items-center justify-center w-[100px] h-[30px] bg-secondary-3 text-white rounded-md text-xs"
                to={'login'}
              >
                {text.login}
              </Link>
            </div>
          </div>
        )}
      </div>

      <nav
        className={`container sticky px-5 lg:px-0 flex items-center justify-between pt-5 lg:pt-11 pb-5 ${!login && isSmallScreen && 'flex-row-reverse'}`}
      >
        <button className="block lg:hidden" onClick={handleNavbarClick}>
          <Hamburger />
        </button>
        <h1 className="text-base lg:text-2xl text-black font-semibold lg:font-bold">
          Exclusive
        </h1>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li>
              <Link
                className={`${location === '/' && 'border-b border-black'} text-base font-normal`}
                to={''}
              >
                {text.home}
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/contact' && 'border-b border-black'} text-base font-normal`}
                to={'contact'}
              >
                {text.contact}
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/about' && 'border-b border-black'} text-base font-normal`}
                to={'about'}
              >
                {text.about}
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/sign-up' && 'border-b border-black'} text-base font-normal`}
                to={'sign-up'}
              >
                {text.signUp}
              </Link>
            </li>
          </ul>
        </div>

        {(isSmallScreen && login) || (!isSmallScreen && (login || !login)) ? (
          <div className="flex items-center gap-8">
            <div className="hidden lg:block relative z-50">
              <input
                className="w-[243px] text-xs h-[38px] bg-secondary-1 border border-secondary-1 rounded-md px-6 py-3 focus:border focus:outline-none focus:border-gray-300"
                placeholder={text.searchPlaceholder}
                type="text"
              />
              <button className="absolute z-50 right-3 top-1/2 -translate-y-1/2">
                <Search />
              </button>
            </div>

            <div className="flex gap-5 items-center">
              <Link className="hidden lg:block" to={'wishlist'}>
                <WishList />
              </Link>
              <Link className="relative z-50" to={'cart'}>
                <BlackCart className="w-6 h-6 lg:w-8 lg:h-8" />
                {login && (
                  <span className="absolute text-text-1 px-1 rounded-full text-xs -right-1 -top-1 bg-secondary-3">
                    {totalItems > 0 ? totalItems : ''}
                  </span>
                )}
              </Link>

              {login && (
                <div className="hidden lg:block relative z-50">
                  <button
                    className="focus:outline-none"
                    onClick={handleUserClick}
                  >
                    <UserLogin />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-50 py-5 bg-gradient-to-b from-gray-400 to-black right-0 mt-2 w-56 rounded-md shadow-lg">
                      <Link
                        className="flex items-center gap-2 px-4 py-2 text-sm font-normal text-text-1"
                        to={'/my-account'}
                      >
                        <User /> {text.manageAccount}
                      </Link>
                      <Link
                        className="flex items-center gap-2 px-4 py-2 text-sm font-normal text-text-1"
                        to={'/my-account/my-orders'}
                      >
                        <Order /> {text.myOrder}
                      </Link>
                      <Link
                        className="flex items-center gap-2 px-4 py-2 text-sm font-normal text-text-1"
                        to={'/reviews'}
                      >
                        <Reviews /> {text.myReviews}
                      </Link>
                      <button className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm font-normal text-text-1">
                        <Logout /> {text.logout}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
