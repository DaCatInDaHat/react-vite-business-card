import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Info />
      <About />
      <Footer />      
    </>
  )
}

export default App
