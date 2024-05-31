import React from 'react'
import {useDispatch} from 'react-redux'
import authservice from '../appwrite/Auth_Service'
import { logOut } from '../store/Authslice'

function LogOutBtn() {

    const logOutHandler = () => {
        authservice.createLogOut() .then(() => {
            dispatch(logOut())
        })
    }

  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logOutHandler}>
        LogOutBtn
        </button>
  )
}

export default LogOutBtn