import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authservice from '../appwrite/Auth_Service'
import {useDispatch} from 'react-redux'
import { logIn } from '../store/Authslice'
import Input from './Input'
import Logo from './Logo'
import Button from './Button'

function Signup() {

const Navigate = useNavigate()
const Dispatch = useDispatch()
const [error, setError] = useState('')
const SignupAction = async(data) => {
    setError('')
    try {
        const newSession = await authservice.createAccount(data)
        if(newSession){
            const UserData = await authservice.getUserAcc()
            if(UserData) {
                Dispatch(logIn(UserData))
                Navigate('/')
            }
        }
    } catch (error) 
    {
     setError(error.message)   
    }
}
     return (
        <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign In
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit = {handleSubmit(SignupAction)} className='mt-8'>
        <div className='space-y-5'>
          <Input 
          label = "Full Name: "
          placeholder = "Enter Your Name"
          {...register('name', {
            required: true,
          })}
          />
        <Input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", {
                required: true,
                validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
            })}
            />
        <Input
            label="Password: "
            placeholder="Enter your Password"
            type="password"
            {...register("password", {
                required: true,
            })}
            />
        <Button
            btntxt= "Create Account"
            type= 'submit' 
            className='w-full'/>
            </div>
          </form>
            </div>
            </div>
     )
}

export default Signup