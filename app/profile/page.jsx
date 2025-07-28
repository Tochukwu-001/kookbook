"use server"
import { auth } from '@/auth'
import Editprofile from '@/components/Editprofile';
import { redirect } from 'next/navigation';
import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { query, where, orderBy, doc, getDoc,} from "firebase/firestore";  
import { db } from '@/lib/firebase.config';

const page = async () => {
  const session = await auth();
    const name =session?.user?.name
  const uid = session?.user?.id

  if (!session) {
    redirect("/auth/signin");
  }

  const fetchRecipe = async ()=>{
      const docRef = collectiondoc(db, "recipes", uid);
      const q = query(docRef, where("authorId", "==", uid))

      const querySnapshot = await getDoc(q)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, "=>", doc.data());
      });

    }
    fetchRecipe()

  let x = name.split(" ")
  console.log(x[0])
  let username = x[0]

  return (
    <main className='min-h-dvh'>
      <section className=''>
        <div className="h-[30vh] bg-[url('/smartRemainders.jpg')] bg-no-repeat bg-center bg-cover relative">
          <img 
            src={session?.user?.image}
            alt={session?.user?.name.slice(0,1).toUpperCase()}
            className='w-40 h-40 rounded-full absolute -bottom-[50%] left-[45%]'
                />
        </div>
        <div className='mt-30'>
        <h1 className='text-center text-3xl text-gray-800 font-bold uppercase'>
          {session?.user?.name}
        </h1>
        <div className='flex flex-col item-center gap-10'>
          <p className='text-xl text-gray-700'>@{username.toLowerCase()}</p>
          <span className='flex items-center gap-1 text-sm text-gray-600'>
            <MdOutlineMailOutline/>{session?.user?.email}</span>
        </div>
        </div>
      </section>

      <Editprofile currentName={name} userId={uid}/>
    </main>
  )
}

export default page
