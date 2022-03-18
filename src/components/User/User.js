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
            <h2>Name : {name}</h2>
            <p>Street : {address.street} City : {address.city} Zip Code : {address.zipcode}</p>
            <p>Phone : {phone}</p>
            <p>E-mail : {email}</p>
            <p>Website : {website}</p>
            <p>Boost Per Day: {boost}</p>
            <button id='btn-id' onClick={bootsTaka}>Boost Post</button>
        </div>
    );
};

export default User;