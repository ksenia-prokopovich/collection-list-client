import React from 'react';
import './Registration.scss';


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            email: '',
            password: ''
        }
    }

    create(){
        fetch('http://localhost:8000/users/sing-up', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstname: this.state.firstname, email: this.state.email, password: this.state.password}),
        })
            .then(() => {
                this.props.history.push(`/sing-in`)
            });
    }

    firstnameChange(event) {
        this.setState({
            ...this.state,
            firstname: event.target.value
        });
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
        return <div className='registration container'>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input type="text" value={this.state.firstname} onChange={this.firstnameChange.bind(this)} className="form-control" id="exampleInputName1" placeholder="Enter name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={this.state.email} onChange={this.emailChange.bind(this)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)} className="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
                </div>
                <button type="submit" className="btn btn-secondary" onClick={this.create.bind(this)}>Sing Up</button>
        </div>
    }
}

export default Registration;
