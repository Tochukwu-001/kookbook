import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const page = ()=>{
    const resipes = [
        {
            image:"/bg.jpg",
            author:"/Jason Statham",
            title:"/Nigerian Party jollof",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus rem et pariatur laudantium a. Repudiandae, perferendis veniam optio est atque voluptatem autem, accusamus ipsam eligendi cupiditate ratione aspernatur praesentium! Sapiente.",
            timestamp:"7/9/2025",
        },
    ]
    return(
        <main className="min-h-dvh">
            <section className="min-h[40vh] bg-[url]">
        </section>
            <section className="grid grid-cols-4  gap-3 md:gap-5 md:p-5 p-3">
                <div className="space-y-3">
                <div className="flex items-center gap-2">
                 <Image scr={"/bg.jpg"} alt="user" width={500} height={500} className="w-8 h-8 rounded-full"/>
                <h2> Johantham statham</h2>
                 <HiOutlineDotsHorizontal className="text-xl"/>
                </div>
                </div>
                <p className="text-lg"> Nigerian Party Jollof</p>
                <p className="line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus rem et pariatur laudantium a. Repudiandae, perferendis veniam optio est atque voluptatem
                     autem, accusamus ipsam eligendi cupiditate ratione aspernatur praesentium! Sapiente.</p>
                     <div>
                        <p>7/9/2025</p>
                        <Link href={"#"} className="flex items-center text-sm text-gray-600 hover:text-black"/>
                        Read More 
                        <MdKeyboardDoubl/>
                       
                     </div>
            </section>
        </main>
    )
}
export default page