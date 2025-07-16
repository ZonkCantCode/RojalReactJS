import React from 'react';
import './Styles.css';

export default function Usercard({ user }) {
  if (!user || !user.picture || !user.name) {
    return <div>Loading user data...</div>;
  }

  return (
    <div className='user-card'>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <div className="user-info">
        <h2>{`${user.name.first} ${user.name.last}`}</h2>
        <p>Email: {user.email}</p>
        <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
        <p>Phone: {user.phone}</p>
        <p>Username: {user.login.username}</p>
        <p>Age: {user.dob.age}</p>
      </div>
      <div className="user-card-footer">
        <p>Registered: {new Date(user.registered.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
