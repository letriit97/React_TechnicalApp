import React from 'react';
import { Navigate } from 'react-router-dom';
import { AccountState } from '../store/account/types';
import { AppState } from '../store';
import { useSelector } from 'react-redux';


/**
 * Kiểm tra xem người dùng đã đăng nhập chưa, nếu chưa thì chuyển hướng về trang đăng nhập
 * @param {*} { element }
 * @return {*} 
 */
const PrivateRoute = ({ element }) => {
    const account: AccountState = useSelector((state: AppState) => state.account);
    return account.token ? element : <Navigate to="/dang-nhap" />;
};

export default PrivateRoute;