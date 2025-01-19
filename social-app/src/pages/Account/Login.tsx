import React, { useEffect, useState } from 'react'
import { LoginRequest } from '../../models/authentication/Authentication';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { useLocation } from 'react-router';
import { login, logout } from '../../store/account/actions';
import { decrement, increment } from '../../store/CountReducer';
import { useForm, SubmitHandler } from 'react-hook-form'

export const Login = () => {
    const loading = useSelector<AppState, boolean>((state) => state.account.loading);
    let error = useSelector<AppState, string | null>((state) => state.account.error);
    const count = useSelector<AppState, number>((state) => state.counter.count);

    const dispatch = useDispatch<any>();
    const location = useLocation();

    const { register, handleSubmit, formState: { isSubmitted } } = useForm<LoginRequest>({
        defaultValues: {
            username: 'Administrator',
            password: 'Admin@'
        }
    });
    const onSubmit: SubmitHandler<LoginRequest> = (data: LoginRequest) => {
        console.log(data);
        // get return url from location state or default to home page
        const { returnUrl = "/" } = location.state || {};
        console.log("Login - returnUrl:", returnUrl)
        dispatch(login(data, returnUrl));
    }

    useEffect(() => {
        error = null;
    }, []);


    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setInputs(inputs => ({ ...inputs, [name]: value }));
    // }

    // //  Set submitted to true
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setSubmitted(true);
    //     if (username && password) {
    //         // get return url from location state or default to home page
    //         const { returnUrl = "/" } = location.state || {};
    //         dispatch(login(inputs, returnUrl));
    //     }
    // }

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
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back! {count} </h1>
                                            <button onClick={() => dispatch(increment())}> Tăng </button>
                                            <button onClick={() => dispatch(decrement())}> Giảm </button>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <input
                                                    {...register('username', {
                                                        required: true
                                                    })
                                                    }
                                                    type="text" className={`form-control form-control-user ${isSubmitted && !register('username') ? 'is-invalid' : ''}`}
                                                    name='username' placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password"
                                                    {...register('password',
                                                        { required: true })
                                                    }
                                                    className={`form-control form-control-user ${isSubmitted && !register('password') ? 'is-invalid' : ''}`}
                                                    name='password' placeholder="Password" />
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" htmlFor="customCheck">
                                                        
                                                    </label>
                                                </div>
                                            </div> */}
                                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                            <button className="btn btn-primary btn-user btn-block" type="submit" disabled={loading}>
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
