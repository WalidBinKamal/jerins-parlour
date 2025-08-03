import React from 'react';

const DashboardNavbar = ({ title, name }) => {
    return (
        <div className='flex justify-between bg-white p-7'>
            <div className='text-lg font-semibold'>{title}</div>
            <div className='text-lg font-semibold'>{name}</div>
        </div>
    );
};

export default DashboardNavbar;