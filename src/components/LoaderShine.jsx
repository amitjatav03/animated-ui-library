import React from 'react'

const LoaderShine = () => {
  return (
    <div
    class="p-3 animate-spin bg-gradient-to-bl from-blue-400 via-green-400 to-indigo-600 md:w-42 md:h-42 h-32 w-32 aspect-square rounded-full"
    >
    <div
        class="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-background-blur-md"
    ></div>
    </div>

  )
}

export default LoaderShine