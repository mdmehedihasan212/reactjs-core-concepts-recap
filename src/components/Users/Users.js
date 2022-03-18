import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './Users.css'
const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>User API Information</h1>
            <div className='users-container'>
                {
                    users.map(user => <User user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;