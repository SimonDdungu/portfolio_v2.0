"use client"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function NotFound(){
  return (
    <section className='w-screen h-screen flex flex-col justify-center items-center text-white'>
        <div className="text-center space-y-5 mb-10">
          <h1 className='font-semibold tracking-wider text-2xl'>404 | PAGE NOT FOUND</h1>
          <p className='text-gray-300 text-lg'>It's not your fault.<br/>It's the government.</p>
        </div>


        <button onClick={() => redirect('/')} className="cursor-pointer px-4 py-2 bg-(--dark-blue) text-gray-200 rounded-lg hover:bg-blue-900 transition-all ease-in-out duration-300">
          Back Home
        </button>
    </section>
  )
}