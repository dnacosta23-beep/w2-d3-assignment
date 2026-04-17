import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Footer from './components/Footer'

function App() {

  const [number, setNumber] = useState("")

  function getLuckyNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    setNumber(randomNumber)
  }   

  return (
     <div className = "App">  
    {console.log(number)}
    <Header number = {number} />
    <Buttons getLuckyNumber = {getLuckyNumber} />
    <Footer />   
     </div>
  )
}

export default App
