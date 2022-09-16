import React, { Component } from 'react';

class signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        };
        // console.log("inside GraphInput constructor\n");

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        
    }
}

export default signup;