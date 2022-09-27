import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const { Component } = props;
    const navigate = useNavigate();

    let user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        console.log("Inside protected component")
        console.log("User inside protected = ", user)
        if (!user) {
            alert("Please login to go to profile")
            navigate('/')
        }
    })
    return (
        <div>
            {(() => {
                if (user) {
                    return (
                        <Component/>
                    )
                }
            })()}
        </div>
    );
}

export default Protected;
