"use client"
import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import { FaEdit } from "react-icons/fa";

const Home = () => {
    const [values, setValue] = useState({
        name: '',
        title: '',
        phone: '',
        email: '',
        birthday: '',
        working: '',
        permanent: ''
    });

    const resetForm = () => {
        setValue({
            name: '',
            title: '',
            phone: '',
            email: '',
            birthday: '',
            working: '',
            permanent: ''
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/dashboard/home', values);
            console.log(res.data);

            resetForm();
            toast.success(res.data.message);
        } catch (error: any) {
            console.error(error);

            // Improve error handling by checking if there's a response
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }
    };

    return (
        <section className="text-gray-600 body-font mt-4">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="flex items-center justify-center p-12">
                    {/* Author: FormBold Team */}
                    <div className="mx-auto w-full max-w-[550px] bg-gray-100">
                        <form onSubmit={handleSubmit}>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Full Name"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            onChange={handleChange}
                                            value={values.name}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="title" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            placeholder="Title"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            onChange={handleChange}
                                            value={values.title}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={handleChange}
                                    value={values.phone}
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="birthday" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Birthday
                                </label>
                                <input
                                    type="date"
                                    name="birthday"
                                    id="birthday"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={handleChange}
                                    value={values.birthday}
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="working" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Working Address
                                </label>
                                <input
                                    type="text"
                                    name="working"
                                    id="working"
                                    placeholder="Enter Working Address"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={handleChange}
                                    value={values.working}
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="permanent" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Permanent Address
                                </label>
                                <input
                                    type="text"
                                    name="permanent"
                                    id="permanent"
                                    placeholder="Enter Permanent Address"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={handleChange}
                                    value={values.permanent}
                                />
                            </div>

                            <div>
                                <button type='submit' className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none flex gap-4 items-center justify-center">
                                    <span>Submit</span>
                                    <FaEdit size={24} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    {/* component */}
                    <div className="border border-dashed border-gray-500 relative">
                        <input type="file" multiple className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" />
                        <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                            <h4>
                                Drop files anywhere to upload
                                <br />or
                            </h4>
                            <p >Select Files</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;
