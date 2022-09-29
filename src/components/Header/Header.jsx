import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation.jsx';

function Header({ loggedIn }) {
    return (
        <header className={`header ${loggedIn ? 'no-background' : ''}`}>
            <div className='header__container'>
                <Link to='/'>
                    <img className='header__logo' src={logoHeader} alt='логотип'/>
                </Link>
                <Navigation loggedIn={loggedIn} />
            </div>
        </header>
    )
}

export default Header;