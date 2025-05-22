import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddBlog from './components/AddBlog'
import Navbar from './components/Navbar'

function App() {
  

  return (
    
      <div className='p-4'>
        <Navbar />
        <Routes>
          <Route path='/'
          element={<Dashboard/>}/>
          <Route path='/addblog'
          element={<AddBlog/>}/>
        </Routes>
     
      </div>
  )
}
export default App
