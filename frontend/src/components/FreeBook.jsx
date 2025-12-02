import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../assets/list.json"
import Slider from "react-slick";
import Cards from './Cards';

function FreeBook() {
    const freeBook = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='container mx-auto max-w-screen-2xl md:px-20 px-4 pt-24'>
                <div className='max-w-screen-2xl mx-auto px-4 md:px-20 mt-5'>
                    <h1 className='text-black text-xl font-bold pb-2'>Free Offerd Courses</h1>
                    <p className='text-black '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, iure omnis.
                        Officia magni nihil enim amet laborum sit excepturi nisi. Vitae dignissimos at ex
                        ut blanditiis consequatur minus ducimus neque?
                    </p>

                </div>

                <div>
                    <Slider {...settings}>
                        {freeBook.map((item) => (
                            <div key={item.id}>
                                <Cards item={item} />
                            </div>

                        ))}
                    </Slider>


                </div>
            </div>
        </>
    )
}

export default FreeBook