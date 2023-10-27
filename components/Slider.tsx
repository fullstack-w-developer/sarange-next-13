"use client"
import React, { useRef } from 'react'
import SliderSlick from "react-slick";
import img from "../assets/images/static__img__mobile-slider__4.light.jpg"
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const Slider = () => {
    const sliderRef = useRef<SliderSlick>(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
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
            <div className='max-w-[230px] overflow-hidden h-[500px] border-[5px] border-black rounded-[15px]'>
                <SliderSlick {...settings}>
                    <div>
                        <Image src={img} alt="" />
                    </div>
                    <div>
                        <Image src={img} alt="" />
                    </div>
                    <div>
                        <Image src={img} alt="" />
                    </div>
                    <div>
                        <Image src={img} alt="" />
                    </div>
                    <div>
                        <Image src={img} alt="" />
                    </div>
                    <div>
                        <Image src={img} alt="" />
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