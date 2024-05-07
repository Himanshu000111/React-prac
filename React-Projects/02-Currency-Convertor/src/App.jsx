import React from 'react'
import Inputbox from './components/Inputbox'
import {useState} from 'react'
import useCurrencyInfo from './hooks/useCurencyInfo'

function App() {

const [amount, setAmount] = useState(0)
const [from, setFrom] = useState('usd')
const[to, setTo] = useState('inr')
const[convertedAmount, setConvertedAmount] = useState(0)

const currencyInfo = useCurrencyInfo(from)

const options = Object.keys(currencyInfo)

const swap = () => {
   setFrom(to)
   setTo(from)
   setAmount(convertedAmount)
   setConvertedAmount(amount)
}

const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
}

  return (
    <>
    <div className='w-full h-screen bg-[url("https://images.pexels.com/photos/17035125/pexels-photo-17035125/free-photo-of-moon-in-night-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")] bg-cover bg-center flex justify-center items-center'>
      <div className='container w-full max-w-lg bg-[#cccc] h-[50vh] rounded-xl border-2 mx-auto flex flex-col justify-center items-center px-5'>
        <form
        onSubmit={(e) => {
          e.preventDefault();
          convert()}}>
      <Inputbox 
      label = "From"
      amount = {amount}
      currencyOptions= {options}
      selectCurrency={from}
      onAmountChange={(amount)=> setAmount(amount)}
      onCurrencyChange={(currency)=> setFrom(currency)}
       />
       <button onClick={swap()} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"> 
        swap
       </button>
      <Inputbox 
            label = "To"
            amount = {convertedAmount}
            currencyOptions= {options}
            selectCurrency={to}
            onCurrencyChange={(currency)=> setTo(currency)} />
            <button type='submit' className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
      </form>
      </div>
    </div>
    </>
  )
}

export default App