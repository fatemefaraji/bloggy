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

    if (!data) return <p className="text-center my-20">Loading...</p>;

    return (
        <>
            <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
                <div className="flex justify-between items-center">
                    <Image src={assets.logo} width={128} alt="logo picture" className="w-[130px] sm:w-auto" />
                    <button className="flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border-black shadow-[-7px_7px_0px_#000000]">
                        Get Started <Image src={assets.arrow} alt="arrow" />
                    </button>
                </div>
                <div className="text-center my-24">
                    <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
                    <Image className="mx-auto mt-6 border border-white rounded-full" src={data.author_img} width={60} height={60} alt="Author" />
                    <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author_name}</p>
                </div>
            </div>

            <div className="mx-5 max-w-[800px] md:mx-auto mt-[100px] mb-10">
                <Image className="border-4 border-white" src={data.image} width={1280} height={720} alt="Blog Image" />
                <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
                <p>{data.description}</p>

                {[...Array(4)].map((_, index) => (
                    <div key={index}>
                        <h3 className="my-5 text-[18px] font-semibold">Step {index + 1}: Self-Reflection and Goal Setting</h3>
                        <p className="my-3">Some text</p>
                        <p className="my-3">Some text</p>
                    </div>
                ))}

                <h3 className="my-5 text-[18px] font-semibold">Conclusion: Self-Reflection and Goal Setting</h3>
                <p className="my-3">Some text about conclusion</p>

                <div className="my-24">
                    <p className="text-black font-semibold my-4">Share this article on social media</p>
                    <div className="flex">
                        <Image src={assets.facebook_icon} alt="Facebook" width={50} height={50} />
                        <Image src={assets.twitter_icon} alt="Twitter" width={50} height={50} />
                        <Image src={assets.googleplus_icon} alt="Google Plus" width={50} height={50} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Page;
