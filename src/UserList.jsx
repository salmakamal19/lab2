import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import UserCard from './UserCard';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);  
  

  useEffect(() => {
 
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/users');
        setUsers(response.data);
       
        const usersWithImages = response.data.map((user, index) => ({
          ...user,
        avatar: `https://randomuser.me/api/portraits/men/${index + 1}.jpg`,
      }));
      setUsers(usersWithImages);

      } catch (err) {
        console.error("Error fetching users", error);

      }
    };

    fetchUsers();  
  }, []); 

 

  return (
    <div className="users-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
       
      ))}
    </div>
  );
};

export default UserList;
