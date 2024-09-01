"use client"
import Link from 'next/link';
import Navbar from './../components/(LandingPage)/Navbar';


const page = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar />
            <div className='flex flex-col min-h-[600px] items-center justify-center'>
                <p className='italic text-4xl text-orange-400 font-bold'>Under Construction.....</p>
                <div className='mt-10'>
                    <h1 className='text-2xl text-red-600 font-semibold mt-10'>Technology using :</h1>
                    <ul>
                        <li>Next Js</li>
                        <li>Typescript</li>
                        <li>Tailwind</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page