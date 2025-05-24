import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl'>
    <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
    {/* <img src="/OP-New.png" alt="Orator Path Logo" style={{ width: '50px', height: '50px', borderRadius: '45%' }} /> */}
    {/* logo */}
    <Link href='/' className='text-2xl font-medium group cursor-pointer'>
  <span className='text-white group-hover:text-gray-300 drop-shadow-md transition-all duration-300'>
    Orator
  </span>
  <span className='text-white group-hover:text-gray-300 drop-shadow-md transition-all duration-300'>
    Path
  </span>
</Link>



      {/* add a navigation menu */}
      <nav>
        <ul className='flex gap-4'>
          <Link href='/' className='text-white group-hover:text-gray-300 drop-shadow-md transition-all duration-300'>Home</Link>
          <Link href='/about' className='text-white group-hover:text-gray-300 drop-shadow-md transition-all duration-300'>About</Link>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <SignInButton className='text-white group-hover:text-gray-300 drop-shadow-md transition-all duration-300'/> 
          </SignedOut>
        </ul>
      </nav>
    </div>
  </header>
  )
}
