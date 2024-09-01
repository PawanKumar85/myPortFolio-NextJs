"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'
import Spinner from '@/components/Spinner';

const Login = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [loading, setLoading] = React.useState(false)

    const setEmail = (event: any) => {
        setFormData({
            ...formData,
            ["email"]: event.target.value
        })
    }

    const setPassword = (event: any) => {
        setFormData({
            ...formData,
            ["password"]: event.target.value
        })
    }

    const resetForm = () => {
        setFormData({
            email: '',
            password: '',
        })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('/api/login', formData);
            toast.success('Logged in successfully!');
            resetForm();
            router.push('/dashboard');
        } catch (error) {
            toast.error('Invalid credentials!');
            resetForm();
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            {
                loading ?
                    <Spinner />
                    :
                    <div className="border border-gray-300 p-6 rounded-lg shadow-md w-[400px] max-w-sm">
                        <h2 className="text-center text-2xl font-semibold text-gray-800">Admin Login</h2>
                        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                                    value={formData.email}
                                    onChange={setEmail}
                                    required
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                                    value={formData.password}
                                    onChange={setPassword}
                                    required
                                />
                            </div>
                            <button className="bg-blue-500 text-white py-3 px-4 rounded-lg w-full hover:bg-blue-600">Login</button>
                            <Link href="#" className="text-blue-500 flex justify-end hover:underline">Forgot Password?</Link>
                        </form>
                        <Link href={"/signup"}>
                            <button className="bg-gray-200 text-gray-800 py-3 px-4 rounded-lg w-full mt-4 hover:bg-gray-300">Signup</button>
                        </Link>
                    </div>}
        </div>
    );
};

export default Login;