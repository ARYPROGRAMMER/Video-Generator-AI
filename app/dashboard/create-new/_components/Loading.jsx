import React from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'

function CustomLoading({loading}) {
  return (
    <AlertDialog open={loading}>
        <AlertDialogTitle>
        <AlertDialogContent className='bg-white'>
           <div className='bg-white flex flex-col items-center my-10 justify-center'>
            <Image src='/soon.gif' width={100} height={100} alt='loading' />
            <h2>
                Generating your Video...Keep Calm
            </h2>
           </div>
        </AlertDialogContent>
        </AlertDialogTitle>
    </AlertDialog>

  )
}

export default CustomLoading