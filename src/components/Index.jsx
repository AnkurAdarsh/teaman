import React from 'react';
// import { Link } from 'react-router-dom';
import './css/style.css';
import { Navigation } from './Navigation';
// import girlteamaking from './img/girl-tea-making.mp4';
import steakmaking from './img/steak-making1.mp4';
import { ElementVideo } from './widgets/ElementVideo';
// import ShopImageHome from './img/shop-image-home.jpg';
import ShopImageHome from './img/bb.jpg';
// import { IngredientList } from './widgets/IngredientList';
import toppics from './img/parcelli.png';
// import bmenu1 from './img/bg-menu1.jpg';
// import image1 from './img/herbs1.png';
// import image2 from './img/herbs2.png';
// import veg from './img/veg.png';
// import nonveg from './img/non-veg.png';
// import masaladosa from "./img/masala-dosa.jpg";
// import friendschai from "./img/chai-friends.jpg";
// import masalachai from "./img/masala-chai.jpg";
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
                    <div className='z-20 absolute'>
                        {/* <IngredientList 
                            name={"Masala dosa"} 
                            image={masaladosa}
                            description={"Arguably South India’s most renowned culinary export, masala dosas are famous the world over."} 
                            type={veg} 
                            cost={"Rs. 100"}/>
                        <IngredientList 
                            name={"Chaat"} 
                            image={masaladosa}
                            description={"Synonymous with Delhi street food vendors, chaat is one of India’s most delicious savoury snacks."} 
                            type={nonveg} 
                            cost={"Rs. 200"}/>
                        <IngredientList 
                            name={"Masala chai"} 
                            image={masalachai}
                            description={"India’s most famous export, masala chai can be found being sold by everywhere from high end restaurants to chaiwallas at train stations."} 
                            type={veg} 
                            cost={"Rs. 75"}/>
                        <IngredientList 
                            name={"Masala dosa"} 
                            image={masaladosa}
                            description={"Arguably South India’s most renowned culinary export, masala dosas are famous the world over."} 
                            type={nonveg} 
                            cost={"Rs. 125"}/>
                        <div className='py-10 text-center'>
                            <Link to={"./Menu"} className="">
                                <button className="px-5 py-2 text-white rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 ">
                                    Explore our Menu &nbsp; <i className="fa fa-arrow-right cursor-pointer text-md"></i>
                                </button>
                            </Link>
                        </div> */}
                    </div>
                    {/* <div className='pt-28 sm:pt-28 md:pt-28 lg:pt-32 overflow-hidden'>
                        <div className='absolute max-w-full left-0 z-[-1]'>
                            <img src={bmenu1} alt="image3" className='brightness-50 opacity-90'/>
                        </div>
                    </div> */}
                    <div className='pt-28 sm:pt-28 md:pt-28 lg:pt-28 overflow-hidden'></div>
                    <SliderHome/>
                {/* <div className='py-10 text-center'>
                    <Link to={"./Menu"} className="">
                        <button className="px-5 py-2 text-white rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 ">
                            Explore our Menu &nbsp; <i className="fa fa-arrow-right cursor-pointer text-md"></i>
                        </button>
                    </Link>
                </div> */}
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