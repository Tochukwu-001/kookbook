"use client"
import React from 'react'
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from '@/lib/firebase.config';
import Link from 'next/link';
import { FaRegTrashCan } from "react-icons/fa6";
import { auth } from '@/auth';

async function fetchRecipies(id) {
    if(!id) return null
    try {
        // create a doc ref
        const docRef = doc(db,"recipies", id)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
            return{id,...docSnap.data()}
        }
    } catch (error) {
        console.error("Error fetching recipe", error)
        alert("Oops,an error occured. Please try again later")
    }    
}

const page = async ({params}) => {
    const session = await auth();

      const handleDelete = async (id)=>{
    await deleteDoc(doc(db,"recipies", id))
    fetchRecipies()
  }

    const recData = await fetchRecipies(params.id)
    if (!recData) {
        return(
            <div>
                <h1 className='text-center font-semibold text-2xl text-red-600'>Recipies not found</h1>
                <Link href={"/recipies"}className='text-sm underline text-gray-600 hover:text-black'>Go back</Link>
            </div>
        )
    }

  return (
    <main className='min-h-dvh lg:px-20 lg:py-10 p-5'>
      <h1 className='text-center font-extrabold text-2xl text-gray-800'>{recData.title}</h1>
      <p className='text-center text-sm text-gray-600'>by</p>
      <h1 className='text-center text-xl font-extrabold text-gray-800'>{recData.author}</h1>
      <p className='text-gray-700'>{recData.desc}</p>
      {/* <div>
        <p className='text-xs mt-5'> Posted on {recData.timestamp}</p>
        <button onClick={handleDelete(recData.id)}>
            <FaRegTrashCan className='text-red-600 text-lg hover:text-red-800 
            transition-all' />
        </button>
      </div> */}
      
    </main>
  )
}

export default page
