import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Yourself from './pages/Yourself'
import FirstPage from './pages/FirstPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage/>}></Route>
        <Route path="/introduction" element={<Yourself/>}></Route>
       
      </Routes>
    </div>
  )
}

export default App
