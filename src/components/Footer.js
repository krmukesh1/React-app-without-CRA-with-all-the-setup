import React from 'react';

const Footer = () => {
	const footerStyle = {
		backgroundColor: '#f1f1f1',
		padding: '20px',
		textAlign: 'left',
		display: 'flex',
		justifyContent: 'space-between',
	};

	const sectionStyle = {
		margin: '10px 0',
		width: '100%',
		maxWidth: '400px',
	};

	const headingStyle = {
		fontSize: '18px',
		marginBottom: '10px',
	};

	const paragraphStyle = {
		margin: '5px 0',
	};

	return (
		<div style={footerStyle}>
			<div style={sectionStyle}>
				<h4 style={headingStyle}>About</h4>
				<p style={paragraphStyle}>Information about the company.</p>
			</div>
			<div style={sectionStyle}>
				<h4 style={headingStyle}>Contact</h4>
				<p style={paragraphStyle}>Email: contact@example.com</p>
				<p style={paragraphStyle}>Phone: (123) 456-7890</p>
			</div>
			<div style={sectionStyle}>
				<h4 style={headingStyle}>Services</h4>
				<p style={paragraphStyle}>Details about services offered.</p>
			</div>
			<div style={sectionStyle}>
				<h4 style={headingStyle}>Location</h4>
				<p style={paragraphStyle}>123 Main Street, City, Country</p>
			</div>
		</div>
	);
};

export default Footer;
