import React from 'react'
import Header from '../../Others/Header'
import TaskNumbers from '../../Others/TaskNumbers'
import TaskList from '../../Auth/TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg- [#1c1c1c] h-screen'>
        <Header />
        <TaskNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard