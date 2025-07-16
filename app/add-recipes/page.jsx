"use server"
import { auth } from '@/auth'

import { redirect } from 'next/navigation'
import React from 'react'
import AddRecipeComponent from '../components/AddRecipeComponent'

const page = async () => {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <AddRecipeComponent session={session}/>
    </main>
  )
}

export default page