import React from 'react';
import {  useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import {Navigate} from 'react-router-dom'
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, loading } = useAuth();
    let location = useLocation();
    if (loading) { return <div className="text-center mt-5">
    <Spinner animation="grow" />
</div> }

    if (!user.email) {

        return <Navigate to="/login" state={{ from: location }}  />;
    }
    return children;
    
};

export default PrivateRoute;