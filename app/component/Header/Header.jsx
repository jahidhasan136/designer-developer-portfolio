'use client'

import Link from "next/link";
import { useState } from "react";

import HeaderLogo from './images/header_logo.png'
import { FaBars, FaTimesCircle } from "react-icons/fa";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        // 👇️ toggle isActive state on click
        setIsActive(true);
    };

    const handleClose = (e) => {
        setIsActive(false);
    }
    return (
        <>
            <header className="py-5 absolute top-0 w-full z-50 bg-transparent">
                <div className="container flex items-center justify-between">
                    <Link href="/">
                        <img src={HeaderLogo.src} alt="" />
                    </Link>
                    <ul className="lg:flex xl:space-x-[50px] lg:space-x-[30px] xl:text-[18px] lg:text-[16px] font-medium text-black hidden">
                        <li><Link href='/' className='transition hover:text-[#009DAE]'>Home</Link></li>
                        <li><Link href='/' className='transition hover:text-[#009DAE]'>About us</Link></li>
                        <li><Link href='/' className='transition hover:text-[#009DAE]'>Services</Link></li>
                        <li><Link href='/' className='transition hover:text-[#009DAE]'>Portfolio</Link></li>
                        <li><Link href='/' className='transition hover:text-[#009DAE]'>Contact</Link></li>
                    </ul>
                    <div className="hidden md:flex">
                        <Link href='/' className="primary-btn">Lets's talk</Link>
                    </div>
                    <div className="text-2xl menu-trigger lg:hidden ml-[15px] h-[50px] w-[50px] flex items-center justify-center rounded-lg bg-white" onClick={handleClick}>
                        <FaBars></FaBars>
                    </div>
                </div>
            </header>
            <div className={`${isActive ? 'active' : 'closed'} offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-50 bg-black top-0 lg:hidden left-[-250px] transition-all`}>
                <FaTimesCircle className='absolute right-[15px] top-[25px] z-10 text-white text-[24px]' onClick={handleClose}></FaTimesCircle>
                <div className="logo mb-[30px]">
                    <Link href="/">
                        <img src={HeaderLogo.src} alt="" />
                    </Link>
                </div>
                <ul className="space-y-[15px] text-[16px] font-medium text-white mb-[20px]">
                    <li><Link href='/' className='transition hover:text-[#009DAE]'>Home</Link></li>
                    <li><Link href='/' className='transition hover:text-[#009DAE]'>About us</Link></li>
                    <li><Link href='/' className='transition hover:text-[#009DAE]'>Services</Link></li>
                    <li><Link href='/' className='transition hover:text-[#009DAE]'>Portfolio</Link></li>
                    <li><Link href='/' className='transition hover:text-[#009DAE]'>Contact</Link></li>
                </ul>
                <div className="md:hidden mt-10">
                    <Link href='/' className="primary-btn">Lets's talk</Link>
                </div>
            </div>

        </>
    );
};

export default Header;