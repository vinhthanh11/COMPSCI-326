import { useRef, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

import Logo from './images/UniCash.svg';
import ProfileIcon from './images/sample_profile.png'; // make sure you have this icon
import Investing from '../pages/Investing.js';
import History from '../pages/History.js';
import Explore from '../pages/Explore.js';
import Profile from '../pages/Profile.js';

function Navbar() {
    const navRef = useRef();
    const [showSettings, setShowSettings] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    const toggleUserSettings = () => {
        setShowSettings(!showSettings);
    };

    return (
        <header>
            <a href="/">
                <img src={Logo} alt="UniCash" className="logo" />
            </a>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/investing">Investing</Link>
                <Link to="/history">History</Link>
                <Link to="/explore">Explore</Link>
                <div className="profile-icon-container" onMouseEnter={toggleUserSettings} onMouseLeave={toggleUserSettings}>
                    <img src={ProfileIcon} alt="Profile" className="profile-icon" />
                    {showSettings && (
                        <div className="user-settings-dropdown">
                            <Link to="/profile">Profile</Link>
                            <Link to="/settings">Settings</Link>
                        </div>
                    )}
                </div>
                <button className="nav-icon nav-close-icon" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-icon" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
