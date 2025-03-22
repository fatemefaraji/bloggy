import { assets, blog_data } from '@/Assets/assets';
import Image from 'next/image'; 
import Link from 'next/link';
import React from 'react';

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[350px] sm:max-w-[350px] bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <Link href={`/blogs/${id}`}>
      <Image 
        src={image} 
        alt="blog data" 
        width={400} 
        height={400} 
        className="w-full h-56 object-cover"
      />
      </Link>
      <p className='ml-5 mt-5 px-2 py-1 inline-block bg-indigo-600 text-white text-xs rounded-md uppercase tracking-wide'>
        {category}
      </p>
      <div className='p-6'>
        <h5 className='mb-2 text-xl font-semibold text-gray-900'>
          {title}
        </h5>
        <p className='mb-4 text-sm text-gray-600'>
          {description}
        </p>
        <Link  href={`/blogs/${id}`}className="inline-flex items-center py-2 font-semibold text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors duration-300">
          Read More
          <Image 
            src={assets.arrow} 
            alt="arrow" 
            width={20} 
            height={20} 
            className="ml-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
