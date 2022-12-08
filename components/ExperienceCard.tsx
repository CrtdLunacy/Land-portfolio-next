import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  img: string;
  position: string;
  company: string;
  dates: string;
  skills: Array<string>;
}

export default function ExperienceCard({ img, position, company, dates, skills }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-violet-800/40 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover'
        src={img}
        alt={company}
      >

      </motion.img>

      <div className='px-0 md:px-10'>
         <h4 className='text-4xl font-light'>{position}</h4>
         <p className='font-bold text-2xl mt-1'>{company}</p>
         <div className='flex space-x-2 my-2'>
          <img
          className='h-10 w-10 rounded-full'
            src="https://toppng.com/public/uploads/preview/html5-logo-11609363747dunzzmadxo.png"
            alt="HTML"
          />

          <img
          className='h-10 w-10 rounded-full'
            src="https://toppng.com/public/uploads/preview/css3-logo-vector-download-11573943110ujyqmvcq4d.png"
            alt="CSS"
          />

          <img
          className='h-10 w-10 rounded-full'
            src="https://www.clipartmax.com/png/middle/150-1504620_javascript-logo.png"
            alt="CSS"
          />
         </div>
        <p className='uppercase py-5 text-gray-300'>{dates}</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {skills.map(skill => (
            <li
            key={skill.substring(0, 4)}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
