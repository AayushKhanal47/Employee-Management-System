import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10'>
        <div  className='flex-shrink-0 h-[90%] w-[400px] p-5  bg-red-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>6 March 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Perform a task</h2>
        <p className='text-sm mt-2 '>
            Please complete the task as soon as possible
        </p>
        </div>
        <div  className='flex-shrink-0 h-[90%] w-[400px] p-5  bg-green-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>6 March 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Perform a task</h2>
        <p className='text-sm mt-2 '>
            Please complete the task as soon as possible
        </p>
        </div>
        <div  className='flex-shrink-0 h-[90%] w-[400px] p-5  bg-purple-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>6 March 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Perform a task</h2>
        <p className='text-sm mt-2 '>
            Please complete the task as soon as possible
        </p>
        </div>
        <div  className='flex-shrink-0 h-[90%] w-[400px] p-5  bg-orange-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>6 March 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Perform a task</h2>
        <p className='text-sm mt-2 '>
            Please complete the task as soon as possible
        </p>
        </div>
       
    
    </div>
    
    
    
  )
}

export default TaskList