"use client"
import React, { useRef } from 'react'
import SliderSlick from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import img from "../assets/images/photo_2023-12-12_12-21-23.jpg"
import img1 from "../assets/images/photo_2023-12-12_12-21-28.jpg"
import img2 from "../assets/images/photo_2023-12-12_12-21-26.jpg"
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const Slider = () => {
    const sliderRef = useRef<SliderSlick>(null);
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      
        arrows: false,
    };
    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div className='flex items-center gap-5'>
            <button onClick={handleNext} className="rounded-full border border-black w-[40px] h-[40px] flex items-center justify-center" >
                <AiOutlineArrowRight size={25} />
            </button>
            <div className='w-[230px] h-[500px] border-[5px] border-black rounded-[15px]'>
                <SliderSlick className='w-full h-full overflow-hidden' ref={sliderRef} {...settings}>
                    <div className=''>
                        <Image src={img} alt="" />
                    </div>
                    <div className=''>
                        <Image src={img1} alt="" />
                    </div>
                    <div className=''>
                        <Image src={img2} alt="" />
                    </div>
                </SliderSlick>
            </div>

            <button onClick={handlePrev} className="rounded-full border border-black w-[40px] h-[40px] flex items-center justify-center" >
                <AiOutlineArrowLeft size={25} />
            </button>
        </div>
    );
};

export default Slider;