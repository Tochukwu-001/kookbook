"use server";
import { auth } from "@/auth";
import React from "react";

const page = async () => {
  const session = await auth();
  const name = session?.user?.name
  let x = name.split(" ")
  console.log(x[0]);
  let username = x [0]
  
  return (
    <main className="min-h-dvh">
      <section className="">
        <div className="h-[30vh] bg-[url('/wavy.png')] bg-no-repeat bg-center bg-cover relative">
          <img
            src={session?.user?.image}
            alt={session?.user?.name.slice(0, 1).toUpperCase()}
            className="w-40 h-40 rounded-full absolute -bottom-[50%] left-[45%]"
          />
        </div>
        <div className="mt-30">
          <h1 className="text-center text-3xl text-gray-800 font-bold uppercase">
            {session?.user?.name}
          </h1>
          <p>
            @{username}
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
