"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
    const [navOpen,setNavOpen]=useState(false)
    // handler function for nav oen
    const handleOpen =()=>{
        setNavOpen(!navOpen)
    }
    const navIteams = [
        {url:"/", label: "Home"},
        {url:"/about", label: "About Us"},
        {url:"/faqs", label: "FAQs"},
        {url:"/recipies", label: "Recipies"},

    ]
  return (
    <nav className='flex items-center justify-between shadow-md py-3 px-6 relative '>
        <Link href={"/"} className='flex iteams-center gap-1 z-50 '>
        <Image
            src={"/logo.png"}
            alt="logo"
            width={800}
            height={800}
            className="w-10 h-10"
        />
        <p className="font-bold text-xl text-gray-700 max-md:hidden">KookBook</p>
        </Link>

        <div className='flex items-center ju gap-8 max-lg:hidden ml-auto '>
            {navIteams.map((item,i) =>(
                <Link
                 key={i}
                 href={item.url}
                 className='text-lg hover:text-blue-600 transition-colours 
            duration-300'>
                {item.label}
            </Link>
            ))}
           
           
        </div> 
        <Link href={"/auth/signin"} className='flex items-center gap-1 text-lg lg:border ml-8 px-3 py-1
            hover:text-blue-600 hover:border-blue-600 transition-colours duration-300
            max-lg:ml-auto z-50'>
                <FiUser />
                <p className='max-lg:hidden'>Sign In</p>
            
        </Link>
        {/* mobile and tab view */}
        {navOpen ? (
            <div className='h-dvh w-full overflow-hidden lg:hidden absolute top-0 right-0
                bg-white flex flex-col items-center justify-center gap-20'>
                {navIteams.map((item,i) =>(
                    <Link
                    key={i}
                    href={item.url}
                    className='text-lg hover:text-red-600 transition-colours 
                duration-300'>
                    {item.label}
                </Link>
                ))} 
            </div>
        ): null

        }
        
       

        
        <div className='lg:hidden z-50 '>
            <button onClick={handleOpen} className='text-2xl '>
                {navOpen ?  <IoMdClose />:<IoMdMenu /> }
                 
            </button>
        </div>
    </nav>
  )
}

export default Nav
