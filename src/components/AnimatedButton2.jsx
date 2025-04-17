import React from 'react'
import {motion} from 'framer-motion'

const AnimatedButton2 = ({label}) => {
  return (  
    <button
      className="relative rounded-full border-1 border-zinc-500 font-semibold px-10 py-5 overflow-hidden group"
    >
      <span className="absolute inset-0 bg-zinc-900 transition-transform duration-200 translate-y-full group-hover:translate-y-0 z-0"></span>

      <span className="relative text-2xl text-zinc-600 group-hover:text-white">{label}</span>
    </button>

  )
}

export default AnimatedButton2