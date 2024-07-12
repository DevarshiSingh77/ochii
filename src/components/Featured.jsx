import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all";

function Featured() {
    const [isH,setIs]=useState(false)
    const [isHo,setIh]=useState(false)
    
  return (
    <div className='w-full py-20 bg-zinc-800'>
        <div className='w-full px-20'>
            <h1 className='text-8xl tracking-tight border-b-[1px] pb-20 border-zinc-700'>Featured Projects</h1>
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'> 
                
                <div onMouseEnter={() => setIs(true)} onMouseLeave={(() => setIs(false))} className='cardcont w-1/2  h-[80vh] relative '>

                <h1 className='absolute  z-[9] left-full flex overflow-hidden -translate-x-1/2 top-1/2 translate-y-1/2 text-8xl tracking-tight'>
                {"FYDE".split("").map((items,index)=>(
                    <motion.span initial={{y: "100%"}} animate={isH ? {y:"0"} : {y:"100%"}} transition={{ease: Power4.easeInOut,delay: index*0.01}} className='inline-block translate-y-full'>{items}</motion.span>
                ))}
                </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                </div>
                <div className='tons mt-4 gap-5 flex items-center' >
                    <button className='w-full text-sm rounded-full bg-zinc-400 p-2'>AUDIT</button>
                    <button className='w-full text-sm rounded-full bg-zinc-400 p-2'>COPYWRITING</button>
                    <button className='w-full text-sm rounded-full bg-zinc-400 p-2'>SALES DESK</button>
                    <button className='w-full  text-sm rounded-full bg-zinc-400 py-2 px-2'>SLIDES DESIGN</button>
                </div>
                </div>
                <div onMouseEnter={() => setIh(true)} onMouseLeave={(() => setIh(false))} className='cardcont  w-1/2 relative  h-[80vh] '>
                <h1 className='absolute overflow-hidden flex  z-[9] right-full translate-x-1/2 top-1/2 translate-y-1/2 text-8xl tracking-tight'>
                {"VISE".split("").map((items,index)=>(
                    <motion.span initial={{y: "100%"}} animate={isHo ? {y:"0"} : {y:"100%"}} transition={{ease: Power4.easeInOut,delay: index*0.01}} className='inline-block translate-y-full'>{items}</motion.span>
                ))}
                </h1>
                <div className='card w-full h-full rounded-xl bg-green-700 overflow-hidden'>
                    <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                    </div>
                    <div className='tons mt-4 gap-5 flex items-center' >
                    <button className='w-1/3 rounded-full text-sm bg-zinc-400 p-2'>AGENCY</button>
                    <button className='w-2/4 rounded-full text-sm bg-zinc-400 p-2'>COMPANY PRESENTATION</button>
                    </div>
                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
