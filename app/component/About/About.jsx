import person from './images/person.png'
import bgBlue from './images/bg_blue.png'
import bgDot from './images/bg_dot.png'
import progressBar from './images/progress_bar.png'
import bgShape from './images/bg_shape.png'
import bgblueLeft from './images/bg_blue_right.png'
import bgLine from './images/bg_line.png'
import bgRed from './images/bg_red.png'
import bgBall from './images/bg_ball.png'
import bgColorDot from './images/bg_color_dot.png'

const About = () => {
    return (
        <div className='relative'>
            <img className='absolute -z-10 left-0' src={bgblueLeft.src} alt="" />
            <img className='absolute -z-10 -bottom-52' src={bgLine.src} alt="" />
            <img className='absolute hidden md:flex -z-10 bottom-52' src={bgBall.src} alt="" />
            <img className='absolute -z-10 right-0 top-[540px]' src={bgColorDot.src} alt="" />
            <div className="container mt-[60px] md:mt-[163px]">
                <div className='md:flex justify-between'>
                    <div>
                        <h6 className="uppercase text-[#FF4F6E] text-xl mb-[10px] md:mb-[15px] font-medium">About Us</h6>
                        <h2 className="capitalize font-bold text-4xl md:text-[54px] md:leading-[55px] w-10/12 mb-[16px] md:mb-[34px]">You Can Imagine I Can Do</h2>
                        <img className='mb-7
                        ' src={progressBar.src} alt="" />
                    </div>
                    <div className='relative'>
                        <img src={person.src} alt="" />
                        <img className='absolute hidden md:flex -bottom-12 -right-12 -z-10' src={bgBlue.src} alt="" />
                        <img className='absolute hidden md:flex top-[5px] -right-12' src={bgShape.src} alt="" />
                        <img className='absolute hidden md:flex -top-10 -left-10 -z-10' src={bgDot.src} alt="" />
                        <img className='absolute -z-10 -bottom-1/2 right-0' src={bgRed.src} alt="" />
                        <div className='md:absolute lg:-left-[376px] -bottom-3/4 lg:bottom-0'>
                            <div className='bg-white px-[30px] py-[43px] md:w-[330px] lg:w-[561px] drop-shadow-xl shadow-[#0e2a3614] rounded-[10px] rounded-br-none'>
                                <h6 className='text-[24px] lg:text-[28px] text-[#FF4F6E] underline font-medium mb-[14px] lg:mb-[22px] rounded-[10px] rounded-b'>About Me</h6>
                                <p className='text-[20px] xl:text-[26px]'>User experience (UX) designers are responsible for creating an optimal experience for the user when they interact with a digital or physical</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;