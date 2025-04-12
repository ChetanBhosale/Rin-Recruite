import React from 'react'
import Logo from './logo'
import { Button } from '@workspace/ui/components/button'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-50 bg-blur-md backdrop-blur-sm w-full h-16 flex items-center justify-between px-4'>
        <Logo />
        <div className='flex items-center gap-4'>
            <Button variant="outline" className=''>
                Create Account
            </Button>
        </div>
    </div>
  )
}

export default Navbar