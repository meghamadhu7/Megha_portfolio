import React from 'react';


function Header() {
    return (
        <header className="header">
            <div className="logo">KR</div>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <div className="socials">
                    <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
                    <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
                    <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
