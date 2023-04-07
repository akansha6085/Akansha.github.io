import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Projects({}: Props) {
  const projects=[1,2,3,4,5];
  return (
    <motion.div
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
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
       Projects
        </h3> 
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thin">
          {projects.map((project, i)=>(
            // eslint-disable-next-line react/jsx-key
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-35 h-screen">
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
              className="xl:h-45 xl:w-45 mt-20"
              src="https://i.ytimg.com/vi/KVIqrUz76jw/hqdefault.jpg" alt=""/>
            <div className="space-y-10 px-0 md:px-10 max-width-6xl">
            <h4 className="text-2xl font-semibold text-center"> 
              <span className="underline decoration-[#F7AB0A]/10">Case Study {i+1} of {projects.length}:</span> UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Project summary : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem placeat sunt quae similique assumenda et a corrupti laboriosam tempora sed facilis, hic illo animi voluptates quo consequatur unde voluptas ipsam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum vitae pariatur ut incidunt temporibus tempore esse expedita eligendi harum doloribus dignissimos quasi, explicabo assumenda nostrum deleniti suscipit repellendus eum! Magnam!
              </p>
            </div>
            </div>
          ))}
          {/* projects */}
          {/* projects */}
          {/* projects */}
        </div>
<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12">

        </div>
        </motion.div>
  )
}

export default Projects