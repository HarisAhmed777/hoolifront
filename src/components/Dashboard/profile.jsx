import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../content';
import './profile.css';
import { baseUrl } from '../../url';
import profile from '../../images/profile.jpg'; // Importing the profile image

function Profile() {
    const [data, setData] = useState(null);
    const { user } = useContext(Context);

    useEffect(() => {
        fetch(`${baseUrl}/user?email=${user}`)
            .then(res => res.json())
            .then(view => {
                setData(view);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, [user]);

    return (
        <div className='profile-container prop' style={{ backgroundImage: `url(${profile})` }}>
            <h1 className='profile-header text-white'>Your Profile</h1>
            {data ? (
                <div key={data._id} className='profile-item row'>
                    <p>
                        <span className='profile-label'>First Name:</span>
                        <span className='profile-value d-inline'>{data.firstname}</span>
                    </p>
                    <p>
                        <span className='profile-label'>Last Name:</span>
                        <span className='profile-value d-inline'>{data.lastname}</span>
                    </p>
                    <p>
                        <span className='profile-label'>Mobile Number:</span>
                        <span className='profile-value d-inline'>{data.mobilenumber}</span>
                    </p>
                    <p className='col-12'>
                        <span className='profile-label'>Email:</span>
                        <span className='profile-value d-inline em'>{data.email}</span>
                    </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
