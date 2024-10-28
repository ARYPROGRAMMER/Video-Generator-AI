"use client"
import { Button } from '@/components/ui/button'
import React,{useState} from 'react'
import { Open_Sans } from 'next/font/google'
import EmptyState from './_components/EmptyState';
  
const open_sans = Open_Sans({subsets: ["latin-ext"],style:"normal",weight: "700"});

function Dashboard() {

  const [videoList,setVideoList] = useState([]);
  return (
    <div >
       <div className='flex justify-between items-center'>
        <h2 className={`font-extrabold text-2xl text-primary ${open_sans.className} `} >
          Dashboard
        </h2>
        <Button>Create New</Button>
       </div>

       {/* Empty State */}
       {videoList?.length==0&&<div>
        <EmptyState/>
       </div>}
    </div>
  )
}

export default Dashboard