import React from 'react';
import { Navigation } from './Navigation';
import { ElementImage } from './widgets/ElementImage';
import burger from './img/burger-about.jpg';
const Menu = () => {
    return(
        <>
            <Navigation b="red"/>
            <ElementImage text="Menu" image={burger}/>
        </>
    );
}

export {Menu};