import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-800'>
        <div className='cont w-full flex items-center justify-center gap-5 px-20 pt-32 pb-40 border-t-2 border-zinc-700'>
            <div className='cards w-2/3 h-[30vw] bg-green-800 rounded-xl'> 
            <h1 className=' text-8xl font-bold tracking-normal translate-x-[30%] translate-y-[140%] text-yellow-200'>ochi</h1>
            </div>
            <button className='cards w-1/3 h-[30vw] rounded-xl bg-zinc-900 '>
            
           
            <img className=' translate-x-[60%] translate-y-[10%]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='uppercase rounded-full bg-zinc-500 px-4 py-2 text-sm tracking-tight -translate-x-[20%] translate-y-[350%]'>rating 5.0 on clutch</button>
            
            
            </button>
            <button className='cards w-1/3 h-[30vw] rounded-xl bg-zinc-900 pl-5 '>
            
           
            <img className=' translate-x-[10%] translate-y-[0%] '  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='uppercase  rounded-full bg-zinc-500 px-4 py-2 text-sm tracking-tight -translate-x-[10%] translate-y-[150%]'>business bootcamp alumini</button>
            
            
            </button>
        
        </div>
      
    </div>
  )
}

export default Cards
