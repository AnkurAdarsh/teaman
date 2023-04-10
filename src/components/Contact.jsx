import React from 'react';
import { Navigation } from './Navigation';
import "./css/style.css";
import { ElementImage } from './widgets/ElementImage';
import burger from './img/burger-about.jpg';
import toppics from './img/parcelli.png';
import BackGroundImage1 from './img/tea-pot.jpg';

const Contact = () => {
    return(
        <>
            <Navigation e="red"/>

            <ElementImage contact="Book A Table" text="+91-7631027227" image={burger}/>

            <div className='md:pt-20 pb-48 md:pb-24'>

                <div className='h-10 pb-24 md:pb-32 ' >
                    <div className='py-12'>
                        <div className='grid place-items-center max-w-full'>
                            <img src={toppics} alt="image2" className='w-28 p-2'/>
                            <div className='p-2'>
                                <span className='text-black font-Berk text-4xl lg:text-5xl pt-6 sm:pt-14 lg:pt-14 pb-5'>Our Location</span>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='p-5 pt-20 md:flex'>
                    <div className='py-5 lg:p-1 lg:pl-44 w-full'>
                        {/* <div className=''> */}
                            <iframe className='h-[450px] lg:h-[550px] w-full shadow-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.23971993434267!2d88.43990806285713!3d22.585254313788482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02758ef59e4ae9%3A0x425108f20af52365!2sMr.%20Tea%20Man!5e0!3m2!1sen!2sin!4v1681072749610!5m2!1sen!2sin" title='Mr. Tea Man' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        {/* </div> */}
                    </div>
                    {/* <div className='relative md:py-10 md:w-3/6'> */}
                    <div className='relative md:p-1 py-5 w-full '>
                        <div className=' overflow-hidden'>
                            <div className='absolute mix-blend-overlay w-full md:px-2 lg:px-20'>
                                <img src={BackGroundImage1} className="brightness-50 opacity-90 shadow-2xl lg:h-[550px] md:w-full object-fill" alt="under-design"/>
                            </div>
                        </div>
                        <div className='relative text-center inset-y-24 md:inset-y-44'>
                            <p className='text-white font-Berk text-4xl lg:text-5xl pt-6 sm:pt-14 lg:pt-14 pb-5'>Opening Hours</p>
                            <div className='font-raleway text-light'>
                                <p className='text-white text-lg lg:text-xl'>Opening Time 1.30 pm - 10.30 pm</p>
                                <p className='text-white text-lg lg:text-xl'>Friday Open Time 5.30 pm - 10.30 pm</p>
                                <p className='text-white text-lg lg:text-xl'>4th Friday of Every Month is Holiday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* for next */}

        </>
    );
}

export {Contact};