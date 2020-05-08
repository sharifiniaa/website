import React from 'react';


import Header from './Header';


const Layout = ({children}) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Header/>
                {children}
            </div>
        </div>
    )
};


export default Layout;