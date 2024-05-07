import React from 'react'

function Inputbox(
    {label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency = 'usd'
}) {
  return (
    <>
    <div className='w-full bg-zinc-100 rounded-xl flex justify-between items-center  my-5 p-5'>
    <div className= 'w-1/2 flex flex-col gap-2'>
    <label>
     {label}
    </label>
    <input type='number' value={amount} placeholder='Amount' onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} className='bg-transparent outline-none w-full py-2 '/>
    </div>
    <div className='flex flex-col justify-end text-right'> 
      <p>Currency Type</p>
      <select value= {selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'>

        {currencyOptions.map((items,index)=> (
          <option key={index} value={items}>
            {items}
          </option>
        ))}
      </select>
    </div>
    <div>
      
    </div>


    </div>
    </>
  )
}

export default Inputbox