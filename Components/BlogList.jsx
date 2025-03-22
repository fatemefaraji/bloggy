import { blog_data } from '@/Assets/assets';
import React, { useState } from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {
    const [menu, setMenu] = useState("All");

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex justify-center gap-4 my-10 flex-wrap">
                {['All', 'Technology', 'Startup', 'Lifestyle'].map((category) => (
                    <button 
                        key={category} 
                        onClick={() => setMenu(category)} 
                        className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 cursor-pointer ${menu === category ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {blog_data
                    .filter((item) => menu === "All" ? true : item.category === menu)
                    .map((item, index) => (
                        <BlogItem 
                            key={index}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            category={item.category}
                        />
                    ))}
            </div>
        </div>
    );
};

export default BlogList;
