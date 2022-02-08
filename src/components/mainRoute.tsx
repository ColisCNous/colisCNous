import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Footer from './footer/footer';
import NavBar from './navBar/navBar';
import RoutesApp from './routes';

function MainRoute() {
  return (<div >
    <BrowserRouter>
      <NavBar />
      <div className='h-screen'>
        <RoutesApp />
      </div>
      <Footer />
    </BrowserRouter>
  </div>);
}

export default MainRoute;
