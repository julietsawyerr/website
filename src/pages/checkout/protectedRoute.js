import React from 'react'
import {useAuth} from '../../context/authContext'
import {Outlet, Navigate} from 'react-router-dom'

function ProtectedRoute(){
    const {currentUser} = useAuth()
    return(
        <>
            {currentUser ? <Outlet /> :  <Navigate to="/login" replace={true} />}
        </>
    )
}

export default ProtectedRoute;