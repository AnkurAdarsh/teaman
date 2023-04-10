import React from 'react';
import '../css/style.css';
import underdesign from '../img/under-design.png'
const ElementImage = (props) => {
    return(
        <div className='sticky'>
            <div className='myPicture absolute overflow-hidden mix-blend-overlay'>
                <img src={props.image} className="brightness-50 opacity-90" alt="under-design"/>
            </div>
            <div className='p-5 grid place-items-center'>
                <label className='text-white font-Berk text-4xl pt-6 sm:pt-14 lg:pt-14 pb-5 md:text-left'>{props.contact}</label>
                <label className='text-white font-Berk text-6xl md:text-7xl pb-10 lg:pb-10  '>{props.text}</label>
                <img src={underdesign} alt="under-design" className='w-44 sm:w-fit'/>
            </div>
        </div>
    );
}

export {ElementImage};