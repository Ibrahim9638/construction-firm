import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[1450px] mx-auto'>
            <Outlet/>
        </div>
    );
};

export default Root;