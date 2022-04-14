import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
     const { user, loading, admin } = useAuth();
    let location = useLocation();
    if (loading) { return <div className="text-center mt-5">
    <Spinner animation="grow" />
</div> }

    if (!user.email && admin) {

        return <Navigate to="/" state={{ from: location }}  />;
    }
    return children;
    
};

export default AdminRoute;