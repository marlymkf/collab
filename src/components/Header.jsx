import React, { useState } from "react";
import Button from "./Button";
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenu = (e) => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header className={`cabecalho flex justify-between align-center ${isMenuOpen ? 'active' : ''}`}>
            <img
                src="img/Collab.png"
                alt="collab"
                width="71"
                height="15"
                className="collab"
            />
            <ul className="lista flex align-center">
                <li>
                    <a href="Products">Products</a>
                </li>
                <li>
                    <a href="Use Cases">Use Cases</a>
                </li>
                <li>
                    <a href="Developers">Developers</a>
                </li>
                <li>
                    <a href="Pricing">Pricing</a>
                </li>
                <li>
                    <a className="log" href="Sign in">
                        Sign in
                    </a>
                </li>
                <li>
                   <Button>tredemo</Button>
                </li>
            </ul>
            <button id="btn-mobile" onClick={handleMenu}>Menu
                <span id="hamburger"></span>
            </button>
        </header>
    );
};

export default Header;
