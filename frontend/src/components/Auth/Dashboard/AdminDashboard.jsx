import React from 'react'
import Header from '../../Others/Header'
import CreateTask from '../../Others/CreateTask'
import AllTask from '../../Others/AllTask'
import TaskNumbers from '../../Others/TaskNumbers'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7 overflow-auto'>
        <Header />
        <CreateTask />
        <AllTask />
        <TaskNumbers />
    </div>
  )
}

export default AdminDashboard