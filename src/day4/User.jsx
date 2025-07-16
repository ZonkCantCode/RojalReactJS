import React, { useEffect, useState } from 'react';
import Usercard from './component/UserCard';
import './component/Styles.css';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '24px' }}>User List</h1>
      {users.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Loading users...</p>
      ) : (
        <div className='user-grid'>
          {users.map((user, index) => (
            <Usercard key={index} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
