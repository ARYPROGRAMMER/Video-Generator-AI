import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

function SelectDuration({onUserSelect}) {
  return (
    <div className='mt-7'>
        <h2 className='font-bold text-xl text-primary'>
            Duration
        </h2>
        <p className='text-gray-500'>
            Select the Duration of the Video
        </p>

        <Select onValueChange={(value)=>
            {
                value!='Custom Prompt' && onUserSelect('duration',value)

            }
        }>
            <SelectTrigger className="w-full mt-5 p-6 text-sm">
            <SelectValue placeholder="Select Duration"/>
            </SelectTrigger>
            <SelectContent>
              
                <SelectItem  value='15 Seconds'>15 Seconds</SelectItem>
                <SelectItem  value='30 Seconds'>30 Seconds</SelectItem>
                <SelectItem value='60 Seconds'>60 Seconds</SelectItem>
               
             
            </SelectContent>
        </Select>
    </div>
  )
}

export default SelectDuration