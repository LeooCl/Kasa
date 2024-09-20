import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logokasa.png';

const Header = () => {
    return (
        <header>
            <div className='header-style'>
                <h1>
                    <NavLink to="/">
                        <img src={logo} alt="Logo Kasa" title="Logo Kasa" />
                    </NavLink>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">A Propos</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;