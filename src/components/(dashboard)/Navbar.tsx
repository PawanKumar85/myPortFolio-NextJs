import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex gap-20'>
      <h1>Dashboard</h1>
      <nav>
        <ul className='flex gap-6'>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Contact</Link></li>
          <li><Link href="#">Blog</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar