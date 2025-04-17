import React from 'react'

const LoaderDottedSpin = () => {
  return (
    <div class="text-center">
        <div
            class="w-28 h-20 border-4 border-dashed rounded-full animate-spin border-purple-500 mx-auto"
        ></div>
        <h2 class="text-zinc-800 mt-6">Loading...</h2>
        <p class="text-zinc-600 dark:text-zinc-400">
            Your adventure is about to begin
        </p>
    </div>

  )
}

export default LoaderDottedSpin