import { BiLogoDribbble, BiLogoFacebookCircle, BiLogoTwitter } from 'react-icons/bi';
import { MdSend } from 'react-icons/md';
import logo from '../Header/images/header_logo.png'
import Link from 'next/link';

import bgCall from './images/bg_call.png'

const Footer = () => {
    return (
        <div className='bg-[#009DAE] text-white'>
                {/* <img className='absolute -z-10' src={bgCall.src} alt="" /> */}
            <div className='container mt-[193px]'>
                <div className='bg-[#F5FDFD] p-[100px] text-center rounded-[48px]'>
                    <h1 className='text-black text-[45px] font-bold mb-[43px]'>Can't find your desire service? <br /> <span className='text-[#FF4F6E]'>Let us know 24/7 in 123456</span></h1>
                    <div className='flex gap-[25px] justify-center'>
                        <Link href='/' className='primary-btn'>Hire Me</Link>
                        <Link href='/' className='bg-white px-7 py-3 border border-[#009DAE] rounded-[5px] text-[#009DAE]'>123456</Link>
                    </div>
                </div>
                <div className='flex justify-between pt-[120px]'>
                    <div className='w-[272px]'>
                        <img className='mb-[26px]' src={logo.src} alt="" />
                        <p className='text-base'>
                            CreativePeoples Digital Agency is a customer-centric digital marketing company. We shape our internet marketing services
                        </p>
                    </div>
                    <div>
                        <h5 className='text-lg mb-7'>Company</h5>
                        <div className='leading-[40px]'>
                            <p>About</p>
                            <p>Careers</p>
                            <p>Mobile</p>
                            <p>How it Works</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg mb-7'>Support</h5>
                        <div className='leading-[40px]'>
                            <p>Support Carrer</p>
                            <p>24th Service</p>
                            <p>Quick Chat</p>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg mb-7'>About</h5>
                        <div className='leading-[40px]'>
                            <p>Privacy</p>
                            <p>Security</p>
                            <p>Complians</p>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg mb-7'>Our Social Media</h5>
                        <div className='md:flex gap-6 hidden mb-[22px]'>
                            <div className='bg-circle-footer'>
                                <BiLogoFacebookCircle></BiLogoFacebookCircle>
                            </div>
                            <div className='bg-circle-footer'>
                                <BiLogoTwitter></BiLogoTwitter>
                            </div>
                            <div className='bg-circle-footer'>
                                <BiLogoDribbble></BiLogoDribbble>
                            </div>
                        </div>
                        <h5 className='mb-[24px]'>Join a Newsletter</h5>
                        <div className='flex items-center relative'>
                            <input className='w-[296px] h-[56px] rounded-[5px] px-4 pr-[70px] py-[17px] text-black' type="text" placeholder='Input your email here' />
                            <div className='w-[55px] h-[56px] bg-[#FFAF00] grid items-center rounded-r-[5px] absolute right-0 cursor-pointer'>
                                <MdSend className=' mx-auto'></MdSend>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b-2 border-[#0D8997] mt-[57px] mb-[21px]'>
                </div>
                <p className='pb-[25px]'>Copyright - 2022 CreativePeolpes</p>
            </div>
        </div>
    );
};

export default Footer;