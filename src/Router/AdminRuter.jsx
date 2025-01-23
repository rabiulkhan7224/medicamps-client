import React from 'react';
import useRole from '../hooks/useRole';
import Loader from '../Page/shared/Loader';
import { Navigate } from 'react-router';

const AdminRuter = ({ children }) => {
    const [role, isLoading] = useRole()
    if (isLoading) return <Loader></Loader>
    if (role === 'admin') return children

    return <Navigate to={'/dashboard'} replace='true'></Navigate>
}
export default AdminRuter;