import React, { useEffect } from 'react';
import { useAxiosCenter } from '../../customHooks/useAxiosCenter';

function Home() {

  const {getAdress}=useAxiosCenter()
  useEffect(()=>{
    getAdress().then(res=>console.log(res))
  },[])
  return <div>Home</div>;
}

export default Home;
