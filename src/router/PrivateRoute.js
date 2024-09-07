import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const token = localStorage.getItem('accessToken');

    return token ? <Component {...rest} /> : <Navigate to="/signin" />;
};

export default PrivateRoute;