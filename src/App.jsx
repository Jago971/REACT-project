import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wrap from './components/Wrap/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Wrap/>
    </>
  )
}

export default App
