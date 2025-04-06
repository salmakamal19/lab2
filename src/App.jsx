import React from 'react';
import './App.css';
import UserList from './UserList'; 
import CreateUser from './CreateUser';

function App() {
  return (
    <div className="App">
      <h1>User Data</h1>
      <UserList /> 
      <CreateUser /> 
      

    </div>
  );
}

export default App;
