import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'



type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center' >
    <motion.div
    initial={{
     x:-500,
     opacity:0,
     scale:0.5
    }}
   animate={{
    x:0,
    opacity:1,
    scale:1
   }}
   transition={{
    duration:1.5,
   }}

    className='flex flex-row items-center'>

        {/* Social Icons*/}
        <SocialIcon 
        url="https://www.linkedin.com/in/akansha-kumari-2001/" 
        fgColor='grey' 
        bgColor='transparent' />
        

        <SocialIcon 
        url="https://github.com/akansha6085" 
        fgColor='grey' 
        bgColor='transparent' />

<SocialIcon 
        url="https://www.codechef.com/users/akansha_singh2" 
        fgColor='grey' 
        bgColor='transparent' />

        <SocialIcon 
        url="https://www.instagram.com/miss_plutonian/" 
        fgColor='grey' 
        bgColor='transparent' />


<SocialIcon 
        url="https://youtube.com/channel/UC3ofdQPRc3wygHtCY3GEcDA" 
        fgColor='grey' 
        bgColor='transparent' />

</motion.div>


<motion.div 
initial={{
    x:500,
    opacity:0,
    scale:0.5
   }}
  animate={{
   x:0,
   opacity:1,
   scale:1
  }}
  transition={{
   duration:1.5,
  }}
className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <Link href="#contactme">
        <SocialIcon 
className="cursor-pointer"
        network="email" 
        fgColor='gray' 
        bgColor='transparent' />
</Link>
      
<Link href="#contactme">
<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
</Link>
        

        <Link href="#hero">
        <HomeIcon 
        className="cursor-pointer
        fgColor='gray' 
        bgColor='transparent'
        ml-5
        h-5 w-5 animate-pulse"/>
        </Link>

</motion.div>
</header>

  )
}

export default Header