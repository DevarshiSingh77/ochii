import React, { useEffect, useState } from 'react'

function Ear() {
    let [rot,setRot]=useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;
            let deltaX=mouseX-window.innerWidth/2;
            let deltaY=mouseY-window.innerHeight/2;
            var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRot(angle-180);
            
        })
    })
  return (
    <div className='eyes w-full h-screen px-20 py-20 bg-zinc-950  '>
        <div data-scroll data-scroll-section data-scroll-speed=".6" className=' relative w-full h-full bg-center bg-green-950'>
            <div className='absolute flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
            <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-400'>
                <div  className=' relative w-2/3 h-2/3 bg-black rounded-full'>
                <div style={{transform: `translate(-50%,-50%) rotate(${rot}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <div className='w-10 h-10 bg-zinc-300 rounded-full '></div>
                </div>
                </div>
            </div>
            <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-400'>
            <div className='relative w-2/3 h-2/3  bg-black rounded-full'>

            <div style={{transform: `translate(-50%,-50%) rotate(${rot}deg)`}} className=' line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <div className='w-10 h-10 bg-zinc-300 rounded-full '></div>
                </div>
            </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Ear
