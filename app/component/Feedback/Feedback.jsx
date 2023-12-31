'use client'
import imageOne from './images/image1.png'
import profileOne from './images/profile1.png'
import profileTwo from './images/profile2.png'
import shape from './images/shape.png'
import bgBall from './images/bg_ball.png'
import bgDot from './images/bg_dot.png'
import bgDrop from './images/bg_drop.png'
import bgRed from './images/bg_left_red.png'
import bgBlue from './images/bg_right_blue.png'
import bgLine from './images/bg_line.png'


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Feedback = () => {
    return (
        <div className='relative z-10'>
            <img className='absolute -z-10 -top-2/3' src={bgDrop.src} alt="" />
            <img className='absolute -z-10 -top-1/2' src={bgRed.src} alt="" />
            <img className='absolute -z-10 right-0 -top-1/2' src={bgBlue.src} alt="" />
            <img className='absolute -z-10 right-0' src={bgLine.src} alt="" />
            <img className='absolute -z-10 right-0 top-10' src={bgBall.src} alt="" />
            <div className="container mt-[145px]">
                <div>
                    <Swiper

                        slidesPerView={1}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                    >
                    <h1 className="text-[35px] lg:text-[45px] font-bold leading-[40px] lg:leading-[60px] mb-[46px] lg:mb-[86px] md:w-1/2">Clients are satisfied for our work, view feedback</h1>
                        <SwiperSlide>
                            <div className='flex items-center gap-9'>
                                <div className='md:flex items-center bg-white  rounded-lg shadow-sm shadow-[#929bb31f] gap-5 lg:gap-10 relative'>
                                    <img className='absolute -z-10 -bottom-10 -left-10' src={bgDot.src} alt="" />
                                    <img className='absolute right-0 top-0 hidden md:flex' src={shape.src} alt="" />
                                    <img className='mx-auto' src={imageOne.src} alt="" />
                                    <div className='md:w-1/2 mt-5 pl-4'>
                                        <h6 className='text-xl xl:text-2xl font-bold mb-[10px] md:mb-[18px]'>Great Service!</h6>
                                        <p className='text-base lg:text-lg xl:text-[22px] text-[#373D4A] mb-[17px] md:mb-[27px] leading-[26px] md:leading-[36px]'>Zahid did a great job. He understood my project and found the best way to redesign it and improve the UX of my users. </p>
                                        <div className='flex items-center gap-2 md:gap-5 pb-3'>
                                            <img src={profileOne.src} alt="" />
                                            <div>
                                                <h6 className='text-sm lg:text-base xl:text-xl font-bold'>Bessie Cooper</h6>
                                                <p className='text-xs lg:text-sm xl:text-base text-[#373D4A]'>Product Designer</p>
                                            </div>
                                            <div className="rating mt-5">
                                                <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" />
                                                <input type="radio" name="rating-1" className="mask w-[20px] mask-star bg-[#FFAF00]" checked />
                                                <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                                <input type="radio" name="rating-1" className="mask w-[20px] mask-star bg-[#FFAF00]" checked />
                                                <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white rounded-lg shadow-sm shadow-[#929bb31f] lg:py-[25px] xl:py-[40px] pl-[40px] relative w-7/12 hidden lg:grid'>
                                    <img className='absolute right-0 top-0' src={shape.src} alt="" />
                                    <h6 className='lg:text-xl xl:text-2xl font-bold mb-[14px]'>Amazing Design!</h6>
                                    <p className='lg:text-lg xl:text-[22px] text-[#373D4A] leading-[34px] mb-[39px]'>Akas did a great job. He understood my project and founder the best way to redesign it and improve the UX of my users.</p>
                                    <div className='flex items-center gap-5'>
                                        <img src={profileTwo.src} alt="" />
                                        <div>
                                            <h6 className='text-base xl:text-xl font-bold'>Jane Cooper</h6>
                                            <p className='text-sm xl:text-base text-[#373D4A]'>Web Designer</p>
                                        </div>
                                        <div className="rating mt-5">
                                            <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                            <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checkedchecked />
                                            <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                            <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                            <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex items-center gap-9'>
                                <div className='md:flex items-center bg-white  rounded-lg shadow-sm shadow-[#929bb31f] gap-5 lg:gap-10 relative'>
                                    <img className='absolute -z-10 -bottom-10 -left-10' src={bgDot.src} alt="" />
                                    <img className='absolute right-0 top-0 hidden md:flex' src={shape.src} alt="" />
                                    <img className='mx-auto' src={imageOne.src} alt="" />
                                    <div className='md:w-1/2 mt-5 pl-4'>
                                        <h6 className='text-xl xl:text-2xl font-bold mb-[10px] md:mb-[18px]'>Great Service!</h6>
                                        <p className='text-base lg:text-lg xl:text-[22px] text-[#373D4A] mb-[17px] md:mb-[27px] leading-[26px] md:leading-[36px]'>Zahid did a great job. He understood my project and found the best way to redesign it and improve the UX of my users. </p>
                                        <div className='flex items-center gap-2 md:gap-5 pb-3'>
                                            <img src={profileOne.src} alt="" />
                                            <div>
                                                <h6 className='text-sm lg:text-base xl:text-xl font-bold'>Bessie Cooper</h6>
                                                <p className='text-xs lg:text-sm xl:text-base text-[#373D4A]'>Product Designer</p>
                                            </div>
                                            <div className="rating mt-5">
                                                <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" />
                                                <input type="radio" name="rating-1" className="mask w-[20px] mask-star bg-[#FFAF00]" checked />
                                                <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                                <input type="radio" name="rating-1" className="mask w-[20px] mask-star bg-[#FFAF00]" checked />
                                                <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white rounded-lg shadow-sm shadow-[#929bb31f] lg:py-[25px] xl:py-[40px] pl-[40px] relative w-7/12 hidden lg:grid'>
                                    <img className='absolute right-0 top-0' src={shape.src} alt="" />
                                    <h6 className='lg:text-xl xl:text-2xl font-bold mb-[14px]'>Amazing Design!</h6>
                                    <p className='lg:text-lg xl:text-[22px] text-[#373D4A] leading-[34px] mb-[39px]'>Akas did a great job. He understood my project and founder the best way to redesign it and improve the UX of my users.</p>
                                    <div className='flex items-center gap-5'>
                                        <img src={profileTwo.src} alt="" />
                                        <div>
                                            <h6 className='text-base xl:text-xl font-bold'>Jane Cooper</h6>
                                            <p className='text-sm xl:text-base text-[#373D4A]'>Web Designer</p>
                                        </div>
                                        <div className="rating mt-5">
                                            <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                            <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checkedchecked />
                                            <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                            <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                            <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    {/* <div className='flex items-center gap-9'>
                        <div className='flex items-center bg-white  rounded-lg shadow-sm shadow-[#929bb31f] gap-10 relative'>
                            <img className='absolute -z-10 -bottom-10 -left-10' src={bgDot.src} alt="" />
                            <img className='absolute right-0 top-0' src={shape.src} alt="" />
                            <img src={imageOne.src} alt="" />
                            <div className='w-1/2'>
                                <h6 className='text-2xl font-bold mb-[18px]'>Great Service!</h6>
                                <p className='text-[22px] text-[#373D4A] mb-[27px] leading-[36px]'>Zahid did a great job. He understood my project and found the best way to redesign it and improve the UX of my users. </p>
                                <div className='flex items-center gap-5'>
                                    <img src={profileOne.src} alt="" />
                                    <div>
                                        <h6 className='text-xl font-bold'>Bessie Cooper</h6>
                                        <p className='text-base text-[#373D4A]'>Product Designer</p>
                                    </div>
                                    <div className="rating mt-5">
                                        <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" />
                                        <input type="radio" name="rating-1" className="mask w-[20px] mask-star bg-[#FFAF00]" checked />
                                        <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                        <input type="radio" name="rating-1" className="mask w-[20px] mask-star bg-[#FFAF00]" checked />
                                        <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-lg shadow-sm shadow-[#929bb31f] py-[40px] pl-[40px] relative w-7/12'>
                            <img className='absolute right-0 top-0' src={shape.src} alt="" />
                            <h6 className='text-2xl font-bold mb-[14px]'>Amazing Design!</h6>
                            <p className='text-[22px] text-[#373D4A] leading-[34px] mb-[39px]'>Akas did a great job. He understood my project and founder the best way to redesign it and improve the UX of my users.</p>
                            <div className='flex items-center gap-5'>
                                <img src={profileTwo.src} alt="" />
                                <div>
                                    <h6 className='text-xl font-bold'>Jane Cooper</h6>
                                    <p className='text-base text-[#373D4A]'>Web Designer</p>
                                </div>
                                <div className="rating mt-5">
                                    <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                    <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checkedchecked />
                                    <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                    <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                    <input type="radio" name="rating-1" className="mask mask-star w-[20px] bg-[#FFAF00]" checked />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Feedback;