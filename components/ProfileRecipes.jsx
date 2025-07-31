"use client"
import { db } from '@/lib/firebase.config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { TbLoader3 } from "react-icons/tb";


const ProfileRecipes = ({session}) => {
    const [userRecipesArray, setUserRecipesArray] = useState([]);
    const [fetching, setFetching] = useState(true)

    const fetchUserRecipes = async ()=>{
      try {
        const recipeRef = collection(db, "recipes")
        const q = query(recipeRef, where("authorId", "==", session.user.id))

        const querySnapshot = await getDocs(q)
        const recipesArray = []

        for(const doc of querySnapshot.docs){
            const userRecipe = {
              id: doc.id,
              ...doc.data(),
            };
            recipesArray.push(userRecipe);
            setUserRecipesArray(recipesArray)
            setFetching(false)
        }

      } catch (error) {
        console.error(error)
        alert('Failed to load Recipes')
      } finally{
        setFetching(false)
      }
    }
    useEffect(()=>{
      fetchUserRecipes()
    }, [userRecipesArray])

    if (fetching) {
      return(
        <div className='flex items-center justify-center p-5'>
          <TbLoader3 className='animate-spin text-3xl text-blue-500'/>
        </div>
      )
    }

    if (userRecipesArray.length == 0) {
      return(
        <div>
          <h1>No Recipes Yet.</h1>
          <p>When you share recipes, they will appear here.</p>
        </div>
      )
    }
  return (
    <main>

    </main>
  )
}

export default ProfileRecipes
