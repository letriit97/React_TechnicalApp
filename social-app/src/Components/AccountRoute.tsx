import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppState } from '../store';
import { AccountState } from '../store/account/types';


const AccountRoute = ({ element }) => {
  const account: AccountState = useSelector((state: AppState) => state.account);
  return account.token ? <Navigate to="/" /> : element;
};


export default AccountRoute;
