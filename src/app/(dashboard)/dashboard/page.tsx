"use client"
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/(dashboard)/Navbar'
import Spinner from '@/components/Spinner'
import Home from '@/components/(dashboard)/Home'

interface imageData {
  _id: string,
  image: string,
}

const Dashboard = () => {
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

  if(isLoading){
    return <Spinner />
  }

  return (
    <div className='md:max-w-6xl mx-auto'>
    <Navbar handleLogout={handleLogout}/>
    <Home />
    </div>

  )
}

export default Dashboard