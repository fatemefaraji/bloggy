import { assets } from '@/Assets/assets';
import Image from 'next/image'; 
import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center flex-col sm:flex-row bg-indigo-600 py-6 sm:py-8 px-6 sm:px-12 items-center'>
      <Image src={assets.logo_light} alt="logo-light" width={120} height={40} className="mb-4 sm:mb-0" />
      <p className='text-sm text-white font-medium sm:mx-4'>
        All rights reserved. Copyright @Bloggy
      </p>
      <div className='flex gap-4 mt-4 sm:mt-0'>
        <Image 
          src={assets.facebook_icon} 
          alt='facebook icon' 
          width={40} 
          height={40} 
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        />
        <Image 
          src={assets.twitter_icon} 
          alt='twitter icon' 
          width={40} 
          height={40} 
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        />
        <Image 
          src={assets.googleplus_icon} 
          alt='google plus icon' 
          width={40} 
          height={40} 
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Footer;
