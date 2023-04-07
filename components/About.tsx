import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    transition={{
        duration:1.2
    }}
    whileInView={{
        opacity:1
    }}
    className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <h3
        className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
            </h3>
        <motion.img
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        viewport={{once:true}}
         className='-mb-20 mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-[200px] md:h-[300px] xl:w-[300px] xl:h-[400px] object-cover '
         src="/dp2.jpg" alt="Profile Picture" />
      
<div className='space-y-10 px-0 md:px-10  xl:px-10'>
    <h4 className='text-4xl font-semibold'>
        Here is a <span className='underline decoration-[#d5f4e6]/50'>little</span> Background
    </h4>
    <p className='text-base'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quia autem recusandae beatae omnis nostrum amet saepe. Nam, sunt, hic possimus illum sapiente ab repellat suscipit dolore sit quod voluptatum.
    </p>
</div>

        </motion.div>
  )
}