import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";
import Home from './Home';
import Rewards from './Rewards';
function Nav() {
    const [mDown1, setDown1] = useState("hidden");
    const [mDown2, setDown2] = useState("hidden");
    const [mDown3, setDown3] = useState("hidden");
    const [mDown4, setDown4] = useState("block");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Single state for menu toggle

    const hendlmenu1 = () => {
        setDown1("block");
        setDown2("hidden");
        setDown3("hidden");
        setDown4("hidden");
    };

    const hendlmenu2 = () => {
        setDown1("hidden");
        setDown2("block");
        setDown3("hidden");
        setDown4("hidden");
    };

    const hendlmenu3 = () => {
        setDown1("hidden");
        setDown2("hidden");
        setDown3("block");
        setDown4("hidden");
    };

    const hendlmenu4 = () => {
        setDown1("hidden");
        setDown2("hidden");
        setDown3("hidden");
        setDown4("hidden");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };

    return (
        <>
            <Router>
                <header className="w-full h-[100px] overflow-hidden bg-white shadow-md relative">
                    <nav className="w-full h-[100px] flex gap-4 md:gap-9 items-center px-4 md:px-[40px] justify-between">
                        <ul className="h-full flex items-center gap-4 md:gap-9">
                            <NavLink to="/">
                                <li onClick={hendlmenu4} className="list-none">
                                    <img src="img/logo.png" alt="" className="w-[40px] md:w-[50px]" />
                                </li>
                            </NavLink>

                            <div className="flex-col justify-center items-center relative h-full md:hidden lg:flex hidden">
                                <li onClick={hendlmenu1} className="text-[12px] md:text-[14px] font-bold uppercase hover:text-[#00754a] transition-colors">
                                    <NavLink to="/menu">Menu</NavLink>
                                </li>
                                <div className={`down ${mDown1}`}></div>
                            </div>

                            <div className="flex-col justify-center items-center relative h-full md:hidden lg:flex hidden">
                                <li onClick={hendlmenu2} className="text-[12px] md:text-[14px] font-bold uppercase hover:text-[#00754a] transition-colors">
                                    <NavLink to="/gift">Gift Cards</NavLink>
                                </li>
                                <div className={`down ${mDown2}`}></div>
                            </div>

                            <div className="flex-col justify-center items-center relative h-full md:hidden lg:flex hidden">
                                <li onClick={hendlmenu3} className="text-[12px] md:text-[14px]  font-bold uppercase hover:text-[#00754a] transition-colors">
                                    <NavLink to="/rewards">Rewards</NavLink>
                                </li>
                                <div className={`down ${mDown3}`}></div>
                            </div>
                        </ul>

                        <div className="gap-4 md:gap-12 items-center hidden md:hidden lg:flex">
                            <div className="flex gap-2 items-center hover:text-[#00754a] transition-colors">
                                <FaLocationDot className="text-[18px] md:text-[21px] hover:text-[#00754a] transition-colors" />
                                <h1 className="text-[11px] md:text-[13px] font-[600]">Find a store</h1>
                            </div>

                            <div className="flex gap-2 md:gap-4">
                                <button className="w-[70px] md:w-[90px] p-1 rounded-full text-[12px] md:text-[14px] font-[600] border-[1px] border-[#000] hover:bg-slate-200 transition-colors">Sign in</button>
                                <button className="w-[70px] md:w-[90px] p-1 rounded-full text-[12px] md:text-[14px] text-white font-[600] bg-black hover:bg-slate-700 transition-colors">Join now</button>
                            </div>
                        </div>

                        <div className="flex justify-center items-center lg:hidden">
                            {isMenuOpen ? (
                                <HiXMark onClick={toggleMenu} className="text-[30px] cursor-pointer hidden" />
                            ) : (
                                <IoMenuSharp onClick={toggleMenu} className="text-[30px] cursor-pointer" />
                            )}
                        </div>
                    </nav>
                </header>

                {/* Sidebar for mobile menu */}
                <div className={`fixed top-0 left-0 w-full h-full bg-white text-black transition-transform duration-300 ${isMenuOpen ? '-translate-x-0' : 'translate-x-full'}`}>
                <HiXMark onClick={toggleMenu} className="text-[30px] cursor-pointer absolute right-10 top-10" />
                    <div className="flex flex-col items-start justify-center h-full px-10">
                        <NavLink to="/menu" className="text-[18px] font-bold mb-4 hover:text-[#00754a]" onClick={toggleMenu}>Menu</NavLink>
                        <NavLink to="/gift" className="text-[18px] font-bold mb-4 hover:text-[#00754a]" onClick={toggleMenu}>Gift Cards</NavLink>
                        <NavLink to="/rewards" className="text-[18px] font-bold mb-4 hover:text-[#00754a]" onClick={toggleMenu}>Rewards</NavLink>
                        <div className='w-full h-[2px] bg-black'></div>
                        <button className="mt-6 w-[90px] p-2 rounded-full text-[14px] font-[600] border-[1px] border-black hover:bg-slate-200 transition-colors">Sign in</button>
                        <button className="mt-3 w-[90px] p-2 rounded-full text-[14px] font-[600] bg-black text-white hover:bg-gray-800 transition-colors">Join now</button>
                        <div className="flex gap-2 items-center hover:text-[#00754a] transition-colors pt-5">
                            <FaLocationDot className="text-[18px] md:text-[21px] hover:text-[#00754a] transition-colors" />
                            <h1 className="text-[11px] md:text-[13px] font-[600]">Find a store</h1>
                        </div>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/gift" element={<Gift />} />
                    <Route path="/rewards" element={<Rewards />} />
                </Routes>
            </Router>
        </>
    );
}

function Menu() {
    return <h1>Menu</h1>;
}


function Gift() {
    return <h1>Gift</h1>;
}

export default Nav;
