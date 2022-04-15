import React from 'react';
import { Link } from 'react-router-dom';
import './../../sass/footer.scss'

function Footer() {
  return <footer className='footerContainer'>
    <nav className="navFooterContainer">
      <ul className='ulNav'>
        <li className='liNavFooter'><Link to="/cgv">Mentions</Link></li>
        <li className='liNavFooter'><Link to="/confidencial">confidential</Link></li>
        <li className='liNavFooter'><Link to="/road-map">Road Map</Link></li>
      </ul>
    </nav>
    <p className="credit">© By RJ and Hamid</p>
  </footer>;
}

export default Footer;
