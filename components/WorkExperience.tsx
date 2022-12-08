import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

const listOfJobs = [
  {
    img: 'https://st2.depositphotos.com/4265001/10158/v/600/depositphotos_101580448-stock-illustration-pug-dog-logo.jpg',
    position: 'Support engineer',
    company: 'Big Data Company',
    dates: '01.04.2012 - 02.03.2020',
    skills: [
      'Kill bugs',
      'Make some hugs',
      'Drink beer from the largest bottle in company',
      'Set my password on c# model on main server',
      'Destroy sleep in all multiverse'
    ]
  },
  {
    img: 'https://st2.depositphotos.com/4265001/10158/v/600/depositphotos_101580448-stock-illustration-pug-dog-logo.jpg',
    position: 'Support engineer',
    company: 'Big Data Company',
    dates: '01.04.2012 - 02.03.2020',
    skills: [
      'Kill bugs',
      'Make some hugs',
      'Drink beer from the largest bottle in company',
      'Set my password on c# model on main server',
      'Destroy sleep in all multiverse'
    ]
  },
  {
    img: 'https://st2.depositphotos.com/4265001/10158/v/600/depositphotos_101580448-stock-illustration-pug-dog-logo.jpg',
    position: 'Support engineer',
    company: 'Big Data Company',
    dates: '01.04.2012 - 02.03.2020',
    skills: [
      'Kill bugs',
      'Make some hugs',
      'Drink beer from the largest bottle in company',
      'Set my password on c# model on main server',
      'Destroy sleep in all multiverse'
    ]
  }
]

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
          {listOfJobs.map(({ img, position, company, dates, skills }, index) => (
            <ExperienceCard
              key={position + index}
              img={img}
              position={position}
              company={company}
              dates={dates}
              skills={skills}
            />
          ))}
        </div>
    </motion.div>
  )
}
