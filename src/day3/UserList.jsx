import React, { useDeferredValue, useEffect, useState } from 'react'

export default function UserList() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
    }, []);

  return (
    <div className='user-container'>
        <h1 className='title'>User List</h1>
        <table className='user-table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>address</th>
                </tr>                
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}