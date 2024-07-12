import { motion } from 'framer-motion';
import React from 'react'

function LandingPage() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
        <div className='textstructure mt-52  px-20'>
            {["we create","eye opening","presentations"].map((item,index)=>{
                return (<div className="masker ">
                    <div className='w-fit flex items-center'>
                    {index===1 && (<div className="w-[9vw] h-[6.4vw] pr-10 mt-7 relative  ">
                        <motion.img initial={{width: 0}} animate={{width:"9vw"}} transition={{ ease: [0.7, 0, 0.84, 0],duration: 1}}  className="w-[9vw] h-[6.7vw] absolute overflow-hidden p-1 -translate-x-[10%] -translate-y-[12%]"src="https://mir-s3-cdn-cf.behance.net/projects/404/384b7f187087377.Y3JvcCwzNzMzLDI5MjAsMzIzLDA.png" alt="" />
                    </div>)}
                <h1 className='uppercase text-9xl leading-[none] tracking-tighter font-semibold'>{item}</h1>
            </div>
            </div>);
            })}
            
        </div>
        <div className="border-t-[1px] mt-32 border-zinc-700 flex justify-between items-center px-20 py-5">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p className="text-md font-light tracking-tight leading-none">{item}</p>
            ))}
            <div className="start">
                <button className="px-4 py-2 border-[1] border-zinc-500 rounded-full text-sm bg-zinc-500 uppercase">Start the project</button>
            </div>
        </div>
      
    </div>
  )
}

export default LandingPage
