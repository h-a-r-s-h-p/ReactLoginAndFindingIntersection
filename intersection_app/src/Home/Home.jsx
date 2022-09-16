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
        let SignOut_btn_class = this.state.SignUpOrSignIn === "Sign Up" ? "blueButton" : "whiteButton";
        return (
            <div>
                <form /*onSubmit={this.handleSubmit}*/>
                    <input type="text"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                    // onChange={this.handleChange}
                    />
                    <input type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                    // onChange={this.handleChange}
                    />
                    <button className="submit" >{this.state.SignUpOrSignIn} </button>
                </form>
                <button className={SignIn_btn_class}
                    onClick={(e) => {
                        this.state.SignUpOrSignIn = "Sign In";
                    }}> "Sign In" </button>
                <button className={SignOut_btn_class}
                    onClick={(e) => {
                        this.state.SignUpOrSignIn = "Sign Up";
                    }}> "Sign Up" </button>

            </div>
        );
    }
}

export default Home;