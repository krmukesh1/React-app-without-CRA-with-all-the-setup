import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	const navStyle = {
		display: 'flex',
		justifyContent: 'space-around',
		backgroundColor: '#333',
		padding: '1rem',
	};

	const linkStyle = {
		color: 'white',
		textDecoration: 'none',
		padding: '0.5rem 1rem',
		transition: 'background-color 0.3s',
	};

	return (
		<div>
			<nav style={navStyle}>
				<Link to="/" style={linkStyle} className="nav-link">
					Home
				</Link>
				<Link to="/about" style={linkStyle} className="nav-link">
					About
				</Link>
				<Link to="/contact" style={linkStyle} className="nav-link">
					Contact
				</Link>
				<Link to="/git-commit-standards" style={linkStyle} className="nav-link">
					Git Commit Standards
				</Link>
			</nav>
		</div>
	);
};

export default Header;
