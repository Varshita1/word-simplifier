import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
     <Navbar title="Word-Simplifier"/>
     <div className="container my-6">
    <h1>Enter Your Text to Analyze </h1>
     <TextForm/>
     </div>
    
     </>
  
  )
}

export default App