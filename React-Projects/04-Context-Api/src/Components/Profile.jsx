import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

   if (!user) return <div className='text-center font-semibold text-xl'> Please enter login details </div>

   return <div className='text-center font-semibold text-xl'> Welcome {user.username} </div>
  
}

export default Profile