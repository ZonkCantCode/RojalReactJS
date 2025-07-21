import React, { useEffect, useState } from 'react';
import './Styles/ViewUser.css';
import { useNavigate } from 'react-router-dom';

export default function ViewUser() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    function handleDetailsClick(userId) {
        navigate(`/user-details/${userId}`);
    }

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
                        <th>Address</th>
                        <th>Action</th>
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
                            <td>
                                <button className='btn' onClick={() => handleDetailsClick(user.id)}>
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}