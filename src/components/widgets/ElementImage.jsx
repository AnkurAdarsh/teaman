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
                <label className='text-white font-Berk pt-14 md:pt-24 lg:pt-20 pb-5 text-7xl lg:text-8xl'>{props.text}</label>
                <img src={underdesign} alt="under-design" className=''/>
            </div>
        </div>
    );
}

export {ElementImage};