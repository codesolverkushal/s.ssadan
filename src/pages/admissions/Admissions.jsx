// src/pages/Admissions.js
import React from 'react';
import { Outlet } from 'react-router-dom';

function Admissions() {
  return (
    <div className="container mx-auto my-8 p-4">
      <Outlet/>
    </div>
  );
}

export default Admissions;
