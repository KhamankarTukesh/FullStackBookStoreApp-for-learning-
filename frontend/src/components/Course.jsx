import React from 'react'
import Cards from './Cards';
import axios from "axios";
import {Link} from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';

function Course() {
  const [book,setBook] = useState([]);
  useEffect(() =>{
    const getBook = async () =>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
   <>
   <div className='max-w-screen-2xl h-full container mx-auto md:px-20 px-4 min-h-screen text-gray-900 dark:text-gray-100'> 
    <div className='mt-20 text-black text-center justify-center items-center'>
        <h1 className='font-semibold text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500 dark:text-pink-400'>Here!</span> :)</h1>
        <p className='mt-12 text-gray-700 dark:text-gray-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eligendi ratione necessitatibus, accusamus fugit numquam assumenda sequi, sit voluptates totam soluta fugiat modi cum quaerat possimus. Commodi neque delectus vitae.
        </p>
        <Link to="/">
        <button className='mt-6 btn bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'> {/* add gap */}
      {
        // return Cards from the map and handle empty lists
        Array.isArray(book) && book.length > 0
          ? book.map((item) => (
              <Cards key={item.id ?? item._id ?? item.name} item={item} />
            ))
          : (
              <div className='col-span-full text-center text-gray-500'>No items found</div>
            )
      }
    </div>
   </div>
   </>
  )
}

export default Course

