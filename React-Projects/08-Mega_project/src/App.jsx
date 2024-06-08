import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/Auth_Service'
import { logIn, logOut } from './store/Authslice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(()=> {
  authservice.getUserAcc()
  .then((userData)=> {
    if(userData) {
      dispatch(logIn({userData}))
    }
    else {
      dispatch(logOut())
    }
  })
  .finally(() => setLoading(false) )
},[])

return !loading ? (
  <div className='w-full bg-zinc-300 h-screen'>
    <div className='w-full h-screen flex justify-between flex-col p-10'>
    <Header />
    <Outlet />
    <Footer />
  </div>
  </div>
) : null
}

export default App
