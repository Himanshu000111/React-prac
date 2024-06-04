import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authservice from '../appwrite/Auth_Service'
import {useDispatch} from 'react-redux'
import { logIn } from '../store/Authslice'
import Input from './Input'
import Logo from './Logo'
import Button from './Button'

function Login() {
  const Navigate = useNavigate()
  const Dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState('')
  const logInAction = async(data) => {
    setError('')
    try {
     const session =  await authservice.createLogIn(data)
     if(session) {
      const userData = await authservice.getUserAcc()
      if(userData){
        Dispatch(logIn(userData))
        Navigate('/')
      }
     }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit = {handleSubmit(logInAction)} className='mt-8'>
        <div className='space-y-5'>
          <Input 
          label = "Email: "
          type= "email"
          placeholder = "Enter Your Email"
          {...register('email', {
            required: true,
            validate: {
              matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
              "Email address must be a valid address",
          }
          })}
          />
          <Input 
          label = "Password: "
          type= "password"
          placeholder = "Enter Your Password"
          {...register('password', {
            required: true,
          })}
          />
        <Button
        btntxt= "SigIn"
        type= 'submit' 
        className='w-full'/>
        </div>
        </form>
        </div>
        </div>
  )
}

export default Login