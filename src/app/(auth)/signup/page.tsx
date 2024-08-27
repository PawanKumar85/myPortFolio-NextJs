"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'
import Spinner from '@/components/Spinner';

const Signup = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [loading, setLoading] = React.useState(false)

    const setEmail = (event: any) => {
        setFormData({
            ...formData,
            ["email"]: event.target.value
        });
    }

    const setPassword = (event: any) => {
        setFormData({
            ...formData,
            ["password"]: event.target.value
        });
    }

    const setConfirmPassword = (event: any) => {
        setFormData({
            ...formData,
            ["confirmPassword"]: event.target.value
        });
    }

    const resetForm = () => {
        setFormData({
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/signup", formData);
            toast.success(response.data.message);
            resetForm();
            router.push('/login')
        } catch (error: any) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            {
                loading ?
                    <Spinner /> :
                    <div className="border border-gray-300 p-6 rounded-lg shadow-md w-[400px] max-w-sm">
                        <h2 className="text-center text-2xl font-semibold text-gray-800">Signup</h2>
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
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                                    value={formData.confirmPassword}
                                    onChange={setConfirmPassword}
                                    required
                                />
                            </div>
                            <button className="bg-blue-500 text-white py-3 px-4 rounded-lg w-full hover:bg-blue-600">Signup</button>
                        </form>
                        <p className="text-gray-500 text-sm mt-4">Already have an account?
                            <Link href="/login" className="text-blue-500">Login</Link>
                        </p>
                    </div>}
        </div>
    );
};

export default Signup;