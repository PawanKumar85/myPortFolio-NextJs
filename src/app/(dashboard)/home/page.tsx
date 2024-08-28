"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/(dashboard)/Navbar'
import Spinner from '@/components/Spinner'

const Home = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await axios.get("/api/logout");
      toast.success("Logout Successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message || "An error occurred during logout.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex items-center pt-3 justify-between'>
        <Navbar />
        <button onClick={handleLogout} disabled={isLoading} className='bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600' >Logout</button>
      </div>
      <div className='flex min-h-[600px] items-center justify-center'>
        {isLoading ? <Spinner /> : <h1 className='text-3xl font-bold'>Home</h1>}

      </div>
    </div>

  )
}

export default Home