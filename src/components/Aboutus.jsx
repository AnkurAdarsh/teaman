import React from 'react';
import { Navigation } from './Navigation';
import burger from './img/burger-about.jpg';
import { ElementImage } from './widgets/ElementImage';
const Aboutus = () => {
    return(
        <>
            <Navigation c="red"/>
            <ElementImage text="About Us" image={burger}/>
        </>
    );
}

export {Aboutus};