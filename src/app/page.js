import React from 'react'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900'>
<h1 className='text-4xl font-bold text-white tracking-wide drop-shadow-md'>
<Link href='/audioanalaysis' className='text-white group-hover:text-gray-300 drop-shadow-md transition-all duration-300'>
<span>
Get Presentation Feedback
</span>
</Link>
</h1>
</div>
  )
}
