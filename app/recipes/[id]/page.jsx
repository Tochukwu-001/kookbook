"use server"
import React from 'react'
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import db from '@/lib/firebase.config';
import Link from 'next/link';
import { FaRegTrashAlt } from "react-icons/fa";
import { redirect } from 'next/dist/server/api-utils';
import { auth } from '@/auth';

async function fetchRecipe(id) {
    if(!id) return null
    
    try {
        // create a doc ref
        const docRef = doc(db, "recipes", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            return{id, ...docSnap.data()}
            
        }

    } catch (error) {
        console.error("Error fetch recipe", error);
        alert("Oops, an error occured. Please try again later.")
        
    }
}

const page = async ({params}) => {
    const session = await auth();


    const recData = await fetchRecipe(params.id)
    if (!recData) {
        return (
            <div>
                <h1 className='text-center font-semibold text-2xl text-red-600'>Recipe not found</h1>
                <Link href={"/recipes"} className='text-sm underline text-gray-600 hover:text-black'>Go back</Link>
            </div>
        )
        
         }
     return (
        <div className='min-h-dvh lg:px-20 lg:py-10 p-5 space-y-5'>
            <h1 className='text-center font-extrabold text-gray-800 text-2xl'>{recData.title}</h1>
            <p className='text-center text-sm text-gray-600'>by</p>
            <h1 className='text-center text-xl font-extrabold text-gray-800'>{recData.author}</h1>

            <p className='text-gray-700'>{recData.desc}</p>
            <p className='text-gray-700'>{recData.recipe}</p>
            <div>
                <p className='text-xs m-5'>Posted on {recData.timestamp}</p>
            </div>
            
        </div>
    )
}

export default page