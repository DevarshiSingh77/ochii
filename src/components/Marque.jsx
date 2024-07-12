import React from 'react'
import { motion } from 'framer-motion'

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='  w-full py-20 bg-[#004D43] z-[999]'>
        <div className='text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap pr-30 gap-0'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 10}} className='text-[24vw] leading-none uppercase font-semibold tracking-tighter'>we are ochi</motion.h1>
       <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 10}} className='text-[24vw] leading-none uppercase font-semibold tracking-tighter'>we are ochi</motion.h1>
        
        
        </div>

      
    </div>
  )
}

export default Marque
