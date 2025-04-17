import React from 'react'

const Card = ({title, desc, children}) => {
  return (
    <div className='w-full  md:w-[45%] lg:w-[32%] h-[27rem] hover:border-1 border-zinc-400 bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] dark:bg-zinc-900 dark:shadow-none  rounded-lg flex flex-col p-4'>

      <div className="effect w-full h-[75%] rounded-lg bg-slate-50 shadow-[inset_-3px_-25px_8px_-29px_#1f2020] flex items-center justify-center">
        {children}
      </div>

      <div className="w-full h-[25%] mt-2 flex flex-col pl-2 justify-center gap-1">
        <h2 className='text-xl font-bold uppercase text-zinc-600 dark:text-zinc-300'>{title}</h2>
        <p className='text-md text-zinc-500 dark:text-zinc-400 leading-none'>{desc}</p>
      </div>
    </div>
  )
}

export default Card