import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-hot-toast";

function Login({ isOpen = false, onClose = () => {} }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: 'onTouched' });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Always empty input fields when modal opens
    useEffect(() => {
        if (isOpen) {
            reset({ email: '', password: '' });
        }
    }, [isOpen, reset]);

    if (!mounted || !isOpen) return null;

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success("Logged in Successfully!");

                    localStorage.setItem("Users", JSON.stringify(res.data.user));

                    const modal = document.getElementById("my_modal_3");
                    if (modal) modal.close();

                    setTimeout(() => {
                        window.location.reload();
                    }, 1200);
                }
            })
            .catch((err) => {
                if (err.response) {
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    return ReactDOM.createPortal(
        <dialog
            id="my_modal_3"
            open
            className="modal fixed inset-0 z-50 flex items-center justify-center"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="modal-box max-w-md w-full bg-white relative"
                autoComplete="off"
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="btn text-black btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>

                <h3 className="font-bold text-lg text-black mb-4">Hello!</h3>

                {/* Email */}
                <div className="mb-4">
                    <span className="text-black">Email</span>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        autoComplete="new-email"
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Enter a valid email",
                            },
                        })}
                        className="outline-none p-2 rounded-md border bg-gray-200 w-full text-black"
                    />
                    {errors.email && (
                        <span className="text-sm text-red-500">{errors.email.message}</span>
                    )}
                </div>

                {/* Password */}
                <div>
                    <span className="text-black">Password</span>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        autoComplete="new-password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Min 6 characters" },
                        })}
                        className="outline-none p-2 rounded-md border bg-gray-200 w-full text-black"
                    />
                    {errors.password && (
                        <span className="text-sm text-red-500">{errors.password.message}</span>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex justify-around">
                    <button
                        type="submit"
                        className="btn text-black bg-pink-400 py-2 px-6 hover:scale-105 duration-200 mt-3"
                    >
                        Login
                    </button>

                    <p className="text-black mt-5">
                        Not Registered?{" "}
                        <span className="underline text-blue-600 cursor-pointer">
                            <Link to="/signup">SignUp</Link>
                        </span>
                    </p>
                </div>
            </form>
        </dialog>,
        document.body
    );
}

export default Login;
