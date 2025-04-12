import React from 'react'
import { Meteors } from '@workspace/ui/components/magicui/meteors'
import { Button } from '@workspace/ui/components/button'
import AnimatedHeroButton from './animated-hero-button'

const Hero = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Meteors number={30} />
      
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-blue-500 to-blue-400/80 bg-clip-text text-center text-8xl mb-1 font-semibold leading-none text-transparent dark:from-purple-500 dark:to-purple-100/80">
        Rin Recruite
      </span> */}
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-700">
        Find & Hire Top Talent, Faster
      </span>

      <div className="mt-4 text-center text-lg font-light">
        <p className="bg-gradient-to-tl from-gray-300 to-gray-500 dark:from-white dark:to-slate-500 bg-clip-text text-transparent">
          <span className="font-bold bg-gradient-to-b dark:from-purple-100 dark:to-purple-900/80 bg-clip-text text-transparent">Rin Recruite</span> is your smart hiring partner simplifying your recruitment process,
        </p>
        <p className='bg-gradient-to-tl from-gray-300 to-gray-500 dark:from-white dark:to-slate-500 bg-clip-text text-transparent'> automating candidate tracking, and connecting you with the best-fit professionals, all in one place.</p>
      </div>
      <div className='flex items-center justify-center'>
        <AnimatedHeroButton />
      </div>
    </div>
  )
}

export default Hero
