import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useToken from '../../../../hooks/useToken';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [email, setEmail] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user || gUser);
    let from = location.state?.from?.pathname || "/";

    let singInError;

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {
        singInError = <p className="text-red-500">{error?.message || gError?.message}</p>
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log(email);
    }

    const resetPassword = async event => {
        if (email) {
            await sendPasswordResetEmail(email);
        }
        else {
            console.log("Fail");
        }
    }
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Email  Input With Validation*/}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                type="email"
                                onBlur={handleEmailBlur}
                                placeholder="Enter Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Provide a valid email address'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/* Password  Input With Validation*/}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <p><small>Forget Password ?<button onClick={() => resetPassword()} className="btn btn-link text-primary "> <small>Reset Password </small></button> </small></p>
                        {singInError}
                        <input className='btn btn-outline btn-secondary w-full max-w-xs' type="submit" value='Login' />
                    </form>
                    <p><small>New to Doctors Portal ? <Link className='text-primary' to='/singUp'>Create New Account</Link></small> </p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-accent"
                        onClick={() => signInWithGoogle()}
                    >Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;