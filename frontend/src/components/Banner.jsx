import React from 'react'
import Books from '../assets/Books.jpg'; 

function Banner() {
    return (
        <div
            className='container mx-auto flex flex-col md:flex-row px-4 md:px-20'
            style={{ paddingTop: 'var(--navbar-height, 5rem)' }}
        >
            
            
            <div className='w-full md:w-1/2 order-1 md:order-2'>
                <img src={Books} alt="Books Img" className='w-full h-auto'/>
            </div>
            <div className='w-full md:w-1/2 order-2 md:order-1'>
                <div className='space-y-12 mt-12 md:mt-32'>
                    <h1 className='text-4xl font-bold text-black'>
                        Hello, welcome here to learn something
                        <span className='text-pink-500'> new everyday!!!</span>
                    </h1>
                    <p className='text-black text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eum? Non, sapiente? Expedita nam praesentium,
                        pariatur cupiditate amet dolorum qui esse odio excepturi. Fuga quo quaerat non
                        vel laudantium similique.
                    </p>
                    <label className="input validator w-full bg-white border border-gray-200 rounded-md outline-none flex items-center p-2">
                        <svg className="h-6 w-6 text-gray-700 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input type="email" placeholder="Enter the email" required className='flex-1 outline-none'/>
                    </label>
                    <button className="btn btn-secondary mt-6 bg-pink-400 p-2">Secondary</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;
