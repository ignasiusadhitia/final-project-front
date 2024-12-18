import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

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
  const login = false;

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    setNavbarOpen(false);
    setDropdownOpen(false);

    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [location]);

  const handleNavbarClick = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const handleUserClick = () => {
    setDropdownOpen(!isNavbarOpen);
  };

  return (
    <header className="border-b-2">
      {!isSmallScreen || location !== '/login' ? (
        <div className="bg-black py-3">
          <div className="container px-5 lg:px-0 flex justify-end items-center">
            <div className="w-[859px] flex justify-between">
              <div className="flex items-center lg:gap-3">
                <p className="text-xs lg:text-sm font-normal text-center lg:text-start text-text-1">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                  <Link
                    className="lg:hidden text-text-1 font-semibold ml-2"
                    to={'products'}
                  >
                    Show Now
                  </Link>
                </p>
                <Link
                  className="hidden lg:block text-text-1 font-semibold underline"
                  to={'products'}
                >
                  ShowNow
                </Link>
              </div>
              <div className="hidden lg:block">
                <select
                  className="bg-black text-text-1"
                  id="language"
                  name="language"
                >
                  <option className="text-text-1" value="english">
                    English
                  </option>
                  <option className="text-text-1" value="indonesian">
                    Indonesia
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={`${isNavbarOpen ? '-translate-y-0' : '-translate-y-full'} transition ease-in duration-200 absolute z-20 bg-white shadow-md rounded-bl-3xl rounded-br-3xl left-0 right-0 top-0 h-[472px] lg:hidden`}
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
              placeholder="What are you looking for?"
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
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/contact' ? 'text-black font-medium border-secondary-3' : 'text-text-2 font-normal border-transparent'} border-l-8 py-2 px-3 text-sm font-normal`}
                to={'contact'}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/about' ? 'text-black font-medium border-secondary-3' : 'text-text-2 font-normal border-transparent'} border-l-8 py-2 px-3 text-sm font-normal`}
                to={'about'}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/wishlist' ? 'text-black font-medium border-secondary-3' : 'text-text-2 font-normal border-transparent'} border-l-8 py-2 px-3 text-sm font-normal`}
                to={'wishlist'}
              >
                Wishlist
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
                Sign Up
              </Link>
              <Link
                className="flex items-center justify-center w-[100px] h-[30px] bg-secondary-3 text-white rounded-md text-xs"
                to={'login'}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>

      <nav
        className={`container px-5 lg:px-0 flex items-center justify-between pt-5 lg:pt-11 pb-5 ${!login && isSmallScreen && 'flex-row-reverse'}`}
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
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/contact' && 'border-b border-black'} text-base font-normal`}
                to={'contact'}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/about' && 'border-b border-black'} text-base font-normal`}
                to={'about'}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${location === '/sign-up' && 'border-b border-black'} text-base font-normal`}
                to={'sign-up'}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {(isSmallScreen && login) || (!isSmallScreen && (login || !login)) ? (
          <div className="flex items-center gap-8">
            <div className="hidden lg:block relative">
              <input
                className="w-[243px] text-xs h-[38px] bg-secondary-1 border border-secondary-1 rounded-md px-6 py-3 focus:border focus:outline-none focus:border-gray-300"
                placeholder="What are you looking for?"
                type="text"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search />
              </button>
            </div>

            <div className="flex gap-5 items-center">
              <Link className="hidden lg:block" to={'wishlist'}>
                <WishList />
              </Link>
              <Link className="relative" to={'cart'}>
                <BlackCart className="w-6 h-6 lg:w-8 lg:h-8" />
                {login && (
                  <span className="absolute text-text-1 px-1 rounded-full text-xs -right-1 -top-1 bg-secondary-3">
                    2
                  </span>
                )}
              </Link>

              {login && (
                <div className="hidden lg:block relative">
                  <button
                    className="focus:outline-none"
                    onClick={handleUserClick}
                  >
                    <UserLogin />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute py-5 bg-gradient-to-b from-gray-400 to-black right-0 mt-2 w-56 rounded-md shadow-lg z-10">
                      <Link
                        className="flex items-center gap-2 px-4 py-2 text-sm font-normal text-text-1"
                        to={'/profile'}
                      >
                        <User /> Manage My Account
                      </Link>
                      <Link
                        className="flex items-center gap-2 px-4 py-2 text-sm font-normal text-text-1"
                        to={'/orders'}
                      >
                        <Order /> My Order
                      </Link>
                      <Link
                        className="flex items-center gap-2 px-4 py-2 text-sm font-normal text-text-1"
                        to={'/reviews'}
                      >
                        <Reviews /> My Reviews
                      </Link>
                      <button className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm font-normal text-text-1">
                        <Logout /> Logout
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
