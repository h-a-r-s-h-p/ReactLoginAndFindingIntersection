import React from 'react';
import { useParams } from 'react-router-dom';


function Profile() {
    const params = useParams()
    return (
        <div>
            Welcome {params.email}
        </div>
    );
}

export default Profile;