import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
import GeminiHelper from './GeminiHelper';
function Mainpage() {
  return (
    <div className="relative ">
      <Header />
      <GeminiHelper />
    <Outlet/>
   
    </div>
  )
}

export default Mainpage
