import React from 'react'

const AnimeCard2 = () => {
  return (
    /* From Uiverse.io by Cybercom682 */ 
    <div class="space-y-2 p-4">
        <div
            role="alert"
            class="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105"
        >
            <p class="text-xs font-semibold">Success - Everything went smoothly!</p>
        </div>

        <div
            role="alert"
            class="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105"
        >
            <p class="text-xs font-semibold">
            Info - This is some information for you.
            </p>
        </div>

        <div
            role="alert"
            class="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-yellow-200 dark:hover:bg-yellow-800 transform hover:scale-105"
        >
            <p class="text-xs font-semibold">
            Warning - Be careful with this next step.
            </p>
        </div>

        <div
            role="alert"
            class="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
        >
            <p class="text-xs font-semibold">Error - Something went wrong.</p>
        </div>
    </div>

  )
}

export default AnimeCard2