import React from 'react'
import {app} from './Firebase'
import { getAuth } from 'firebase/auth'
import { Navigate } from 'react-router-dom'


function ProtectedRoute({children}) {
    const auth = getAuth(app)
    if(!auth.currentUser){
        return <Navigate to='/'  />

    }
    else{
        return children;
    }
};

export default ProtectedRoute