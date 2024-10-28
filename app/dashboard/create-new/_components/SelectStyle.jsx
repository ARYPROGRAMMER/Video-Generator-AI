"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle({onUserSelect}) {

    const styleOptions = [
        {
            name:"Realistic",
            image:'/realistic.png'
        },
        {
            name:"Cartoon",
            image:'/cartoon.png'
        },
        {
            name:"Comic",
            image:'/comic.png'
        },
        {
            name:"Watercolor",
            image:'/watercolor.png'
        },
        {
            name:"CyberPunk",
            image:'/cyberpunk.png'
        },
    ]

    const [selectedStyle, setSelectedStyle] = useState()
  return (
    <div className='mt-7'>
        <h2 className='font-bold text-xl text-primary'>
            Styles
        </h2>
        <p className='text-gray-500'>
            Select the Style for your Video
        </p>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
        gap-5 mt-3
        '>
            {styleOptions.map((item,index)=>(
                <div className=
                {`relative hover:scale-110 transition-all cursor-pointer
                rounded-xl
                ${selectedStyle == item.name&&'border-4 border-primary'}
                
                `} key={index}>
                    <Image src={item.image} 
                    width={1300} height={2300} 
                    alt={item.name}
                    className='h-full object-cover rounded-lg w-full'
                    
                    onClick={()=>
                        
                        {
                            setSelectedStyle(item.name)
                            onUserSelect('imageStyle',item.name)
                        }

                    }
                    
                    />

                    <h2 className='absolute p-1 bg-black bottom-0 
                    text-white
                    text-center
                    rounded-b-lg
                    w-full'>
                        {item.name}
                    </h2>
                </div>
            ))} 
        </div>
    </div>
  )
}

export default SelectStyle