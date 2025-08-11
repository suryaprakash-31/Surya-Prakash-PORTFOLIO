import React from 'react'
import aboutImg from "../assets/aboutSurya2.jpg"
import { ABOUT_TEXT } from '../constants'
import {motion} from 'framer-motion'

export const About = () => {
  return (
    <div className='border-b border-neutral-900 pd-4'>
        <motion.h1 whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}} className='my-20 text-center text-4xl'>About <span className='text-neutral-500'> Me</span></motion.h1>
        <div className="flex flex-wrap">
          <motion.div whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className='w-60 h-auto object-contain rounded-xl' />
          </div>
          </motion.div>
           <motion.div whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}} className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-center">
            <p className='my-2 maxw-xl py-6'>{ABOUT_TEXT}</p>
          </div>
          </motion.div>

        </div>
       

    </div>
  )
}
