"use client"
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div class='font-bold px-5 py-4 h-24 bg-purple-400 flex justify-between items-center'>
      <Link href='/'>CLASS OF 2024</Link>
      <div class='flex font-bold gap-10'>
        <Link href='/About/'>About</Link>
        <Link href='/Product/'>Product</Link>
        <Link href='/Career/'>Career</Link>
        <Link href='/Community'>Community</Link>
      </div>
    </div>
  )
}

export default Header
