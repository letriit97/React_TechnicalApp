import React, { useEffect, useState } from 'react'
import { LoginRequest } from '../../models/authentication/Authentication';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { useLocation } from 'react-router';
import { login, logout } from '../../store/account/actions';
import { AccountActionTypes } from '../../store/account/types';

export const Login = () => {
    const [inputs, setInputs] = useState<LoginRequest>({
        username: 'Administrator',
        password: '',
        isRememberMe: false
    });

    const [submitted, setSubmitted] = useState(false);
    const loading = useSelector<AppState>((state) => state.account.loading);
    const { username, password, isRememberMe } = inputs;
    const dispatch = useDispatch<any>();
    const location = useLocation();

    useEffect(() => {
        dispatch(logout());
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    //  Set submitted to true
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        if (username && password) {
            // get return url from location state or default to home page
            const { returnUrl } = location.state || { from: { pathname: "/" } };

            dispatch(login(inputs, returnUrl));
        }
    }

    return (
        <div className="container">
            {/* Outer Row */}
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input type="text" className={`form-control form-control-user ${submitted && !username ? 'is-invalid' : ''}`}
                                                        name='username' onChange={handleChange} placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className={`form-control form-control-user ${submitted && !password ? 'is-invalid' : ''}`}
                                                        name='password' onChange={handleChange} placeholder="Password" />
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" htmlFor="customCheck">
                                                        
                                                    </label>
                                                </div>
                                            </div> */}
                                            <button className="btn btn-primary btn-user btn-block" type="submit">
                                                {loading && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                                Đăng nhập
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
