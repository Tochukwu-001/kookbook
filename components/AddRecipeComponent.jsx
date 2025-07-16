"use server"
import AddRecipeComponent from '@/components/AddRecipeComponent'
import React from 'react'

const page = ()=>{
    return(
        <main>
            <AddRecipeComponent session/>
        </main>
    )
}

export default page