import React from 'react';
import avatar from '../../../assets/img/man.png'
import logo from '../../../assets/img/Netflix_2015_logo.svg.png'
import './Navbar.css'

function Navbar() {
    return (
        <div className={'navbar'}>
            <img src={logo} alt={'logo'} className={'logo'}/>
            <img src={avatar} alt={'avatar'} className={'logo'}/>
        </div>
    );
}

export default Navbar;