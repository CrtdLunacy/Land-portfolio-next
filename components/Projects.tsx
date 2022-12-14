import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, index) => (
          <div
          key={project}
          className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
               initial={{ opacity: 0, y: -300 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2 }}
               viewport={{ once: true }}
            src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
            alt="project-photo" />


            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-violet-400'>Case Study {index + 1} of {projects.length}:</span> UPS Clone
              </h4>

              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus eligendi nobis rem ducimus, repudiandae iste vel enim. Exercitationem, magni! Corrupti, deleniti illo. Beatae quibusdam tempora voluptates rerum quia veritatis.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-violet-500/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}
