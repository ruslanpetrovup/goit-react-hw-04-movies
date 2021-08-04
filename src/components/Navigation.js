import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header>
            <ul className="navigation">
                <li><NavLink activeClassName="navLick--active" exact to='/'>Home</NavLink></li>
                <li><NavLink activeClassName="navLick--active" to='/movies'>Movies</NavLink></li>
            </ul>
        </header>
    )
}
export default Navigation