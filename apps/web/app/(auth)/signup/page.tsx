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
        Create your account
      </h1>
      <p className='text-gray-500 mt-1 font-thin'>create account and be the part of Rin Recruite Team</p>
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
          <div className='flex flex-col gap-2'>
            <Label className='ml-1'>
              Confirm Password
            </Label>
            <Input type='password' placeholder='confirm password' />
          </div>

          <div className='flex flex-col gap-2'>
          <Label className='ml-1 mt-2'>
                Choose Account Type
            </Label>
            <RadioGroup defaultValue="recruiter" className='ml-2 mt-2'>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="recruiter" id="r2" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="candidate" id="r3" />
                <Label htmlFor="r3">Candidate</Label>
              </div>
            </RadioGroup>
          </div>

          <div className='flex flex-col w-full mt-2'>
            <Button className="bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-600 hover:to-gray-800 transition-colors duration-500 text-white flex items-center group">
              Signup <ArrowRight />
            </Button>
          </div>

        </form>
        <Button className='mt-4 w-full' variant='outline'>
              <BsGoogle /> Continue with Google
            </Button>
      </div>
      <p className='text-center mt-3 text-sm text-gray-400'>
        Already have an account
        <Link className='ml-1 hover:underline text-gray-100' href='/signin'>
          signin
        </Link>
        </p>
    </Authbox>
  )
}
export default Signup
