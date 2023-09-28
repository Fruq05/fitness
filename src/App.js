import React from 'react'
import Navbar from './components/navbar/Navbar'
import "./App.css"
import Avatar from './components/Avatar'
import Steps from './components/Steps'
import Banner from './components/Banner'
import Class from './components/Class'
import Experience from './components/Experience'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Avatar/>
      <Banner/>
      <Steps/>
      <Class/>
      <Experience/>
      
      
    </div>
  )
}

export default App
