import React from 'react';
import Navbar from './Navbar/Navbar';
import HomePageMaster from './HomePage/HomePageMaster';

function Layout({ children }: any) {
  return (
    <>
      {/* <Navbar /> */}
      <HomePageMaster />
      {/* {children} */}
    </>
  );
}

export default Layout;
