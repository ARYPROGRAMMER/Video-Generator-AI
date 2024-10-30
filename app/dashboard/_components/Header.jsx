import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

function Header() {
  const router = useRouter();
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow' >
        <div className='flex gap-3 items-center'>
            <Image src={"/logo.png"} width={80} height={80} alt="logo" />
            <h2 className='font-bold text-xl' >Video Generator AI</h2>  
      </div>

      <div className='flex gap-3 items-center'>
        <div className='flex gap-1 items-center'>
          <Image src={'/star.png'} width={30} height={40} alt='credits'/>
          <h2 className='flex gap-2 items-center font-semibold text-lg'>
            {userDetail?.credits}
          </h2>
        </div>
        <Button onClick={()=>router.replace('/dashboard')}>
            DashBoard
        </Button>
        <UserButton />
    </div>

    </div>

   
  )
}

export default Header