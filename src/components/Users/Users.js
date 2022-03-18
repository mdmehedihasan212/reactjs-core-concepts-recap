import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>Name: </h1>
            <h3>Address: </h3>
            <h3>Phone: </h3>
            <h3>Website: </h3>
        </div>
    );
};

export default Users;