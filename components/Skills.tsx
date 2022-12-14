import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}



export default function Skills({}: Props) {
  const skills = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
      Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
       Hover over a skill for currency profieciency
      </h3>

      <div className='grid grid-cols-3 md:grid-cols-4 gap-5'>
        {skills.map((item, index) => (
           <Skill
            key={item}
            directionLeft={(index < 8) ? true : false}
           />
        ))}
      </div>
    </motion.div>
  )
}
