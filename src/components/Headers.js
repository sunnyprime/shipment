import React from 'react'
import logo from "../resource/logo.svg"
import Profile from "../resource/profile.svg"

export default function Headers(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src={logo} />{props.company}</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item item nav-link">Home</li>
            <li className="nav-item item nav-link">Brand</li>
            <li className="nav-item item nav-link">Transported</li>
            <li className="nav-item item nav-link"><img src={Profile} /></li>
            </ul>
            </div>
            </nav>
        </div>
    )
}
