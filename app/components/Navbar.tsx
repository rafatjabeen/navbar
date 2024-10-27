"use client";

import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav className= "bg-lime-400 text-red-600 h-12 py-2 px-4 flex justify-between items-center ">

            <div className= "flex items-center space-x-2">
                <img
                src= "logo.jpeg"
                alt= "logo"
                className= "w-10 h-10 rounded-full"
                />
                <h1 className= "text-2xl font-semibold">
                    <a href="#!">Rafat Jabeen</a>
                </h1>
            </div>

            <div>
                <ul className= "flex space-x-5" >
                    <li><Link href="/" className= "hover:text-indigo-700">Home</Link></li>
                    <li><Link href="/about" className= "hover:text-indigo-700">About</Link></li>
                    <li><Link href="/contactus" className= "hover:text-indigo-700">Contact Us</Link></li>
                </ul>
            </div>

            <div>
                <ul className= "flex space-x-3">
                    <li><Link href= "#!"  className= "hover:text-indigo-700">Login</Link></li>
                    <li><Link href= "#!"  className= "hover:text-indigo-700">Signup</Link></li>
                </ul>
            </div>
        </nav>

    </div>
  )
}

export default Navbar;