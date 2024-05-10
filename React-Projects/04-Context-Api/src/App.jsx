import React from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
    <UserContextProvider>
    <Login />
    <Profile />  

    </UserContextProvider>
    </div>
  )
}

export default App