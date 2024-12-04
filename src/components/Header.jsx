import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const Header = () => {
  return (
    <>
        <nav className='py-4 flex justify-between items-center px-5 w-11/12 mx-auto'>
            <Link><img src='./logo.png' className='h-16' alt="logo" /></Link>
            <Button variant="outline">Login</Button>


        </nav>
    </>
  )
}

export default Header