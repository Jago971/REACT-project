import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Options from './components/Options'
import Output from './components/Output'

function App() {

  return (
    <div className='h-screen w-screen bg-cyan-100 flex flex-col justify-center items-center'>
      <div className='h-2/5 w-2/5 rounded-2xl bg-white shadow-lg flex'>
        <div className='tst flex flex-col justify-center items-center w-1/2 p-4 gap-4'>
          <Input/>
          <Options/>
          <Input/>
        </div>
        <div className='tst w-1/2 p-4 gap-4'>
          <div className='tst flex flex-col justify-center items-center h-full p-2 gap-2 bg-teal-900 rounded-2xl'>
            <div className='tst grow w-full'>
              <Output/>
              <Output/>
            </div>
            <div className='tst grow w-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
