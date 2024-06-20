import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://hooliback.onrender.com/forgotpassword', { 
            email,
        }, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        .then((response) => {
            console.log(response.data, "UserRegister");
            alert(response.data.status);
        })
        .catch((error) => {
            console.error("There was an error!", error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your email</label>
            <input type="email" required onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ForgotPassword;
