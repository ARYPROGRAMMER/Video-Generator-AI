"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import {Outfit} from 'next/font/google'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'

const outfit = Outfit({subsets: ["latin-ext"],weight: "600"});

function CreateNew() {

  const [formData,setFormData]= useState([])
  const onHandleChange=(fieldName,fieldValue)=>{
    console.log(fieldName,fieldValue)
    setFormData(
      prev=>({
        ...prev,
        [fieldName]:fieldValue
      })
    )
  }
  return (
    <div className='md:px-20'>
      <h2 className={`text-4xl text-primary text-center ${outfit.className}`}>Create A New Video</h2>

      <div className='mt-7 shadow-md p-10'>
        {/* Select Topic */}
        <SelectTopic onUserSelect={onHandleChange}/>

        {/* Select Style */}
        <SelectStyle onUserSelect={onHandleChange}/>
        
        {/* Duration */}
        <SelectDuration onUserSelect={onHandleChange}/>

        {/* Create Button */}
        <Button className='mt-10 w-full h-10'>
          Generate The Video
        </Button>

      </div>
    </div>
  )
}

export default CreateNew