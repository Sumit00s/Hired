import React from 'react'
import '../App.css'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'


const AppLayout = () => {
  return (
    <div>
         <div className='grid-background'></div>
         <main className="min-h-screen">
            <Header/>
            <Outlet/>
         </main>
         <div className='p-4 text-center bg-slate-950 mt-10'>Crafted By 🔆 Sumit Sonawane</div>
    </div>
  )
}

export default AppLayout