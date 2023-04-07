import React from 'react';
import { Navigation } from './Navigation';
import { ElementImage } from './widgets/ElementImage';
import burger from './img/burger-about.jpg';
const Gallery = () => {
    return(
        <>
            <Navigation d="red"/>
            <ElementImage text="Gallery" image={burger}/>
        </>
    );
}

export {Gallery};