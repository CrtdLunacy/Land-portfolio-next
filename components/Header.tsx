import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
        <SocialIcon
          url='https://github.com/CrtdLunacy'
          fgColor='gray'
          bgColor='transparent '
        />

        <SocialIcon
          url='https://vk.com/crtd_lunacy'
          fgColor='gray'
          bgColor='transparent '
        />

        <SocialIcon
          url='https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D1%84%D1%80%D0%BE%D0%BB%D0%BE%D0%B2-915382251/'
          fgColor='gray'
          bgColor='transparent '
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          network='email'
          className='cursor-pointer'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
      </motion.div>
    </header>
  )
}
