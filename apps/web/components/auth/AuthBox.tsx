import React, { FC, ReactNode } from 'react'

interface Props {
  children : ReactNode
}

const Authbox : FC<Props> = ({children}) => {
  return (
    <div className='w-full max-w-md p-8 rounded-lg bg-gradient-to-b from-slate-500/20 to-gray-950/15 text-gray-200'>
      {children}
    </div>
  )
}

export default Authbox