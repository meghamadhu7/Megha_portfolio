import React, { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <h1 className="logo">AnimeZone</h1>
            <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home" onClick={toggleMenu}>Home</a>
                <a href="#about" onClick={toggleMenu}>About</a>
                <a href="#skills" onClick={toggleMenu}>Skills</a>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </header>
    );
};

export default Navbar;
