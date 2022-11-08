import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../Resources/logo.png'
import './NavBar.css'
import { BsList, BsPlus } from "react-icons/bs";

const NavBar = () => {
    const [IsBtnActive, setIsBtnActive] = useState(true)
    const [navButtonOn, setNavButtonOn] = useState(0)
    return (
        <nav className='bg-black h-20 grid grid-cols-6 sticky top-0 z-50'>
            <div className='flex items-center justify-start pl-12 gap-3 px-3 col-span-4 md:col-span-3 '>
                <Link to='/'> <img src={logo} className='w-12 h-12' alt="app logo a bunny" /></Link>
                <Link to='/'>
                    <h1 className='text-xl md:text-5xl text-white font-bold select-none'>Tammat's Centre</h1>
                </Link>
            </div>
            <div className='col-span-2 md:col-span-3 flex  justify-center items-center'>
                <div className={`hidden lg:block `}>
                    <div className={`flex justify-end items-center gap-5 px-10`}>
                        <Link onClick={() => setNavButtonOn(1)} className={`px-2 py-1 font-bold hover:border-b  hover:border-slate-400  text-stone-200 ${navButtonOn === 1 ? 'border-b border-slate-400' : ''}`} to='/service'>Service</Link>
                        <Link onClick={() => setNavButtonOn(2)} className={`px-2 py-1 font-bold hover:border-b  hover:border-slate-400  text-stone-200 ${navButtonOn === 2 ? 'border-b border-slate-400' : ''}`} to='/gallery'>Gallery</Link>
                        <Link onClick={() => setNavButtonOn(3)} className={`px-2 py-1 font-bold hover:border-b  hover:border-slate-400  text-stone-200 ${navButtonOn === 3 ? 'border-b border-slate-400' : ''}`} to='/blog'>Blog</Link>
                        <div className="dropdown dropdown-end ">
                            <img tabIndex={0} className='  m-auto w-12 h-12 rounded-full bg-slate-500' src='' alt="" />
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                {/*  {
                                ShowBtn ?
                                    <li><button onClick={signOutFunction}>Log Out</button></li>
                                    :
                                    <>
                                        <li><Link to='/login'>Log In</Link></li>
                                        <li><Link to='register'>Register</Link></li>
                                    </>
                            } */}

                            </ul>
                        </div>
                    </div>

                </div>
                <div className={` lg:hidden ${IsBtnActive ? 'hidden' : 'block fixed top-20 bottom-0 left-0 right-0 flex-col bg-black '}`}>
                    <div className={`grid grid-cols-1 justify-end items-center gap-5 px-10 text-center`}>
                        <Link onClick={() => setNavButtonOn(1) + setIsBtnActive(true)} className={`px-2 py-1 font-bold hover:border-b  hover:border-slate-400  text-stone-200 ${navButtonOn === 1 ? 'border-b border-slate-400' : ''}`} to='/service'>Service</Link>
                        <Link onClick={() => setNavButtonOn(2) + setIsBtnActive(true)} className={`px-2 py-1 font-bold hover:border-b  hover:border-slate-400  text-stone-200 ${navButtonOn === 2 ? 'border-b border-slate-400' : ''}`} to='/gallery'>Gallery</Link>
                        <Link onClick={() => setNavButtonOn(3) + setIsBtnActive(true)} className={`px-2 py-1 font-bold hover:border-b  hover:border-slate-400  text-stone-200 ${navButtonOn === 3 ? 'border-b border-slate-400' : ''}`} to='/blog'>Blog</Link>
                    </div>

                </div>
                <div className='lg:hidden flex justify-end items-center  p-1 rounded-full select-none text-white'>
                    {
                        IsBtnActive ?
                            <button onClick={() => setIsBtnActive(false)}><BsPlus className='w-12 h-12' /> </button>
                            :
                            <button onClick={() => setIsBtnActive(true)}><BsList className='w-12 h-12' />  </button>

                    }
                </div>


            </div>
        </nav>
    );
};

export default NavBar;