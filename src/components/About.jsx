import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] text-black'>
        <h1 className='text-7xl tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full flex gap-5 border-t-[1px]  mt-20 border-[#a1b562]'>
            <div className='w-1/2 '>
            <h1 className='text-7xl pt-10'>Our approach:</h1>
            <button className='flex uppercase items-center gap-10 px-10 py-5 mt-10 bg-zinc-900 rounded-full text-white' >Read More
                <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
            </button>
            </div>
            
            <img className="w-1/2 h-[60vh] rounded-3xl mt-10"src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            
        </div>
      
    </div>
  )
}

export default About
