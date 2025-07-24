"use server"
import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/lib/firebase.config';

async function fetchRecipe(id) {
    if(!id) return null

    try {
        // create a doc ref
        const docRef = doc(db, "recipes", id)
        const docSnap = await getDoc(docRef)
    } catch (error) {
        console.error("Error fetching recipe", error)
        alert("Oops, an error occurred. Please try again later.")
    }
}

const page = () => {
  return (
    <div>
      id
    </div>
  )
}

export default page
