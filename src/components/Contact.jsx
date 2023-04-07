import React from 'react';
import { Navigation } from './Navigation';
import { ElementImage } from './widgets/ElementImage';
import burger from './img/burger-about.jpg';
const Contact = () => {
    return(
        <>
            <Navigation e="red"/>
            <ElementImage text="Contact Us" image={burger}/>
        </>
    );
}

export {Contact};