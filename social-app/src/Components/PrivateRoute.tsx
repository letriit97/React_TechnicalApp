import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    isAuthenticated: boolean;
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuthenticated }) => {
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;