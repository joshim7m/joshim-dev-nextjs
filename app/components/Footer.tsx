import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#03071B] text-gray-400 py-8'>
      <div className='w-full max-w-1170 mx-auto px-2 md:px-0'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
          <div className='fy-center flex-col md:flex-row gap-2'>
            <h2 className='text-3xl font-bold'>Joshim</h2>
            <p className='text-sm'>&copy; 2022 Joshim dev, All rights reserved.</p>
          </div>
          <div>
            <div className='flex items-center gap-3'>
              <Linkedin size={20} />
              <Instagram size={20} />
              <Github size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer