import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        src='https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images/artworkimages/medium/1/pug-dog-holding-toy-bone-grey-background-chris-amaral.jpg'
        alt='about-photo'
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5
        }}
        viewport={{
          once: true,
        }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-10 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a {' '} <span className='underline decoration-violet-600'>little</span> background
        </h4>
        <p className='text-sm'>
        Hello!
        My name is Slava, I have been studying front-end development for about 1.5 years.
        My Git - https://github.com/CrtdLunacy
        At the moment, unfortunately, there is no full-fledged commercial experience, but there is a great desire to learn everything new and apply this knowledge.
        During the training, I made the first projects on pure JS, after that I tried to use the re: dom library to work more efficiently with the DOM tree.
        Then I switched to React.
        I also tried to create projects on React + TS, I have an understanding of how to work with TS, but there is no complete independent project yet.
        I plan to further learn how to work with next.js.

        In my work I use both the CSS modular system and Tailwind.

        I would appreciate any feedback :{')'}
        </p>
      </div>
    </motion.div>
  )
}
