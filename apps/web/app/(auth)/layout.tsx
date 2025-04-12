import { Meteors } from '@workspace/ui/components/magicui/meteors'
import React from 'react'
import { Rocket, Users, Star, Check } from 'lucide-react'

type Props = {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-5 h-screen'>
        <div className='col-span-3 flex flex-col w-full h-screen items-center justify-center relative overflow-hidden bg-black'>
            {/* Purple gradient effect with spots */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black opacity-70"></div>
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-700/20 blur-3xl"></div>
            <div className="absolute bottom-40 right-40 w-80 h-80 rounded-full bg-purple-800/20 blur-3xl"></div> */}
            
            {/* Content with z-index to appear above gradient */}
            <div className="z-10 flex flex-col items-center max-w-2xl px-4">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-white bg-clip-text text-center text-6xl font-semibold leading-none text-transparent">
                  Recruit The Best Talent
                </span>
                
                <p className="mt-6 text-center text-gray-300 text-lg">
                  Streamline your hiring process and find exceptional candidates
                </p>
                
                <div className="mt-10 grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-900/30 rounded-lg">
                            <Users size={24} className="text-purple-300" />
                        </div>
                        <span className="text-gray-300">Talent Sourcing</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-900/30 rounded-lg">
                            <Check size={24} className="text-purple-300" />
                        </div>
                        <span className="text-gray-300">Efficient Screening</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-900/30 rounded-lg">
                            <Star size={24} className="text-purple-300" />
                        </div>
                        <span className="text-gray-300">Quality Matches</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-900/30 rounded-lg">
                            <Rocket size={24} className="text-purple-300" />
                        </div>
                        <span className="text-gray-300">Fast Onboarding</span>
                    </div>
                </div>
            </div>
            
            {/* Animated meteors effect */}
            <Meteors number={20} />
        </div>
        <div className='col-span-2 h-screen flex flex-col items-center justify-center bg-black'>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout