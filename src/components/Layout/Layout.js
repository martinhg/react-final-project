import React from 'react';
import './Layout.scss';

//Components
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            { props.children }
        </React.Fragment>
    );
}

export default Layout;