"use server"

import React from 'react'
import AddRecipeComponent from '@/components/AddRecipeComponent'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

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
