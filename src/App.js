import React from 'react'
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/Home'
import Intro from './components/Intro/Intro'
import Info from './components/Info/info'

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Intro/>
        <Info/>
    </div>
  )
}

export default App