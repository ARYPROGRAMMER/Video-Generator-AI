import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow' >
        <div className='flex gap-3 items-center'>
            <Image src={"/logo.png"} width={80} height={80} alt="logo" />
            <h2 className='font-bold text-xl' >Video Generator AI</h2>  
      </div>

      <div className='flex gap-3 items-center'>
        <Button>
            DashBoard
        </Button>
        <UserButton />
    </div>

    </div>

   
  )
}

export default Header