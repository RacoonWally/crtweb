import React from "react";
import {Link} from 'react-router-dom'

import './index.scss'


const NavBar = () => {

    return (
        <div className='nav-bar'>
            <div className='nav-bar_text'>
                <Link to='/' className='nav-bar_text_link'>Полный список</Link>
            </div>
            <div className='nav-bar_text'>
                <Link to='/favourite' className='nav-bar_text_link'>Избранное</Link>
            </div>
        </div>
    )
};

export default NavBar
