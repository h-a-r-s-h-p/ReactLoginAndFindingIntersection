import React, { Component } from 'react';
import "./Home.css";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            SignUpOrSignIn: "Sign In"
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }


    render() {
        let SignIn_btn_class = this.state.SignUpOrSignIn === "Sign In" ? "blueButton" : "whiteButton";
        let SignUp_btn_class = this.state.SignUpOrSignIn === "Sign Up" ? "blueButton" : "whiteButton";
        return (
            <body>
                {console.log(`SignUpOrSignIn = ` + this.state.SignUpOrSignIn)}
                {console.log(`SignIn_btn_class = ` + SignIn_btn_class)}
                {console.log(`SignIn_Up_class = ` + SignUp_btn_class)}
                <div id="container">
                    <div id="inner_container">
                        <h1> Welcome to Grapheme Labs</h1>
                        <div class="container-fluid">
                            <form >
                                <div class="form-group">
                                    <div class="email-input-box">
                                        <input placeholder="Enter Email" type="email"
                                            class="form-control" formControlName="email" />
                                    </div>

                                    <div class="password-input-box">
                                        <input placeholder="Enter Password" type="password"
                                            class="form-control" formControlName="password" />
                                    </div>

                                </div>

                                <button class="btn btn-success" type="submit">{this.state.SignUpOrSignIn}</button>

                            </form>
                        </div >
                    </div >
                </div >

                <div id="outer-container">
                    <button className={SignIn_btn_class}
                        onClick={() => {
                            this.setState({ SignUpOrSignIn: "Sign In" })
                        }}> "Sign In" </button>
                    <button className={SignUp_btn_class}
                        onClick={() => {
                            this.setState({ SignUpOrSignIn: "Sign Up" })
                        }}> "Sign Up" </button>
                </div>
            </body >
        );
    }
}

export default Home;