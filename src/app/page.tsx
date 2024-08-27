"use client"
import Link from 'next/link'
import React from 'react'


const Portfolio = () => {
    return (
        <>
            <div className='flex justify-between max-w-6xl mx-auto p-4'>
                <h1 className='text-2xl font-bold'>Logo</h1>
                <nav>
                    <ul className='flex gap-4 font-semibold'>
                    <li>
                            <Link href={"/login"}>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Sigup
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/login"}>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Login
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
            {/* Portfolio page content */}
            <div className='flex min-h-[600px] items-center justify-center text-4xl font-bold'>
                <h1>Portfolio</h1>
<h1> Typescript,NextJs, Tailwind and MongoDB</h1>

            </div>
        </>
    )
}

export default Portfolio