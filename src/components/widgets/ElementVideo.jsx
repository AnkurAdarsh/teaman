import React from 'react';
import '../css/style.css';
// import underdesign from '../img/under-design.png';
const ElementVideo = (props) => {
    return(
        <div className='mb-5'>
            <div className='relative'>
                <div className='myVideo absolute overflow-hidden mix-blend-overlay'>
                    <video src={props.video} className="brightness-50 opacity-90 sm:h-full w-full" autoPlay muted loop></video>
                </div>
                <div className='p-5 pb-5 md:pb-14 text-center grid place-items-center'>
                    <span className='pt-10 text-white font-Berk text-4xl sm:py-12 md:py-12 sm:text-7xl md:text-8xl md:pt-20 lg:text-9xl lg:pt-16 xl:pt-20 2xl:pt-28 transition-all ease-in duration-500'>{props.heading}</span>
                    <span className='text-white font-raleway py-3 text-md sm:text-4xl md:text-4xl lg:text-6xl '>{props.quotes}</span>
                    {/* <img src={underdesign} alt="under-design" className=''/> */}
                </div>
            </div>
        </div>
    );
}

export {ElementVideo};