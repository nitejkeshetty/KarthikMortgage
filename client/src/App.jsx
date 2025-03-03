import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Home" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
