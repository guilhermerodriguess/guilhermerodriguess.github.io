import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuNav from '../menu-nav/menu-nav';
import Sidebar from '../side-bar/side-bar';

function Layout() {
  return (
    <>
      <MenuNav />
      <Outlet />
      <Sidebar />
    </>
  );
}

export default Layout;
