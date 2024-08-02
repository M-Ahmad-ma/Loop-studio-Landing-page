import React from 'react'
import Header from './components/Header'
import Hero from './components/hero'
import VrImage from './components/VrImage'
import Grid from './components/Grid'
import Footer from './components/Footer' 
import './App.css'
function App() { 
  return ( 
    <div className='overflow-x-hidden'>
      <Header /> 
      <Hero />
      <VrImage /> 
      <Grid />
      <Footer />
    </div>
  )
}

export default App 