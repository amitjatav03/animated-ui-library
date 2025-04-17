import React from 'react'
import { IoMoonOutline } from "react-icons/io5";

import { MdOutlineWbSunny } from "react-icons/md";



const Navbar = ({theme, toggleTheme}) => {

  return (
    <div className='fixed top-7 left-1/2 -translate-x-1/2 bg-zinc-50 dark:bg-zinc-800 w-[85%] h-22 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] shadow-zinc-400 dark:shadow-zinc-700 flex justify-between items-center px-10 z-10'>
        <h1 className='font-[gilroy-med] font-bold  text-4xl text-zinc-600 dark:text-zinc-400'>Animated UI Gallery ✨</h1>
        <input type="text" className='w-60 p-2 h-10 rounded-lg bg-zinc-200' placeholder='Dummy Search for Effects...'/>
        <button onClick={toggleTheme} className='p-3 hover:scale-110 transition-all duration-10 cursor-pointer flex items-center justify-center rounded-lg'>
            {theme == "light" ? <IoMoonOutline size={30} color='gray' /> : <MdOutlineWbSunny size={30} color='white' />}
        </button>
    </div>
  )
}

export default Navbar