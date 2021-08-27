import React from 'react';
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem("user"))
        }
        this.onApplyTheme();
    }

    onDark() {
        localStorage.setItem('theme', 'dark');
        this.onApplyTheme();
    }

    onLight() {
        localStorage.setItem('theme', 'light');
        this.onApplyTheme();
    }

    onApplyTheme() {
        document.body.className = localStorage.getItem('theme') === 'dark' ? `theme-dark` : `theme-light`
    }

    logOut() {
        localStorage.removeItem("user")
        window.open('/sing-in', '_self')
    }

    render() {
        return <div className="collection-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href={"/"}>My collection</a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-brand">
                        <p className="navbar-name">{this.state.user.firstname} <a className="bi bi-person-circle"> </a></p>
                    </div>
                    <ul className="user-nav">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                    data-bs-toggle="dropdown" aria-expanded="false"><a className="bi bi-moon"></a>
                                Theme
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button" onClick={this.onDark.bind(this)}>Dark</button></li>
                                <li><button className="dropdown-item" type="button" onClick={this.onLight.bind(this)}>Light</button></li>
                            </ul>
                        </div>
                        {!this.state.user && <div className="auth-actions">
                            <li className="nav-item">
                                <a className="nav-link" href={"/sing-in"}>Log In</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href={"/sing-up"}>Sing Up</a>
                            </li>
                        </div>}
                        {this.state.user && <div>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.logOut.bind(this)}>Log Out</a>
                            </li>
                        </div>}
                    </ul>
                </div>
            </nav>
        </div>
    }
}

export default Header;
