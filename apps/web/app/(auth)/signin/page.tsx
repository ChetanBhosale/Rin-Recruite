'use client'

import Authbox from '@/components/auth/AuthBox'
import { Button } from '@workspace/ui/components/button'
import { Input } from '@workspace/ui/components/input'
import { Label } from '@workspace/ui/components/label'
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { FormEvent } from 'react'
import { BsGoogle } from 'react-icons/bs'

const Signup = () => {
  function handleSubmit(e : FormEvent<HTMLFormElement>){
    e.preventDefault()
  }
  return (
    <Authbox >
      <h1 className='font-bold text-xl'>
        Welcome back 
      </h1>
      <p className='text-gray-500 mt-1 font-thin'>welcome back, we hope you find the best talent, job</p>
      <div className='my-7'>
        <form onSubmit={handleSubmit}  className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <Label className='ml-1'>
              Email
            </Label>
            <Input type='email' placeholder=' email' />
          </div>
          <div className='flex flex-col gap-2'>
            <Label className='ml-1'>
              Password
            </Label>
            <Input type='password' placeholder='password' />
          </div>
          <div className='flex flex-col w-full mt-2'>
            <Button className="bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-600 hover:to-gray-800 transition-colors duration-500 text-white flex items-center group">
              Signin <ArrowRight />
            </Button>
          </div>

        </form>
        <Button className='mt-4 w-full' variant='outline'>
              <BsGoogle /> Continue with Google
        </Button>
        
        <p className='text-center mt-3 text-sm text-gray-400'>
        Dont have an account
        <Link className='ml-1 hover:underline text-gray-100' href='/signup'>
          signup
        </Link>
        </p>
        
      </div>
    </Authbox>
  )
}

export default Signup