import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ProtectedRoute = ({children}) => {

const {user, loading}= useContext(AuthContext)

const location= useLocation()


if(loading){
    return <LoaderComponent text='Verificando la sesión...'/>
}

if(!user){
    return <Navigate to='/login' state={{from: location.pathname}} replace/>
}
  return children
  
}

export default ProtectedRoute