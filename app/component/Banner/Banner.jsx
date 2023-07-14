
import Image from 'next/image'
import photo from './images/photo.png'
import bgPhoto from './images/bg_photo.png'
import bgPink from './images/bg_pink.png'
import bgPinkLeft from './images/bg_pink_left.png'
import bgStar from './images/star_left.png'
import bgLine from './images/bg_line.png'
import bgDot from './images/bg_dot.png'
import bgBlue from './images/bg_blue_right.png'
import bgBlack from './images/bg_black.png'

import { GoArrowUpRight } from 'react-icons/go'
import { BiLogoDribbble, BiLogoFacebookCircle, BiLogoTwitter } from 'react-icons/bi'

const Banner = () => {
    return (
        <div className='relative z-10'>
            <img className='absolute -z-10 w-full' src={bgBlack.src} alt="" />
            <img className='absolute -z-10 top-0' src={bgPink.src} alt="" />
            <img className='absolute -z-10' src={bgPinkLeft.src} alt="" />
            <img className='absolute -z-10 mt-[90px]' src={bgStar.src} alt="" />
            <img className='absolute -z-10 mt-[90px] -bottom-28' src={bgLine.src} alt="" />
            <img className='absolute -z-10 right-0' src={bgBlue.src} alt="" />
            <div className='container pt-[180px]'>
                <div className='flex items-center justify-between'>
                    <div className='relative'>
                        <img src={bgPhoto.src} alt="" />
                        <img className='absolute -bottom-11 -left-10' src={bgDot.src} alt="" />
                        <Image
                            src={photo.src}
                            width={photo.width}
                            height={photo.height}
                            className='absolute -top-28 left-6'
                        />
                    </div>
                    <div className='w-[630px]'>
                        <h2 className='text-[38px] text-[#FF4F6E] font-bold mb-[5px]'>Hello, I'm Nancy</h2>
                        <h1 className='text-[75px] font-bold lg:leading-[74px] xl:leading-[84px] mb-[43px]'>Professional UI/UX Designer & Web Developer</h1>
                        <div className='flex items-center font-semibold mb-[35px]'>
                            <div className='w-[54px] h-[54px] flex items-center'>
                                <span className='bg-[#FF4F6E] p-2 flex items-center rounded-tr text-white'>
                                    <GoArrowUpRight className=''></GoArrowUpRight>
                                </span>
                            </div>
                            Hire Me Now
                        </div>
                        <div className='bg-[#DEE4E5] w-[316px] h-[2px] mb-[43px]'></div>
                        <div className='flex gap-6'>
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
            </div >
        </div>
    );
};

export default Banner;