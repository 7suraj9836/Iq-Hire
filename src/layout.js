import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header';
import Router from './router/router';
import Footer from './components/footer';
import { useNavigate } from 'react-router';

const Layout = () => {
    const isAuthenticated = localStorage.getItem('accessToken') ? true : false;

          

    return (
        <>
            {/* {isAuthenticated && <Header />} */}
            <Router />
            {/* {isAuthenticated && <Footer />} */}
        </>
    );
};

export default Layout;
