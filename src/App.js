import React from 'react'
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/Home'
import Intro from './components/Intro/Intro'
import Info from './components/Info/info'
import MobiTech from './components/MobiTech/MobiTech'
import Assistance from './components/Assistances/Assistance'

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Intro/>
        <Info/>
        <MobiTech/>
        <Assistance/>
    </div>
  )
}

export default App
