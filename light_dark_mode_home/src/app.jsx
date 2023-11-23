import { useState } from 'preact/hooks'
import './app.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

export function App() {

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}
