import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] =  useState(false);
  const [charAllowed, setcharAllowed] =  useState(false);
  const [password, setPassword] = useState('');

  const passwordgenerator = useCallback(()=>{
    let pass = '';
    
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*"
    }
   for (let i = 1; i<= length; i++) {
    let passgen = Math.floor(Math.random() * str.length + 1) 
    pass += str.charAt(passgen)
   }
   setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword]
)

const passref = useRef('null')

const copytoclipboard = () => {
  window.navigator.clipboard.writeText(password)
  passref.current?.select()
  passref.current?.setSelectionRange(0, 99)
}
useEffect(()=>{
  passwordgenerator()
 },[length, numAllowed, charAllowed, passwordgenerator])

  return (
    <>  
    <div className='w-full bg-zinc-900 h-screen flex justify-center items-center'>  
    <div className='w-full max-w-lg bg-zinc-800 rounded-md p-4 mx-auto'>
      <h1 className='text-[#ffffff] text-[2vw] text-center'>Passowrd Generator</h1>
      <div className='flex justify-center items-center'> 
      <input className = 'px-5 py-3 mx-5 my-5 rounded-xl outline-none' type='text' value={password} placeholder='Enter Password' readOnly ref={passref} />
      <button className='bg-blue-600 text-[#ffffff] px-5 py-3 text-lg font-semibold rounded-md' onClick={copytoclipboard}>Copy</button>
    </div>

    <div className='flex justify-center items-center gap-2 '>
    <input onChange = {(e) => {setLength(e.target.value)}} type = 'range' min={8} max={100} value={length}></input>
    <label className='text-[#FFA500] font-semibold text-lg'>Length: {length}</label>
    <input type='checkbox' defaultChecked = {numAllowed} id='number-input' onChange={() => {setnumAllowed((prev) => !prev)}}></input>
    <label htmlFor='number-input' className='text-[#FFA500] font-semibold text-lg'>Numbers</label>
    <input type='checkbox' defaultChecked = {charAllowed} id='character-input' onChange={() => {setcharAllowed((prev) => !prev)}}></input>
    <label htmlFor='character-input' className='text-[#FFA500] font-semibold text-lg'>Chararcters</label>
    </div>
    </div>
    </div>
    </>

  )
}

export default App