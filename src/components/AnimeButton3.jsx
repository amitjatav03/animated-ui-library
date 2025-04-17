import React from 'react'

const AnimeButton3 = ({label}) => {

  
  return (
    <button
      className="relative rounded-full font-semibold px-10 py-5 overflow-hidden group bg-blue-600 text-white"
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full inset-0 bg-amber-400 transition-all duration-500 origin-center scale-0 group-hover:scale-100 z-0"></span>

      <span className="relative text-2xl text-white group-hover:text-black">{label}</span>
    </button>
  )
}

export default AnimeButton3