import React, { useState } from 'react';
import './/User.css'
const User = (props) => {
    const { name, address, email, phone, website } = props.user;

    const [boost, setBoost] = useState(90)
    const bootsTaka = () => {
        const total = boost * 2;
        setBoost(total)
    }

    return (
        <div className='user'>
            <h3>Name : {name}</h3>
            <p>Street : {address.street} City : {address.city} Zip Code : {address.zipcode}</p>
            <p>Phone : {phone}</p>
            <p>E-mail : {email}</p>
            <p>Website : {website}</p>
            <p>Boost Total Taka: {boost}</p>
            <button onClick={bootsTaka}>Boost Post</button>
        </div>
    );
};

export default User;