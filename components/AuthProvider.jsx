"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const AuthProvider = ({ childeren }) => {
  return (
    <main>
      <SessionProvider>{childeren}</SessionProvider>
    </main>
  )
}

export default AuthProvider
