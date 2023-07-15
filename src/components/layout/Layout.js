import React from 'react';
//component
import Footer from './Footer';
import Header from './Header';

function Layout({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;