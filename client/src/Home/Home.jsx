import React from 'react';
import "./Home.css";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAdd, getData } from '../Services/Communicator'
import authService from '../Services/auth-service';

function Home(props) {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [reentered_password, setreenteredpassword] = useState("");
    const [SignUpOrSignIn, setSignUpSignIn] = useState("Sign In");

    let navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (SignUpOrSignIn === "Sign In") {
            const data =await authService.login(email, password)
            console.log("Data received from login auth service is ",data)
            // const data =await getData(email, password)
            if (data.message !== "Successfully LoggedIn") {
                alert(data.message)
                console.log('user not registered')
                navigate("/")
            }
            else {
                console.log('Password Matches, the data sent to profile is +', data)
                navigate("/profile",{state:{email:email}})
            }
        }
        else {
            if (password !== reentered_password) {
                console.log('passwords does not match')
                navigate("/")
            }
            else {
                console.log('password and reentered passwords are equal')
                const res = await authService.register(name,email,password)
                // console.log("data received from register auth service is ", res)
                alert(res.message)
                // fetchAdd({ name, email, password });     //this is without jwt 
                navigate("/")
            }
        }
    }

    let SignIn_btn_class = SignUpOrSignIn === "Sign In" ? "blueButton" : "whiteButton";
    let SignUp_btn_class = SignUpOrSignIn === "Sign Up" ? "blueButton" : "whiteButton";
    return (
        <div>
            <div id="container">
                <div id="inner_container">
                    <h1> Welcome to Grapheme Labs</h1>

                    <div className="container-fluid">
                        <form onSubmit={handleSubmit}>
                            {(() => {
                                if (SignUpOrSignIn === "Sign Up") {
                                    return (
                                        <div className="name-input-box">
                                            <input placeholder="Enter Name"
                                                type="text"
                                                value={name}
                                                onChange={(e) => { setname(e.target.value) }} />
                                        </div>
                                    )
                                }
                            })()}
                            <div className="form-group">
                                <div className="email-input-box">
                                    <input placeholder="Enter Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => { setemail(e.target.value) }} />
                                </div>

                                <div className="password-input-box">
                                    <input placeholder="Enter Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => { setpassword(e.target.value) }} />
                                </div>
                            </div>
                            {(() => {
                                if (SignUpOrSignIn === "Sign Up") {
                                    return (
                                        <div className="name-input-box">
                                            <input placeholder="Re-enter Password"
                                                type="password"
                                                value={reentered_password}
                                                onChange={(e) => { setreenteredpassword(e.target.value) }} />
                                        </div>
                                    )

                                }

                            })()}
                            {(() => {
                                if (SignUpOrSignIn === "Sign Up" && password !== reentered_password) {
                                    return (
                                        <div className="password-doesnot-match-warning">
                                            <small className="text-danger">
                                                The passwords don't match.
                                            </small>
                                        </div>
                                    )
                                }
                            })()}
                            {/* {console.log('SignUporSignIn = ' + SignUpOrSignIn)} */}
                            <button className="btn btn-success" >{SignUpOrSignIn}</button>

                        </form>
                    </div >
                </div >
            </div >

            <div id="outer-container">
                <button className={SignIn_btn_class}
                    onClick={() => {
                        setSignUpSignIn("Sign In")
                    }}> Sign In </button>
                <button className={SignUp_btn_class}
                    onClick={() => {
                        setSignUpSignIn("Sign Up")
                    }}> Register</button>
            </div>
        </div >
    );

}

export default Home;
