import React from "react"
import logo from "../img/tf.svg"

export default function Header() {
    return(
        <nav className="nav">
            <div className="nav--logo-section">
                <img src={logo} alt="" />
                <h1 className="nav--logo-title">Meme Generator</h1>
            </div>
            <h3>
            React Course - Project 3
            </h3>
        </nav>
    )
}