import React from 'react';
import Header from '@components/Header.jsx';

const layout = ({ children}) => {
    return (
        <div className="layout">
            <Header/>
            {children}
        </div>
    );
}

export default layout;