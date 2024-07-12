import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen bg-zinc-900 p-10 flex justify-center'>
        <div className='w-1/2 mt-20'>
        <h1 className='text-8xl tracking-tighter'>EYE-</h1>
        <h1 className='text-8xl tracking-tighter'>OPENING</h1>
        </div>
        <div className='w-1/2 mt-20 relative'>
        
        <h1 className='text-8xl tracking-tighter relative '>PRESENTATIONS</h1>
        <div className='w-1/2  '>
        <h1 className='mt-7 mb-5'>S:</h1>
        <a href="" className='border-b-2 border-zinc-400'>Instagram</a>
        <br />
        <a href="" className='border-b-2 border-zinc-400'>Facebook</a>
        <br />
        <a href="" className='border-b-2 border-zinc-400'>Linkden</a>
        <br />
        <a href="" className='border-b-2 border-zinc-400'>Whatsapp</a>
        <br />
        
        <h1 className='mt-7 mb-5 '>L:</h1>
        <h1 className='underline'>202-1965 W 4th Ave</h1>
        <h1 className='mb-4 underline'>Vancouver, Canada</h1>

        <h1 className='underline'>30 Chukarina St
        </h1>
        <h1 className='underline'>Lviv, Ukraine</h1>
        <div className='mt-7 mb-5'>
            <h1 className='mb-5'>E:</h1>
            <h1>devarshi.singh.2003@gmail.com</h1>
        </div>
        </div>
        <div className='w-1/2 absolute translate-x-[150%] -translate-y-[200%]  '>
        <h1 className='mb-5'>M:</h1>
        <a href="">About us</a>
        <br />
        <a href="">Our Work</a>
        <br />
        <a href="">Contact us</a>
        <br />
        <a href="">Insights</a>
        
        
        </div>
        </div>
        
        
      
    </div>
  )
}

export default Footer
