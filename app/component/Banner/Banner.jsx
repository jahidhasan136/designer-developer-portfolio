
import Image from 'next/image'
import photo from './images/photo.png'
import bgPhoto from './images/bg_photo.png'
import bgPink from './images/bg_pink.png'
import bgPinkLeft from './images/bg_pink_left.png'
import bgStar from './images/star_left.png'
import bgLine from './images/bg_line.png'
import bgDot from './images/bg_dot.png'
import bgBlue from './images/bg_blue_right.png'
import mouseScroll from './images/mouse_scroll.png'

import { GoArrowUpRight } from 'react-icons/go'
import { BiLogoDribbble, BiLogoFacebookCircle, BiLogoTwitter } from 'react-icons/bi'

const Banner = () => {
    return (
        <div className='banner-bg relative z-10'>
            <img className='absolute -z-10 top-0' src={bgPink.src} alt="" />
            <img className='absolute -z-10' src={bgPinkLeft.src} alt="" />
            <img className='absolute -z-10 mt-[90px] hidden md:flex' src={bgStar.src} alt="" />
            <img className='absolute -z-10 -bottom-28' src={bgLine.src} alt="" />
            <img className='absolute -z-10 right-0' src={bgBlue.src} alt="" />
            <div className='container pt-[100px] md:pt-[180px]'>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between '>
                    <div className='relative z-10'>
                        <img className='h-[364px] md:h-full' src={bgPhoto.src} alt="" />
                        <Image
                            src={photo.src}
                            width={photo.width}
                            height={photo.height}
                            className='absolute bottom-0 w-3/4'
                        />
                        <img className='absolute -bottom-0 md:-bottom-11 md:-left-10 w-[59px] md:w-[128px]' src={bgDot.src} alt="" />
                    </div>
                    <div className='md:w-[350px] xl:w-[630px] relative'>
                        <img className='absolute hidden md:flex right-0 bottom-0 cursor-pointer z-10' src={mouseScroll.src} alt="" />
                        <h2 className='text-2xl md:text-[38px] text-[#FF4F6E] font-bold mb-[10px] md:mb-[5px]'>Hello, I'm Nancy</h2>
                        <h1 className='text-4xl md:text-[65px] md:leading-[64px] lg:leading-[74px] xl:leading-[84px] mb-[43px] font-ubuntu'>Professional UI/UX Designer & Web Developer</h1>
                        <div className='md:flex items-center font-semibold mb-[35px] hidden'>
                            <div className='w-[54px] h-[54px] flex items-center'>
                                <span className='bg-[#FF4F6E] p-[2px] flex items-center rounded-tr text-white'>
                                    <GoArrowUpRight className='text-4xl'></GoArrowUpRight>
                                </span>
                            </div>
                            Hire Me Now
                        </div>
                        <div className='bg-[#DEE4E5] w-[316px] h-[2px] mb-[43px] hidden md:flex'></div>
                        <div className='md:flex gap-6 hidden'>
                            <div className='bg-circle'>
                                <BiLogoFacebookCircle></BiLogoFacebookCircle>
                            </div>
                            <div className='bg-circle'>
                                <BiLogoTwitter></BiLogoTwitter>
                            </div>
                            <div className='bg-circle'>
                                <BiLogoDribbble></BiLogoDribbble>
                            </div>
                        </div>
                    </div>
                </div>


                    {/* mobile device */}

                <div className='md:hidden flex items-center font-semibold md:mb-[35px] gap-[57px] md:gap-0 mt-[20px] md:mt-0'>
                    <div className='w-[54px] h-[54px] flex items-center'>
                        <span className='bg-[#FF4F6E] p-[2px] flex items-center rounded-tr text-white'>
                            <GoArrowUpRight className='text-[36px]'></GoArrowUpRight>
                        </span>
                    </div>
                    Hire Me Now
                </div>
                <div className='bg-[#DEE4E5] h-[2px] mt-[5px] md:hidden'></div>
            </div >
        </div>
    );
};

export default Banner;