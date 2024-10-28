import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

function DashboardLayout({children}) {
  return (
    <div >
        <div className='hidden md:block h-screen fixed mt-[110px] w-64'>
            <SideNav />
        </div>

        <div >
            <Header />
            <div className='md:ml-64 p-10'>
            {children}
            </div>
         
        </div>
    
    </div>
  )
}

export default DashboardLayout