// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import type { AccountState } from '../store/account/types';
import type { AppState } from '../store';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
    const account: AccountState = useSelector((state: AppState) => state.account);
    return account.token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;