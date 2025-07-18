"use server"
<<<<<<< HEAD

import React from 'react'
import AddRecipeComponent from '@/components/AddRecipeComponent'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const page = async () => {
  const session = await auth()
=======
import { auth } from '@/auth'
import AddRecipeComponent from '@/components/AddRecipeComponent'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()

>>>>>>> c8c677974ae8121f15ea98002fb29bca9509705d
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
