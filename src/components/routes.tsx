import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRouteInterface } from '../interfaces/privateRouteInterface';

import Home from '../components/home/home'
import Connexion from './connexion/connexion';
import Subscribe from './subscribe/subscribe';
import NotFound from './notFoundPage/notFound';
import Cgv from './cgv/cgv';


// const PrivateRoute = ({ component: Component, token, role,path,roles}: PrivateRouteInterface) =>
// (

//   token && token !== "" && role && role !== "" && roles.includes(role) ? (
//     <Route path={path} element={<Component />}/>
//   ) : (
//     <Route path="*" element={<Navigate to={{ pathname: '/login' }} />} />

//   )
  
// )

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/colisCNous" element={<Home />} />
      <Route path="/colisCNous/connexion" element={<Connexion />} />
      <Route path="/colisCNous/subscribe" element={<Subscribe />} />
      <Route path='/colisCNous/cgv' element={<Cgv/>}/>
      <Route path='/colisCNous/*' element={<NotFound/>}/>
    </Routes>
  )
}

export default RoutesApp;
