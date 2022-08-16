import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import './App.css'
import Card from './Card'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/Card" element={<Card/>}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App