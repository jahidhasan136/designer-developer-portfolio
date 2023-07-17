import Link from "next/link";
import mobileApplication from './images/mobile_application.png'
import productDesign from './images/product_design.png'
import fitnessPage from './images/fitness_landing_page.png'
import { BsArrowRight } from 'react-icons/bs'
import bgDot from './images/bg_dot.png'

const WorkingProcess = () => {
    return (
        <div className="container mt-[183px]">
            <div className="text-center">
                <h6 className="uppercase text-[#FF4F6E] text-xl font-bold mb-5">Working Process</h6>
                <h1 className="text-[56px] font-bold mb-[35px]">My Creative Portfolio</h1>
                <div className="flex justify-center gap-[27px] text-base mb-[58px]">
                    <Link className="text-[#009DAE] underline font-medium" href='/'>All</Link>
                    <Link className="hover:text-[#009DAE] hover:underline text-[#6D7288]" href='/'>UI Design</Link>
                    <Link className="hover:text-[#009DAE] hover:underline text-[#6D7288]" href='/'>UX Design</Link>
                    <Link className="hover:text-[#009DAE] hover:underline text-[#6D7288]" href='/'>Branding Design</Link>
                </div>
                <div className="flex justify-between mb-[70px] relative">
                    <div className="relative bg-white shadow-sm rounded-[10px]">
                        <img src={mobileApplication.src} alt="" />
                        <div className="absolute bottom-20 left-0 right-0 inline-flex">
                            <p className="bg-white text-base px-[41px] py-[13px] rounded-full text-[#373D4A]
                             mx-auto">Mobile Apps</p>
                        </div>
                        <h6 className="text-[24px] font-medium mt-[48px] pb-[34px]">Mobile Application</h6>
                    </div>
                    <div className="relative bg-white shadow-sm rounded-[10px]">
                        <img src={productDesign.src} alt="" />
                        <div className="absolute bottom-20 left-0 right-0 inline-flex">
                            <p className="bg-white text-base px-[41px] py-[13px] rounded-full text-[#373D4A]
                             mx-auto">Apps Landing Page</p>
                        </div>
                        <h6 className="text-[24px] font-medium mt-[48px] pb-[34px]">Product Design</h6>
                    </div>
                    <div className="relative bg-white shadow-sm rounded-[10px]">
                        <img src={fitnessPage.src} alt="" />
                        <div className="absolute bottom-20 left-0 right-0 inline-flex">
                            <p className="bg-white text-base px-[41px] py-[13px] rounded-full text-[#373D4A]
                             mx-auto">Web Design</p>
                        </div>
                        <h6 className="text-[24px] font-medium mt-[48px] pb-[34px]">Fitness Landing Page</h6>
                    </div>
                    <img className="absolute -right-10 -bottom-12 -z-10" src={bgDot.src} alt="" />
                </div>
                <button className="text-[#FF4F6E] border border-[#FF4F6E] px-[23px] py-[12px] rounded-[5px] flex items-center gap-[6px] mx-auto">See More <BsArrowRight></BsArrowRight></button>
            </div>
        </div>
    );
};

export default WorkingProcess;