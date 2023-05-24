import React from 'react';
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import './Head.css'

function Head(props) {
    return (
        <div className={'header'}>
            <Navbar/>
            <Banner/>
        </div>
    );
}

export default Head;