import React from 'react';
import './Header.scss';

class Header extends React.Component {
    render() {
     return <div className="collection-header">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <a className="navbar-brand" href={"/"}>My collection</a>
             <form className="d-flex">
                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                     <button className="btn btn-outline-success" type="submit">Search</button>
             </form>
             <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="user-nav">
                     <li className="nav-item">
                         <a className="nav-link" href={"/#/sing-in"}>Log In</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href={"/#/sing-up"}>Sing Up</a>
                     </li>
                 </ul>
             </div>
         </nav>
     </div>
    }
}

export default Header;
