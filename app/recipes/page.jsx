"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { collection, getDocs } from "firebase/firestore";
import { TbLoader3 } from "react-icons/tb";
import { db } from "@/lib/firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
i

const page = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipies = async () => {
    let recipeData = [];
    try {
      const querySnapshot = await getDocs(collection(db, "recipies"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const id = doc.id;
        const rec = { id, ...doc.data() };
        recipeData.push(rec);
      });
      setRecipes(recipeData);
    } catch (error) {
      console.error("Error fetching recipies", error);
      alert("An error occurred");
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchRecipies();
  }, []);

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

      {loading ? (
        <div className="h-[50vh] flex items-center justify-center ">
          <TbLoader3 className="animate-spin text-4xl text-blue-600"/>
        </div>
      ) : (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 md:p-10 p-3">
          {recipes.map((recipe, i) => (
            <div key={i} className="space-y-3 shadow-md p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
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
                  href={"/recipes/"+ recipe.id}
                  className="flex items-center text-sm text-gray-600 hover:text-black transition-all duration-300"
                >
                  Read More
                  <MdKeyboardDoubleArrowRight className="text-lg" />
                  
                </Link>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default page;
