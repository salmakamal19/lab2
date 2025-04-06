import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
     
  
  return (
    <div className="user-card">
      
      <img
        src={user.avatar} 
        alt="User Avatar"
        className="user-avatar"
      />
      
      <h3>{user.name.firstname} {user.name.lastname}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>

     
      
    </div>
  );
};

export default UserCard;
