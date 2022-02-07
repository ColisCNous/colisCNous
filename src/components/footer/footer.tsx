import React from 'react';
import { Link } from 'react-router-dom';
import './../../sass/footer.scss'

function Footer() {
  return <footer className='footerContainer'>
      <p className="credit">© By RJ and Hamid</p>
    <nav className="navFooterContainer">
      <ul className='ulNav'>
        <li><Link to="/mention">Mentions</Link></li>
        <li><Link to="/confidencial">confidential</Link></li>
        <li><Link to="/road-map">Road Map</Link></li>
      </ul>
    </nav>
  </footer>;
}

export default Footer;
