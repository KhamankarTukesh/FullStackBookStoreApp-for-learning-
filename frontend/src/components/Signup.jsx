import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched' });

    const onSubmit = (data) => {
        console.log('signup', data);
        // TODO: call API and handle response
        navigate('/'); // redirect after signup
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow">
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="btn text-black btn-sm btn-circle btn-ghost absolute right-6 top-6"
                    aria-label="Close"
                >
                    ✕
                </button>
                <h3 className="font-bold text-lg text-black mb-4">Create account</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm text-black mb-1">Name</label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            type="text"
                            placeholder="Enter your name"
                            className="outline-none p-2 rounded-md border bg-gray-200 w-full text-black"
                            aria-invalid={errors.name ? 'true' : 'false'}
                        />
                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-black mb-1">Email</label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' }
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className="outline-none p-2 rounded-md border bg-gray-200 w-full text-black"
                            aria-invalid={errors.email ? 'true' : 'false'}
                        />
                        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-black mb-1">Password</label>
                        <input
                            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
                            type="password"
                            placeholder="Enter your password"
                            className="outline-none p-2 rounded-md border bg-gray-200 w-full text-black"
                            aria-invalid={errors.password ? 'true' : 'false'}
                        />
                        {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <button type="submit" className='btn text-black bg-pink-400 py-2 px-6 hover:scale-105 duration-200'>Signup</button>
                        <p className='text-black text-sm'>Have an account? <span className='underline text-blue-600 cursor-pointer'>
                            <Link to="/">Login</Link>
                        </span></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
