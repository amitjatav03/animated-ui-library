import React from 'react'

const AnimeButton3 = ({label}) => {
  return (
    <button
      className="relative rounded-full border-1 border-zinc-500 font-semibold px-10 py-5 overflow-hidden group"
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full inset-0 bg-green-900 transition-all duration-400 origin-center scale-0 group-hover:scale-100 z-0"></span>

      <span className="relative text-2xl text-zinc-600 group-hover:text-white">{label}</span>
    </button>
  )
}

export default AnimeButton3