"use client"

import { useEffect, useState } from "react"
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { MdOutlineDirectionsRun } from "react-icons/md";




const Navbar = ({handleLogout}:any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    
      <header className="w-full fixed top-0 right-0 left-0 border-b-2 shadow-lg">
        <nav className={`py-4 md:px-8 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""}`}>
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl cursor-pointer  text-gray-600 body-font">
              <Link href={"/"} style={{fontFamily:"Caveat"}}>Dashboard</Link>
            </div>

            <div className="lg:flex items-center gap-3 hidden">
              <Link href={"/"} className="block hover:underline underline-offset-8 duration-200 transition-all py-2 px-4">Home</Link>
              <Link href={"/"} className="block hover:underline underline-offset-8 duration-200 transition-all py-2 px-4">About</Link>
              <Link href={"/"} className="block hover:underline underline-offset-8 duration-200 transition-all py-2 px-4">Projects</Link>
              <Link href={"/"} className="block hover:underline underline-offset-8 duration-200 transition-all py-2 px-4">Blogs</Link>
              <Link href={"/"} className="block hover:underline underline-offset-8 duration-200 transition-all py-2 px-4">Contact</Link>
            </div>

            <div className="lg:block hidden">
              <button className="primaryBtn" onClick={handleLogout}>
                <div className="flex">
                  <span className="mr-2">Log out</span>
                  <MdOutlineDirectionsRun size={24} />
                </div>
              </button>
            </div>

            <button className="lg:hidden text-blue-700 text-3xl" onClick={toggleMenu}>
              <HiMenu />

            </button>
          </div>

          {
            isMenuOpen && (
              <div className="mt-4   rounded py-4 lg:hidden">
                <Link href={"/"} className="block hover:bg-gray-200 py-2 px-4 rounded-md">Home</Link>
                <Link href={"/"} className="block hover:bg-gray-200 py-2 px-4 rounded-md">About</Link>
                <Link href={"/"} className="block hover:bg-gray-200 py-2 px-4 rounded-md">Projects</Link>
                <Link href={"/"} className="block hover:bg-gray-200 py-2 px-4 rounded-md">Blogs</Link>
                <Link href={"/"} className="block hover:bg-gray-200 py-2 px-4 rounded-md">Contact</Link>
                <Link href={"/"} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none py-2 px-4 rounded-md w-full flex items-center justify-center gap-3 mt-4" onClick={handleLogout}>
                <span>Log out</span>
                <MdOutlineDirectionsRun />
                </Link>
              </div>
            )
          }
        </nav>
      </header>
  )
}

export default Navbar;