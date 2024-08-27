"use client"
import Navbar from '@/components/Navbar'
import React, { useState } from 'react' // Import useState for better error handling
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false); // Track logout state

  const handleLogout = async () => {
    setIsLoading(true); // Set loading state to indicate logout in progress
    try {
      await axios.get("/api/logout");
      toast.success("Logout Successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message || "An error occurred during logout."); // Improved error message
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
  }

  return (
    <>
      <div className='flex mt-3 bg-gray-100'>
        <Navbar />
        <button
          onClick={handleLogout}
          type="button"
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} // Disable button and adjust opacity while loading
        >
          {isLoading ? 'Logging out...' : 'Log out'}
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
      <div className='flex items-center justify-center min-h-[600px] text-4xl font-bold'>
        Home
      </div>
    </>
  )
}

export default Home