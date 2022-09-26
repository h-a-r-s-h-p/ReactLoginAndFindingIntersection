import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        console.log("Inside Protected, login = ", login)
        if(login==="false"){
            alert("Please login to go to profile")
            navigate('/')
        }
    })
    return (
        <div>
            <Component/>
        </div>
    );
}

export default Protected;
