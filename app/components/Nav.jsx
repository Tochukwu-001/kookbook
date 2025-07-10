"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);
    // handler function for nav open
    const handleOpen = () => {
        setNavOpen(!navOpen);
    };

    const navItems = [
        { url: "/", label: "Home" },
        { url: "/about", label: "About" },
        { url: "/faq", label: "FAQs" },
        { url: "/recipies", label: "Recipes" },
    ];

    return (
        <nav className='flex items-center justify-between shadow-md py-3 px-6 relative z-50'>
            <Link href={"/"} className='flex items-center gap-1 z-50'>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={800}
                    height={800}
                    className='w-10 h-10'
                />
                <p className='font-bold text-xl text-gray-700 max-md:hidden'>KookBook</p>
            </Link>
            <div className='flex item-center gap-8 max-lg:hidden '>
                {
                    navItems.map((item, i) => (
                        <Link key={i}
                            href={item.url}
                            className='text-lg hover:text-blue-600 transition-colors duration-300 '>
                            {item.label}
                        </Link>
                    ))
                }
               

            </div>

             <Link href={"auth/signin"} className='flex items-center gap-5 text-lg px-3 py-1 
                hover:text-blue-600 hover:border-blue-600 transition-colors deuration-300 ml-8 max-lg:ml-auto z-50'>
                    <FiUser />
                    <p className='max-lg:hidden'>Sign In</p>
                </Link>

            {/* mobile and tab view */}
                {
                    navOpen ? 
            < div className='h-dvh w-full overflow-hidden lg:hidden absolute top-0 right-0 
             bg-white flex flex-col items-center justify-center gap-20 '>
                {navItems.map((item, i) => (
                    <Link key={i}
                        href={item.url}
                        className={`text-lg hover:text-blue-600 transition-colors duration-300`}

                    >
                        {item.label}
                    </Link>
                ))}

            </div> : null
                }


            <div className='lg:hidden z-50 mt-1'>
                <button onClick={handleOpen} className='text-2xl'>
                    {navOpen ? <IoMdClose /> : <IoMdMenu />}

                </button>
            </div>



        </nav >
    )
}

export default Nav