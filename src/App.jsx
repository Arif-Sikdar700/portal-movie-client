import React from 'react'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='w-11/12 mx-auto'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
