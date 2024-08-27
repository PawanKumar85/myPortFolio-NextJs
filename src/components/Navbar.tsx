import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto'>
                <nav>
                    <ul className='flex gap-6 p-4 justify-end'>
                        <li><Link href='#'>Home</Link></li>
                        <li><Link href='#'>About</Link></li>
                        <li><Link href='#'>Services</Link></li>
                        <li><Link href='#'>Contact</Link></li>
                        <li><Link href='#'>Blog</Link></li>
                        <li><Link href='#'>Portfolio</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar