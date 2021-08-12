import React from 'react';
import { Route } from 'react-router-dom';  
import Header from './Header';
import Footer from './Footer';

const LayoutOne = ({ children }) => (
    <div>
        <Header />
            {children}
        <Footer />
    </div>
);

const Layout = ({component: Component, ...rest}) => {  
    return (  
        <Route {...rest} render={props => (  
            <LayoutOne>  
                <Component {...props} />  
            </LayoutOne>  
        )} />  
    )
};

export default Layout;