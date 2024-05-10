import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
const [username, setUsername] = useState(" ")
const [password, setPassword] = useState(" ")

const {setUser} = useContext(UserContext)

const handleSubmit = (e) => {
    e.preventDeafult()
    setUser({username, password})
}

  return (
    <>
    <div className='flex justify-center items-center w-full'>
      <div>
        <h2 className='text-center font-bold text-lg py-5'>Login</h2>
        <div className='flex flex-col '> 
        <div className='pb-5'>
        <h2 className='text-lg font-semibold'> UserName: <input type='text' className='outline'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'/> </h2>
        </div>
        {" "}
        <div>
        <h2 className='text-lg font-semibold'> Password:   <input type='password' className='outline' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'/> </h2>
        </div>
        </div>
        <div className='w-full text-center py-5'>
        <button onClick={handleSubmit} className='w-full font-semibold text-lg bg-zinc-600 max-w-[10rem] border-2 '>Submit</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login