import React from 'react';
import { Outlet } from 'react-router-dom';

function UserModule() {
  return (
    <div>
      <h2>User Module</h2>
      <Outlet />
    </div>
  );
}

export default UserModule;
