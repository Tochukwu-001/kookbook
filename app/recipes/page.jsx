import { auth } from '@/auth'
import React from 'react'
import RecipeComponent from '../components/RecipeComponent'
import { redirect } from 'next/navigation'


const page = async () => {
  const session = await auth()

  if (!session){
    redirect("/auth/signin")
  }

  return (
      <main>
        <RecipeComponent session={session}/>

      </main>
  )
}

export default page