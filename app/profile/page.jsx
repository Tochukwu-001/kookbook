"use server";
import { auth } from '@/auth';
import React from 'react'

const page = async () => {
  const session = await auth()
  return (
    <main className='min-h-dvh'>
      my profile
    </main>
  )
}

export default page
