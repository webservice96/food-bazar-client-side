import React from 'react';
import Resturant from '../Resturant/Resturant';
import Sidebar from '../Sidebar/Sidebar';

const ContentContainer = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-x-10">
                <Sidebar />
                <div className="md:col-span-9 xs:col-span-12 sm:col-span-12">
                    <Resturant />
                </div>
            </div>
        </>
    );
};

export default ContentContainer;