import React from 'react';
import { useSelector } from 'react-redux';

const UpdateProfile = () => {
  const lang = useSelector((state) => state.lang.lang);

  const translations = {
    en: {
      editYourProfile: 'Edit Your Profile',
      fullName: 'Full Name',
      email: 'Email',
      passwordChanges: 'Password Changes',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmNewPassword: 'Confirm New Password',
      cancel: 'Cancel',
      saveChanges: 'Save Changes',
    },
    id: {
      editYourProfile: 'Edit Profil Anda',
      fullName: 'Nama Lengkap',
      email: 'Email',
      passwordChanges: 'Perubahan Kata Sandi',
      currentPassword: 'Kata Sandi Saat Ini',
      newPassword: 'Kata Sandi Baru',
      confirmNewPassword: 'Konfirmasi Kata Sandi Baru',
      cancel: 'Batal',
      saveChanges: 'Simpan Perubahan',
    },
  };

  const text = translations[lang];

  return (
    <section className="mt-5 lg:mt-20 flex flex-col px-5 lg:px-20 justify-between py-5 lg:py-12 gap-7 lg:gap-4 w-full lg:w-[870px] h-full lg:h-[630px]">
      <div className="flex flex-col gap-8">
        <h3 className="text-base lg:text-xl font-medium text-secondary-3">
          {text.UpdateProfile}
        </h3>
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between">
          <div className="flex flex-col gap-3">
            <label className="text-xs lg:text-base font-normal" htmlFor="name">
              {text.fullName}
            </label>
            <input
              className="bg-secondary-1 text-xs lg:text-base font-normal border border-transparent w-full lg:w-[330px] h-[50px] px-5 py-2 focus:outline-none focus:border-secondary-3"
              id="name"
              placeholder="Deni Irawan"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs lg:text-base font-normal" htmlFor="email">
              {text.email}
            </label>
            <input
              className="bg-secondary-1 text-xs lg:text-base font-normal border border-transparent w-full lg:w-[330px] h-[50px] px-5 py-2 focus:outline-none focus:border-secondary-3"
              id="email"
              placeholder="deni@lumoshive.com"
              type="email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-xs lg:text-base" htmlFor="password">
            {text.passwordChanges}
          </label>
          <input
            className="bg-secondary-1 text-xs lg:text-base font-normal border border-transparent h-[50px] px-5 py-2 focus:outline-none focus:border-secondary-3"
            id="password"
            name="password"
            placeholder={text.currentPassword}
            type="password"
          />

          <input
            className="bg-secondary-1 text-xs lg:text-base font-normal border border-transparent h-[50px] px-5 py-2 focus:outline-none focus:border-secondary-3"
            id="new-password"
            name="new-password"
            placeholder={text.newPassword}
            type="password"
          />

          <input
            className="bg-secondary-1 text-xs lg:text-base font-normal border border-transparent h-[50px] px-5 py-2 focus:outline-none focus:border-secondary-3"
            id="confirm-new-password"
            name="confirm-new-password"
            placeholder={text.confirmNewPassword}
            type="password"
          />
        </div>
      </div>

      <div className="flex justify-end items-end">
        <div className="w-full lg:w-auto flex justify-between lg:justify-center lg:items-center gap-2 lg:gap-8">
          <button className="bg-secondary-1 lg:bg-transparent w-[181px] h-11 lg:w-auto lg:h-auto border-none text-sm lg:text-base font-medium rounded-md lg:font-normal text-black">
            {text.cancel}
          </button>
          <button className="w-[181px] h-11 lg:w-[214px] lg:h-14 bg-secondary-3 rounded-md text-sm lg:text-base font-medium text-text-1">
            {text.saveChanges}
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
