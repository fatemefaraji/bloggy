"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import Image from "next/image";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";

const Page = () => {
    const params = useParams(); 
    const id = Number(params.id); 

    const [data, setData] = useState(null);

    useEffect(() => {
        if (!id) return;

        const blogPost = blog_data.find((post) => post.id === id);
        if (blogPost) {
            setData(blogPost);
            console.log(blogPost);
        }
    }, [id]);

    if (!data) return <p className="text-center my-20 text-lg font-semibold">Loading...</p>;

    return (
        <>
            <div className="bg-gray-100 py-6 px-6 md:px-16 lg:px-32 shadow-lg">
                <div className="flex justify-between items-center">
                    <Image src={assets.logo} width={128} alt="logo picture" className="w-[130px] sm:w-auto cursor-pointer" />
                    <button className="flex items-center gap-2 font-medium py-2 px-4 sm:px-8 bg-indigo-600 text-white border border-black rounded-md shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
                        Get Started <Image src={assets.arrow} alt="arrow" />
                    </button>
                </div>
                <div className="text-center my-24">
                    <h1 className="text-3xl sm:text-5xl font-bold max-w-[700px] mx-auto text-gray-900">{data.title}</h1>
                    <Image className="mx-auto mt-6 border-4 border-indigo-500 rounded-full" src={data.author_img} width={60} height={60} alt="Author" />
                    <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto text-gray-700 font-medium">{data.author_name}</p>
                </div>
            </div>

            <div className="mx-6 max-w-[800px] md:mx-auto mt-20 mb-12">
                <Image className="border-4 border-indigo-500 rounded-lg shadow-lg" src={data.image} width={1280} height={720} alt="Blog Image" />
                <h1 className="my-8 text-[26px] font-bold text-gray-900">Introduction:</h1>
                <p className="text-gray-700 leading-relaxed">{data.description}</p>

                {[...Array(4)].map((_, index) => (
                    <div key={index}>
                        <h3 className="my-5 text-[20px] font-semibold text-gray-900">Step {index + 1}: Self-Reflection and Goal Setting</h3>
                        <p className="my-3 text-gray-700 leading-relaxed">Some text</p>
                        <p className="my-3 text-gray-700 leading-relaxed">Some text</p>
                    </div>
                ))}

                <h3 className="my-5 text-[20px] font-semibold text-gray-900">Conclusion: Self-Reflection and Goal Setting</h3>
                <p className="my-3 text-gray-700 leading-relaxed">Some text about conclusion</p>

                <div className="my-24">
                    <p className="text-gray-900 font-semibold my-4">Share this article on social media</p>
                    <div className="flex gap-4">
                        <Image src={assets.facebook_icon} alt="Facebook" width={50} height={50} className="cursor-pointer hover:scale-110 transition-transform duration-300" />
                        <Image src={assets.twitter_icon} alt="Twitter" width={50} height={50} className="cursor-pointer hover:scale-110 transition-transform duration-300" />
                        <Image src={assets.googleplus_icon} alt="Google Plus" width={50} height={50} className="cursor-pointer hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Page;
