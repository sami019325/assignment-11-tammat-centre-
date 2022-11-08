import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterComp from './FooterComp';
import NavBar from './nav/NavBar';

const CommonPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <FooterComp></FooterComp>
        </div>
    );
};

export default CommonPage;