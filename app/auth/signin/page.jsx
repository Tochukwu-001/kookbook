import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const page = () => {
    return (
        <main className='min-h-dvh md:p-10 p-3 space-y-5'>
            <h1 className='text-center font-bold md:text-3xl xl text-gray-700'>Sign In to your account to continue</h1>
            <div className='flex items-center justify-center'>

                <div className='space-y-10 max-md:w-full md:w-xl'>
                    <button className="border flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-full text-xl hover:bg-blue-700 transition-all w-full">
                        <p>Sign In with Google</p>
                        <FaGoogle />
                    </button>
                    <button className='border flex items-center justify-center gap-2 bg-blue-600
                    text-white  py-4 rounded-full text-xl hover:bg-blue-700 transition-all w-full'>
                        <p>Sign in with Github</p>
                        <FaGithub />
                    </button>
                    <button className='border flex items-center justify-center gap-2 bg-blue-600
                    text-white  py-4 rounded-full text-xl hover:bg-blue-700 transition-all w-full'>
                        <p>Sign in with Facebook</p>
                        <FaFacebook />
                    </button>

                </div>
            </div>
            <p className="text-center text-gray-700 mt-5">
                By signing in to our website, you agree to our <span className="underline">Privacy Policy</span>, and <span className="underline">Terms of Use</span>.
            </p>
        </main>
    )
}

export default page