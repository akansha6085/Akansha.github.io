import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

export default function Hero({}: Props) {
    const {text} = useTypewriter({
        words: [
            'Hello , My name is Akansha',
            'Girl-who-loves-Dogs.tsx', 
            '<But_Loves_to_Code_More/>',
            '<Welcome_to_my_Portfolio/>'
        ],
        loop:true,
        delaySpeed:2000
    })
  return (
    <div className='height h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img 
        className='relative rounded-full h-40 w-40 mx-auto object-cover'
        src="/pp-react.jpg" alt="Profile Picture" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                SOFTWARE ENGINEER
            </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
       <span className='mr-3 '>{text}</span>
       <Cursor cursorStyle='|'/>
       </h1>
      <div className='pt-5'>
       
<Link href="#about">
<button className='heroButton'>About</button>
</Link>
 
<Link href="#experience">
<button className='heroButton'>Experience</button>
</Link>

<Link href="#skills">
<button className='heroButton'>Skills</button>
</Link>

<Link href="#projects">
<button className='heroButton'>Projects</button>
</Link>
      
        
        </div>

        </div>
        
        </div>

  )
}

