import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

import Logo from "./images/UniCash.svg"
import Investing from "../pages/Investing.js";
import History from "../pages/History.js";
import Explore from "../pages/Explore.js";
import Profile from "../pages/Profile.js";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
			<header>
				<a href="/">
					<img src={Logo} alt="UniCash" className="logo" path=""/>
					</a>
				<nav ref={navRef}>
					<Link to="/">Home</Link>
					<Link to="/investing">Investing</Link>
					<Link to="/history">History</Link>
					<Link to="/explore">Explore</Link>
					<Link to="/profile">Profile</Link>

					<button
						className="nav-icon nav-close-icon"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<Routes>
					<Route path="/investing" element={<Investing />} />
					<Route path="/history" element={<History />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
				<button
					className="nav-icon"
					onClick={showNavbar}>
					<FaBars />
				</button>
			</header>
	);
}

export default Navbar;