import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex gap-5 w-full mx-auto p-2 justify-center'>
        <Link to="/" className='bg-blue-400 rounded-md p-2 px-4 text-white'>Home</Link> 
        <Link to="/dashboard"className='bg-blue-400 rounded-md p-2 px-4 text-white'>Dashboard</Link>
        <Link to="/task2" className='bg-blue-400 rounded-md p-2 px-4 text-white'>Task 2</Link>
        <Link to="/task3" className='bg-blue-400 rounded-md p-2 px-4 text-white'>Task 3</Link>
      </nav>
  )
}

export default Header