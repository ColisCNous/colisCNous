import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Footer from './footer/footer';
import NavBar from './navBar/navBar';
import RoutesApp from './routes';

function MainRoute() {
  return (<div>
    <BrowserRouter>
      <NavBar />
      <RoutesApp />
      <Footer />
    </BrowserRouter>
  </div>);
}

export default MainRoute;
