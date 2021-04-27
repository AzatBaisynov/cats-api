import React from 'react';
import img from '../images/Blocks-1s-200px.svg'

const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <img src={img} alt=""/>
        </div>
    );
};

export default Spinner;