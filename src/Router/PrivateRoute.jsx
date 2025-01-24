import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Page/shared/Loader';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()
    if(user) return children
    if(loading) return <Loader></Loader>
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;