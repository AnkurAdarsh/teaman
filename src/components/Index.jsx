import React from 'react';
import './css/style.css';
import { Navigation } from './Navigation';
import steakmaking from './img/steak-making1.mp4';
import { ElementVideo } from './widgets/ElementVideo';
import ShopImageHome from './img/bb.jpg';
import toppics from './img/parcelli.png';
import SliderHome from './widgets/SliderHome';


const Home = () => {
    return(
        <>
            {/* Navigation bar */}
            <Navigation a="red"/> 
            

            {/* <ElementVideo video={girlteamaking} quotes="&#8220; A cup of tea is a cup of peace. &#8221;"/> */}
            <ElementVideo video={steakmaking} heading="Taste from Kolkata (India)" quotes="&#8220; Everything I brew, I brew it for you. &#8221;"/>
            
            {/* Introduction */}
            <div className='container p-5 max-w-full bg-transparent lg:px-14 lg:pt-10 xl:px-36 xl:pt-20 xl:pb-20 2xl:pt-44 2xl:pb-20'>
                {/* <div className='sm:py-20'> */}
                    <div className='lg:flex md:py-5 lg:py-0 xl:py-0'>
                        <div className='sm:py-5 md:py-12 lg:py-5 lg:flex-col p-5'>
                            <div className='p-2'>
                                <span className='text-4xl grid text-center font-Berk md:text-left'>Mr. Tea Man</span>
                            </div>
                            <div className='p-2'>
                                <span className='text-xl grid text-center font-raleway md:text-left'>Recreate nostalgic memories</span>
                            </div>
                            <div className='p-2'>
                                <p className='font-sans text-lg font-medium text-center md:text-left'>Heart twisting food destination of Barasat, Kolkata. 'Burmese Bahar' promises 5-star Burmese cuisine in a pocket friendly budget. Burmese Bahar is a must try for all food lovers who crave for best quality food in an artistic and homely 19 to 23 seater dining place. We are very optimistic about fast popularity of Mohinga, Ohn-No Khao Swe, Lor Mee, Sticky Rice Rolls, Danbauk Fish, boutique desserts and drinks served by Burmese Bahar.</p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='img-shadow'>
                                <div className='p-1 rounded bg-slate-400 transition hover:duration-300 hover:-translate-y-3  delay-75 hover:ease-in-out'>
                                    {/* <img src={image1} alt='image1' className='w-48'/> */}
                                    <img src={ShopImageHome} alt='img' className='rounded lg:max-w-md xl:max-w-lg 2xl:max-w-xl '/>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>

            {/* Menu */}
            <div className=''>
                <div className='h-10 pb-44 md:pb-48' >
                    <div className='py-20 bg-amber-100'>
                        <div className='grid place-items-center max-w-full'>
                            <img src={toppics} alt="image2" className='w-28 p-2'/>
                            <div className='p-2'>
                                <span className='text-2xl md:text-4xl grid text-center font-Berk md:text-left'>Our Menu</span>
                            </div>
                            <div className='p-3 grid place-items-center'>
                                <span className='text-lg tracking-wider md:text-2xl font-bold grid text-center font-raleway'>Quality Ingredients, Tasty Meals</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='pt-28 sm:pt-28 md:pt-28 lg:pt-28 overflow-hidden'></div>
                    <SliderHome/>
                </div>
            </div>
            
            {/* <div className='pt-96'>
            <div className='pt-96'></div>
            <ElementVideo video={steakmaking} heading="Taste from Kolkata (India)" quotes="&#8220; Everything I brew, I brew it for you. &#8221;"/>
            </div> */}

        </>
    );
}

export {Home};