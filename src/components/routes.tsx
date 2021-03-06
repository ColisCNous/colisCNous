import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRouteInterface } from '../interfaces/privateRouteInterface';

import Home from '../components/home/home'
import Connexion from './connexion/connexion';
import Subscribe from './subscribe/subscribe';
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
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path='/cgv' element={<Cgv/>}/>
    </Routes>
  )
}

export default RoutesApp;
