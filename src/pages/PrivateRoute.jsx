import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    if (loading) {
        return <div className='flex justify-center'><span className="loading w-48 loading-spinner text-error"></span></div>
    }
    if (user) {
       return children
    }
  return (
    <Navigate to={"/login"}></Navigate>
  )
}
