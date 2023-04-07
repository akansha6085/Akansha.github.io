import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return <article className='snap-center mt-20 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] h-[450px] md:w-[600px] xl:w-[900px] xl:h-[500px] bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img 
    initial={{
      y:-100,
      opacity:0
    }}
transition={{
    duration:1.2
}}
whileInView={{
    opacity:1,y:0
}}
viewport={{once:true}}

    className='rounded-full h-20 w-20 xl:w-[100px] xl:h-[100px] object-cover object-center'
    src='https://yt3.ggpht.com/ytc/AMLnZu-O2AGI2v-j54LxerYkJsLrvo1XSEaaf1aQE7LNcw=s900-c-k-c0x00ffffff-no-rj'/>
     <div className='px-0 md:px-10'>
     <h4 className='text-4xl font-light '>Global Instructor at CampK12</h4>
     <p className='font-bold text-2xl mt-1 '>CampK12</p>
     
     <div className='flex space-x-2 my-2'>
        <img className='h-10 w-10 rounded-full' src='https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png'/>
        <img className='h-10 w-10 rounded-full' src='https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png'/>
        <img className='h-10 w-10 rounded-full' src='https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png'/>
        <img className='h-10 w-10 rounded-full' src='https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png'/>
        {/* tech used */}
        {/* tech used */}
        {/* tech used */}
        </div>
     <p className='uppercase py-5 text-gray-300'>Started work.... - ....Ended work</p>

     <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li> Summary Points Summary Points Summary Points </li>
        <li>Summary Points Summary Points Summary Points  </li>
        <li>Summary Points Summary Points Summary Points  </li>
        <li>Summary Points Summary Points Summary Points  </li>
        <li>Summary Points Summary Points Summary Points  </li>
     </ul>

     </div>
  </article>
}

export default ExperienceCard