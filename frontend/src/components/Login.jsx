import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login({ isOpen = false, onClose = () => {} }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // reset form values
    } = useForm({
        mode: 'onTouched'
    });

    const [mounted, setMounted] = useState(false);
    const dialogRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // clear form fields whenever dialog opens
    useEffect(() => {
        if (isOpen) {
            reset({ email: '', password: '' });
        }
    }, [isOpen, reset]);

    if (!mounted || typeof document === 'undefined' || !isOpen) return null;

    const onSubmit = (data) => {
        console.log('login data', data);
        onClose();
    };

    return ReactDOM.createPortal(
        <dialog
            id="my_modal_3"
            ref={dialogRef}
            open
            className="modal fixed inset-0 z-50 flex items-center justify-center"
            aria-labelledby="login-title"
            role="dialog"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="modal-box max-w-md w-full bg-white relative" autoComplete="off">
                <button
                    type="button"
                    onClick={() => onClose()}
                    className="btn text-black btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    aria-label="Close"
                >
                    ✕
                </button>

                <h3 id="login-title" className="font-bold text-lg text-black mb-4">Hello!</h3>

                <div className="mb-4">
                    <span className="text-black">Email</span>
                    <input
                        type="email"
                        autoComplete="off"
                        placeholder="Enter your email"
                        aria-invalid={errors.email ? "true" : "false"}
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Enter a valid email address."
                            }
                        })}
                        className="outline-none p-2 rounded-md border bg-gray-200 w-full text-black"
                    /><br/>
                    {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
                </div>

                <div>
                    <span className="text-black">Password</span>
                    <input
                        type="password"
                        autoComplete="new-password"
                        placeholder="Enter your password"
                        aria-invalid={errors.password ? "true" : "false"}
                        {...register("password", {
                            required: "Password is required.",
                            minLength: { value: 6, message: "Password must be at least 6 characters." }
                        })}
                        className="outline-none p-2 rounded-md border bg-gray-200 w-full text-black"
                    /><br/>
                    {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}
                </div>

                <div className='flex justify-around'>
                    <button type="submit" className='btn text-black bg-pink-400 py-2 px-6 hover:scale-105 duration-200 mt-3'>Login</button>
                    <p className='text-black mt-5'>Not Registered <span className='underline text-blue-600 cursor-pointer'>
                        <Link to="/signup">SignUp</Link>
                        </span></p>
                </div>
            </form>
        </dialog>,
        document.body
    );
}

export default Login;
