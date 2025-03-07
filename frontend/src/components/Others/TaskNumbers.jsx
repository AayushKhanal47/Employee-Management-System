import React from 'react'

function TaskNumbers() {
  return (
    <div className='flex m-10 justify-between gap-5 screen'>
        <div className=' rounded-xl h-40 w-[45%] bg-purple-400 px-6 py-9'>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
        <div className=' rounded-xl h-40 w-[45%] bg-green-400 px-6 py-9'>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium '>Completed Task</h3>
        </div>
        <div className=' rounded-xl h-40 w-[45%] bg-orange-400 px-6 py-9'>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium '>Accepted Task</h3>
        </div>
        <div className=' rounded-xl h-40 w-[45%] bg-red-400 px-6 py-9'>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium '>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumbers