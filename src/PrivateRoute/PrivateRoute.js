import React from 'react';
import {  useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <h1>loading</h1> }

    if (!user.email) {

        return <Navigate to="/login" state={{ from: location }}  />;
    }
    return children;
    
};

export default PrivateRoute;