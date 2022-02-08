import React from 'react';
import { Link } from 'react-router-dom';
import './../../sass/header.scss';

function NavBar() {
    return (
        <header className='headerContainer'>
            <nav className='navContainer'>
                <div className='logoDiv text-3xl'>
                    ColisCNous
                </div>

                <ul className='ulNav'>
                    <li className='liNav'><Link to="/colisCNous/" ><span><i className="fas fa-home"></i> </span> </Link></li>
                    <li className='liNav'><Link to="/colisCNous/subscribe"><span><i className="fas fa-address-card"></i></span> </Link></li>
                    <li className='liNav'><Link to="/colisCNous/connexion"><span><i className="fas fa-user"></i> </span></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
