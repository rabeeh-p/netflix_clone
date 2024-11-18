import React  from 'react'
import {UserAuth} from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    console.log(user,'userrrrr');
    

    if (!user){
        return <Navigate to='/login'/> 
    }else{
        return children
    }
  
}

export default ProtectedRoute
