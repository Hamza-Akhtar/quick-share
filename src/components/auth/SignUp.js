import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (

            <div className="container center ">
                <form onSubmit={this.onSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstname">first name</label>
                        <input type="text" id="firstname" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">last name</label>
                        <input type="text" id="lastname" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">email</label>
                        <input type="email" id="email" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Sign Up</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default SignUp
