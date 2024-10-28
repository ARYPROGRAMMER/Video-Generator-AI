"use client"
import React,{useState} from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

function SelectTopic({onUserSelect}) {
    const options=[
        'Custom Prompt',
        'Random AI Story',
        'Scary Story',
        'Historical Facts',
        'Bed Time Story',
        'Motivational',
        'Fun Facts'
    ]

    const [selectedOption, setSelectedOption] = useState()

  return (
    <div>
        <h2 className='font-bold text-xl text-primary'>
            Content
        </h2>
        <p className='text-gray-500'>
            Select the topic of your Content
        </p>

        <Select onValueChange={(value)=>
            {
                setSelectedOption(value)
                value!='Custom Prompt' && onUserSelect('topic',value)

            }
        }>
            <SelectTrigger className="w-full mt-5 p-6 text-sm">
            <SelectValue placeholder="Content Type"/>
            </SelectTrigger>
            <SelectContent>
                {options.map((item,index)=>(
                    <SelectItem key={index} value={item}>{item}</SelectItem>
                ))}
             
            </SelectContent>
        </Select>

        {

            selectedOption=='Custom Prompt' &&
                <Textarea className="mt-5"
                
                onChange={(e)=>onUserSelect('topic',e.target.value)}
                placeholder="Write a Prompt to Generate a Video"/>
        }
    </div>
  )
}

export default SelectTopic