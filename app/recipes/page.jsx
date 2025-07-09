import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

const page = () => {
  // mock recipe data
  const recipes = [
    {
      image: "/bg.jpg",
      author: "Jason Statham",
      title: "Nigerian Party Jollof",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
    {
      image: "/c1.jpg",
      author: "Jason Statham",
      title: "Nigerian Party Jollof",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
    {
      image: "/c3.jpg",
      author: "Jason Statham",
      title: "Nigerian Party Jollof",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
    {
      image: "/c2.jpg",
      author: "Jason Statham",
      title: "Nigerian Party Jollof",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
    {
      image: "/bg.jpg",
      author: "Jason Statham",
      title: "Nigerian Party Jollof",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
    {
      image: "/bg.jpg",
      author: "Jason Statham",
      title: "Nigerian Party Jollof",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
  ];

  return (
    <main className="min-h-dvh">
      <section className="min-h-[40vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="min-h-[40vh] bg-black/50 flex items-center justify-center">
          <div className="space-y-5">
            <h1 className="text-white text-4xl font-extrabold text-center">
              Explore Recipes from Diverse Cultures
            </h1>
            <p className="text-gray-200 text-center text-lg">
              Discover a variety of recipes that celebrate the rich culinary
              traditons from around the world
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3 md:gap-10 md:p-10 p-3">
        {recipes.map((recipe, i) => (
          <Link href={"#"} key={i} className="space-y-3 shadow-md p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={recipe.image}
                  alt="user"
                  width={500}
                  height={500}
                  className="w-8 h-8 rounded-full"
                />
                <h2>{recipe.author}</h2>
              </div>
              <IoIosMore className="text-xl" />
            </div>
            <p className="text-lg">{recipe.title}</p>
            <p className="line-clamp-2">{recipe.desc}</p>
            <div className="flex items-center justify-between">
              <p>{recipe.timestamp}</p>
              <Link
                href={"#"}
                className="flex items-center text-sm text-gray-600 hover:text-black transition-all duration-300"
              >
                Read More
                <MdKeyboardDoubleArrowRight className="text-lg" />
              </Link>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default page;
