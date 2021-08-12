import React from 'react';
import { Route } from 'react-router-dom';  
import UserHeader from './UserHeader';
import Footer from './Footer';

const LayoutTwo = ({ children }) => (
    <div>
        <UserHeader />
            {children}
        <Footer />
    </div>
);

const UserLayout = ({component: Component, ...rest}) => {  
    return (  
        <Route {...rest} render={props => (  
            <LayoutTwo>  
                <Component {...props} />  
            </LayoutTwo>  
        )} />  
    )
};

export default UserLayout;