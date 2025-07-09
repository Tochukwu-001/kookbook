import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

const page = () => {
    // mock recipe data
    const recipes = [
        {
            Image: "/bg.jpg",
            author: "Jason Statham",
            title: "Nigerian Party Jollof",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat expedita facilisprovident laboriosam maxime fugiat eum commodi odit iste illo.",
            timestamp: "7/9/2025",
        },
        {
            Image: "/bg.jpg",
            author: "Jason Statham",
            title: "Nigerian Party Jollof",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat expedita facilisprovident laboriosam maxime fugiat eum commodi odit iste illo.",
            timestamp: "7/9/2025",
        },
        {
            Image: "/bg.jpg",
            author: "Jason Statham",
            title: "Nigerian Party Jollof",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat expedita facilisprovident laboriosam maxime fugiat eum commodi odit iste illo.",
            timestamp: "7/9/2025",
        },
        {
            Image: "/bg.jpg",
            author: "Jason Statham",
            title: "Nigerian Party Jollof",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat expedita facilisprovident laboriosam maxime fugiat eum commodi odit iste illo.",
            timestamp: "7/9/2025",
        },
        {
            Image: "/bg.jpg",
            author: "Jason Statham",
            title: "Nigerian Party Jollof",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat expedita facilisprovident laboriosam maxime fugiat eum commodi odit iste illo.",
            timestamp: "7/9/2025",
        },
        {
            Image: "/bg.jpg",
            author: "Jason Statham",
            title: "Nigerian Party Jollof",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat expedita facilisprovident laboriosam maxime fugiat eum commodi odit iste illo.",
            timestamp: "7/9/2025",
        },
    ]
  return (
    <main className='min-h-dvh'>
      <section className="min-h-[30vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover
      bg-fixed">
        <div className='min-h-[40vh] bg-black/50 flex items-center justify-center'>
            <div className='space-y-5'>
                <h1 className='text-white text-4xl font-extrabold text-center'>Explore Recipes
                 from Diverse Cultures</h1>
                <p className='text-gray-200 text-center text-lg'>
                Discover a variety of recipes that celebrate the rich Culinary
                traditions from around the world
                </p>
            </div>
        </div>

      </section>

      <section className='grid grid-cols-3 p-3 md:p-5 gap-3 md:gap-5'>
        <div className='space-y-3 shadow-md p-3 '>
            <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 '>
            <Image
             src={"/bg.jpg"} 
             alt='user'
             width={500}
             height={500} 
             className='w-8 h-8 rounded-full'
            />
            <h2>Jonathan statham</h2>
          </div>
          <IoIosMore className='text-xl' />
          </div>
          <p className='text-lg'>Nigerian Party Jollof</p>
          <p className='line-clamp-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat expedita facilis
             provident laboriosam maxime fugiat eum commodi odit iste illo.
          </p>
          <div className='flex items-center justify-between'>
            <p>7/9/2025</p>
            <Link href={"#"} className='flex items-center text-sm text-gray-600 hover:text-black '>
              Read More
              <MdKeyboardDoubleArrowRight className='text-xl' />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
