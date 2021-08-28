import React from 'react';
import './Login.scss';
import {handleErrors} from "../../utils/error-handler";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasError: false
        }
    }

    singIn() {
        fetch('http://localhost:8000/users/sing-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.state.email, password: this.state.password}),
        })
            .then(response => handleErrors(response))
            .then(response => response.json())
            .then((response) => {
                localStorage.setItem("user", JSON.stringify(response))
                window.open(process.env.PUBLIC_URL + '/#/', '_self')
            })
            .catch(() => {
                this.setState({ ...this.state, hasError: true })
            })
    }

    emailChange(event) {
        this.setState({
            ...this.state,
            email: event.target.value
        });
    }

    passwordChange(event) {
        this.setState({
            ...this.state,
            password: event.target.value
        });
    }

    render() {
        return <div className='login container'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={this.state.email} onChange={this.emailChange.bind(this)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)} className="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
                </div>
                {this.state.hasError && (<div className="alert alert-danger" role="alert">
                    Your email or password is incorrect!</div>)}
                <button type="submit" className="btn btn-secondary" onClick={this.singIn.bind(this)}>Sing In</button>
        </div>
    }
}

export default Login;
