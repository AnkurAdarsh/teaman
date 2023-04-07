
import logo from "./img/mrteaman-fulltransparent.png";
import logo1 from "./img/logo.jpg";
import { Link } from "react-router-dom";
import React, {useState} from "react";



export const Navigation = (props) =>{
    
    const [active, setActive] = useState(true);

    const changeNav = () => {
        let ul = document.querySelector('ul');
        if(!active){
            setActive(true);
            ul.classList.add('hidden');
            ul.classList.remove('top[80px]');
            ul.classList.remove('opacity-100');
        } else {
            setActive(false);
            ul.classList.remove('hidden');
            ul.classList.add('top-[90px]');
            ul.classList.add('opacity-100');
        }
    }

    return (
        <>
            <div className="container hidden sm:hidden lg:block lg:px-24">
                <p className="italic px-3">Call on <a href="tel:+917631027227">+919804466958</a></p>
            </div>
            <nav className="p-3 bg-amber-300 shadow ">
                <div className="px-5 md:px-24 lg:flex md:items-center md:justify-between">
                    <div className="flex justify-between">
                        <div className="w-56">
                            <img className="hidden md:block lg:block xl:block 2xl:block" title="Mr. Tea Man" src={logo} alt="Mr. Tea Man"/>
                            <img className="w-20  rounded-full md:hidden lg:hidden xsl:hidden 2xl:hidden" title="Mr. Tea Man" src={logo1} alt="Mr. Tea Man"/>
                        </div>
                        <div className="px-3 py-1 rounded-lg bg-orange-500 text-white lg:hidden block place-self-center cursor-pointer"  onClick={changeNav}>
                            {active?<i className={"fa fa-bars text-xl font-thin "} to="bar"></i> : <i className={"fa fa-times text-xl font-thin "} to="bar"></i>}
                        </div>
                    </div>
                    <ul className="lg:flex lg:items-center text-center z-10 lg:z-auto lg:static absolute bg-white lg:bg-amber-300 w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-out duration-300">
                        <li className="px-4 py-3 md:py-3">
                            <Link to={"/"} style={{color:props.a}} className="text-lg hover:text-red-600 hover:underline hover:transition-all duration-500">Home</Link>
                        </li>
                        <li className="px-4 py-3 md:py-3">
                            <Link to={"/Menu"} style={{color:props.b}} className="text-lg hover:text-red-600 hover:underline hover:transition-all duration-500">Menu</Link>
                        </li>
                        <li className="px-4 py-3 md:py-3">
                            <Link to={"/Aboutus"} style={{color:props.c}} className="text-lg hover:text-red-600 hover:underline hover:transition-all duration-500">About Us</Link>
                        </li>
                        <li className="px-4 py-3 md:py-3">
                            <Link to={"/Gallery"} style={{color:props.d}} className="text-lg hover:text-red-600 hover:underline hover:transition-all duration-500">Gallery</Link>
                        </li>
                        <li className="px-4 py-3 md:py-3">
                            <Link to={"/Contact"} style={{color:props.e}} className="text-lg hover:text-red-600 hover:underline hover:transition-all duration-500">Contact</Link>
                        </li>
                        <li className="">
                            <Link to={"/Contact"} className="">
                                <button className="px-5 py-2 text-white rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 ">
                                    Book Now &nbsp; <i className="fa fa-arrow-right cursor-pointer text-md"></i>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

