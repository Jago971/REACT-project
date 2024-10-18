import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import Options from './components/Options'
import Output from './components/Output'
import Reset from './components/Reset'
import Title from './components/title'

function App() {

  const [input1, setInput1] = useState(0)
  const [tipPercentage, setPercentage] = useState(0)
  const [input2, setInput2] = useState(0)
  const [tipPP, setTipPP] = useState(0)
  const [totalPP, setTotalPP] = useState(0)

  function clickHandler5() {
    setPercentage(5)
  }
  function clickHandler10() {
    setPercentage(10)
  }
  function clickHandler15() {
    setPercentage(15)
  }
  function clickHandler25() {
    setPercentage(25)
  }
  function clickHandler50() {
    setPercentage(50)
  }
  function handleChange1(event) {
    let min = 1;
    let max = 999;
    let value = event.target.value
    value = Math.max(Number(min), Math.min(Number(max), Number(value)))
    setInput1(value)
  }
  function handleChange2(event) {
    let min = 1;
    let max = 10;
    let value = event.target.value
    value = (Math.max(Number(min), Math.min(Number(max), Number(value))))
    setInput2(value)
  }

  useEffect (() => {
    let tip = (input1 * (tipPercentage/100)) / input2
    let total = ((input1 * (1 + tipPercentage/100)) / input2)
    if(!tip || tip === Infinity) {
      setTipPP(0.00)
    } else {
      setTipPP(tip.toFixed(2))
    }
    if(!total || total === Infinity) {
      setTotalPP(0.00)
    } else {
      setTotalPP(total.toFixed(2))
    }
  }, [input1, tipPercentage, input2])

  function resetHandler() {
    setInput1(0)
    setInput2(0)
    setPercentage(0)
    setTipPP(0)
    setTotalPP(0)
  }

  return (
    <div className='h-screen w-screen bg-cyan-100 flex flex-col justify-center items-center font-mono'>
      <div className='h-1/5'>
      <Title/>
      </div>
      <div className='h-2/5 w-2/5 rounded-2xl bg-white shadow-lg flex'>
        <div className='flex flex-col w-1/2 px-4 justify-between py-6'>
          <Input currentValue={input1} handleChange={handleChange1} text={'Bill'}/>
          <Options 
          percent5={clickHandler5} 
          percent10={clickHandler10} 
          percent15={clickHandler15} 
          percent25={clickHandler25} 
          percent50={clickHandler50} 
          text={'Select Tip %'}/>
          <Input currentValue={input2} handleChange={handleChange2}  text={'Number of People'}/>
        </div>
        <div className='w-1/2 p-4 gap-4'>
          <div className='flex flex-col h-full p-2 gap-2 bg-teal-800 rounded-2xl'>
            <div className='h-1/2 w-full flex flex-col justify-evenly'>
            <Output text={'Tip Amount'} num={tipPP}/>
            <Output text={'Total'} num={totalPP}/>
            </div>
            <div className='h-1/2 w-full flex items-end'>
            <Reset resetHandler={resetHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
