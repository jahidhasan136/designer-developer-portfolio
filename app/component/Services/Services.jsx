import uiUx from './images/ui-ux-design.png'
import webDesign from './images/web-design.png'
import digitalMarketing from './images/digital-marketing.png'
import bgDot from './images/bg-dot.png'

const Services = () => {
    return (
        <div className="pl-[300px] mt-[115px]">
            <div className='flex items-center gap-[10px]'>
                <div>
                    <h6 className="uppercase text-[#FF4F6E] text-xl mb-[14px] font-medium">Services</h6>
                    <h2 className="capitalize font-bold text-[35px] leading-10 w-10/12">I provide wide range of digital services</h2>
                </div>
                <div className='flex gap-[30px] relative'>
                    <img className='absolute -left-10 -bottom-10 -z-10' src={bgDot.src} alt="" />
                    <div className='bg-white py-[56px] px-10 shadow-lg text-center rounded-[10px] z-10'>
                        <img className='mx-auto mb-[42px]' src={uiUx.src} alt="" />
                        <h6 className='text-[30px] font-medium mb-[29px]'>UI/UX Design</h6>
                        <p className='text-base text-[#929BB3]'>From the initial deesign to the final development stage, your dedicated team of specialists.</p>
                    </div>
                    <div className='bg-white py-[56px] px-10 shadow-lg text-center rounded-[10px] z-10'>
                        <img className='mx-auto mb-[42px]' src={webDesign.src} alt="" />
                        <h6 className='text-[30px] font-medium mb-[29px]'>Web Design</h6>
                        <p className='text-base text-[#929BB3]'>From the initial deesign to the final development stage, your dedicated team of specialists.</p>
                    </div>
                    <div className='bg-white py-[56px] px-10 shadow-lg text-center rounded-[10px] z-10'>
                        <img className='mx-auto mb-[42px]' src={digitalMarketing.src} alt="" />
                        <h6 className='text-[30px] font-medium mb-[29px]'>Digital Marketing</h6>
                        <p className='text-base text-[#929BB3]'>From the initial deesign to the final development stage, your dedicated team of specialists.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;