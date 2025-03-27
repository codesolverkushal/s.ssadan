// src/pages/Academics.js
import React from 'react';
import { Outlet } from 'react-router-dom';

function Academics() {
  return (
    <div className="container mx-auto my-8 p-4">
      <Outlet/>
    </div>
  );
}

export default Academics;
