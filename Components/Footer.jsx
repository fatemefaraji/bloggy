import { assets } from '@/Assets/assets';
import Image from 'next/image'; // ایمپورت صحیح
import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light} alt="logo-light" width={120} height={40} />
      <p className='text-sm text-white'>ALL rights reserved. Copyright @Bloggy</p>
      <div className='flex gap-2'>
        <Image src={assets.facebook_icon} alt='facebook icon' width={40} height={40} />
        <Image src={assets.twitter_icon} alt='twitter icon' width={40} height={40} />
        <Image src={assets.googleplus_icon} alt='google plus icon' width={40} height={40} />
      </div>
    </div>
  );
};

export default Footer;
