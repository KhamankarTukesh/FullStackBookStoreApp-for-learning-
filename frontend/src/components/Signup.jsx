import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched' });

    const onSubmit = async (data) => {
        const userInfo = {
            fullName: data.fullName,
            email: data.email,
            password: data.password,
        };

        await axios.post('http://localhost:4001/user/signup', userInfo)
            .then((res) => {
                toast.success("Signup Successfully!");
                localStorage.setItem("Users", JSON.stringify(res.data.user));

                // Delay to see toast before redirect
                setTimeout(() => navigate('/'), 1000);
            })
            .catch((err) => {
                toast.error("Error: " + err.response.data.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            
            {/* React Hot Toast container */}
            <Toaster position="top-center" reverseOrder={false} />

            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-black mb-4">Create account</h3>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <label className="block text-sm text-black mb-1">Name</label>
                        <input
                            {...register('fullName', { required: 'Name is required' })}
                            type="text"
                            placeholder='Enter your name'
                            className="outline-none p-2 rounded-md border bg-gray-200 w-full text-black"
                        />
                        {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-black mb-1">Email</label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' }
                            })}
                            className="outline-none p-2 rounded-md border bg-gray-200 w-full text-black"
                            placeholder='Enter your email'
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-black mb-1">Password</label>
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Minimum 6 characters' }
                            })}
                            className="outline-none p-2 rounded-md border bg-gray-200 w-full text-black"
                            placeholder='Enter your password'
                        />
                        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                    </div>

                    <button className="btn bg-pink-400 text-black px-6 py-2">Signup</button>
                </form>

                <p className="mt-3 text-black text-sm">
                    Already have an account? <Link to="/" className="text-blue-600 underline">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
