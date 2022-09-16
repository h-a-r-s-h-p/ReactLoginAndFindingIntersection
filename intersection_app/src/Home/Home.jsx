import React from 'react';
import "./Home.css";

import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [SignUpOrSignIn, setSignUpSignIn] =useState("Sign In");
    
    let navigate = useNavigate();
    const handleSubmit= ()=>{
        if(SignUpOrSignIn==="Sign In"){
            navigate("/profile")
        }
        else{
            navigate("/verify")
        }
    }

    function handleChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
          [name]: value
        });
      }

        let SignIn_btn_class = SignUpOrSignIn === "Sign In" ? "blueButton" : "whiteButton";
        let SignUp_btn_class = SignUpOrSignIn === "Sign Up" ? "blueButton" : "whiteButton";
        return (
            <div>
                {console.log(`SignUpOrSignIn = ` + SignUpOrSignIn)}
                {console.log(`SignIn_btn_class = ` + SignIn_btn_class)}
                {console.log(`SignIn_Up_class = ` + SignUp_btn_class)}
                <div id="container">
                    <div id="inner_container">
                        <h1> Welcome to Grapheme Labs</h1>
                        <div class="container-fluid">
                            <form >
                                <div class="form-group">
                                    <div class="email-input-box">
                                        <input  placeholder="Enter Email" 
                                                type="email"
                                                class="form-control" 
                                                formControlName="email"
                                                onChange={handleChange} />
                                    </div>

                                    <div class="password-input-box">
                                        <input  placeholder="Enter Password"
                                                type="password"
                                                class="form-control" 
                                                formControlName="password"
                                                onChange={handleChange} />
                                    </div>

                                </div>

                                <button class="btn btn-success" type="submit" onClick={handleSubmit}>{SignUpOrSignIn}</button>

                            </form>
                        </div >
                    </div >
                </div >

                <div id="outer-container">
                    <button className={SignIn_btn_class}
                        onClick={() => {
                            setSignUpSignIn("Sign In")
                        }}> "Sign In" </button>
                    <button className={SignUp_btn_class}
                        onClick={() => {
                            setSignUpSignIn("Sign Up")
                        }}> "Sign Up" </button>
                </div>
            </div >
        );

}

export default Home;
