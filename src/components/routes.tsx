import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { PrivateRouteInterface } from '../interfaces/privateRouteInterface';




const PrivateRoute = ({ component: Component, token, role,path,roles}: PrivateRouteInterface) =>
(

  token && token !== "" && role && role !== "" && roles.includes(role) ? (
    <Route path={path} element={<Component />}/>
  ) : (
    <Route path="*" element={<Navigate to={{ pathname: '/login' }} />} />

  )
  
)

const Routes = () => {
  return <div></div>;
}

export default Routes;
