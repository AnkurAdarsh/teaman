import React from 'react';
import { Navigation } from './Navigation';
import "./css/style.css";
import { ElementImage } from './widgets/ElementImage';
import burger from './img/burger-about.jpg';
import toppics from './img/parcelli.png';
import BackGroundImage1 from './img/bg-menu.jpg';

const Contact = () => {
    return(
        <>
            <Navigation e="red"/>
            <ElementImage contact="Book A Table" text="+91-7631027227" image={burger}/>

            <div className='max-w-full sm:pt-10 md:py-12'>
                {/* <div className='text-center'>
                </div> */}

                <div className='h-10 pb-36 md:pb-40 ' >
                    <div className='py-20'>
                        <div className='grid place-items-center max-w-full'>
                            <img src={toppics} alt="image2" className='w-28 p-2'/>
                            <div className='p-2'>
                                <span className='text-black font-Berk text-4xl lg:text-5xl pt-6 sm:pt-14 lg:pt-14 pb-5'>Our Location</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='pt-20 pb-5'>
                    <div className='lg:flex md:pt-5 lg:py-0 xl:py-0 '>
                        <div className='lg:flex-col w-full lg:w-3/5 '>
                            <div className='p-2'>
                                <div className=''>
                                    <iframe className='min-w-full h-[500px] md:h-[600px] lg:h-[700px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.23971993434267!2d88.43990806285713!3d22.585254313788482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02758ef59e4ae9%3A0x425108f20af52365!2sMr.%20Tea%20Man!5e0!3m2!1sen!2sin!4v1681072749610!5m2!1sen!2sin" title='Mr. Tea Man' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                {/* md:w-[900px] md:h-[600px] */}
                            </div>
                        </div>
                        <div className='w-full p-2 lg:w-2/5'>
                            <div className='pr-[10px]'>
                                <div className='absolute overflow-hidden mix-blend-overlay h-[450px] md:h-[500px] lg:h-[700px]'>
                                    <img src={BackGroundImage1} className=" pr-[9px] min-w-full drop-shadow brightness-50 opacity-90" alt="under-design"/>
                                </div>
                                <div className='relative grid text-center inset-y-40 lg:inset-y-56'>
                                    <p className='text-white font-Berk text-4xl lg:text-5xl pt-6 sm:pt-14 lg:pt-14 pb-5'>Opening Hours</p>
                                    <div className='font-raleway text-light'>
                                        <p className='text-white text-lg lg:text-2xl'>Opening Time 1.30 pm - 10.30 pm</p>
                                        <p className='text-white text-lg lg:text-2xl'>Friday Open Time 5.30 pm - 10.30 pm</p>
                                        <p className='text-white text-lg lg:text-2xl'>4th Friday of Every Month is Holiday</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export {Contact};