import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const DocumentationLink = ({ url, text }) => {
	return (
		<Link
			to={url}
			target="_blank"
			rel="noopener noreferrer"
			style={{
				backgroundColor: '#005a9C',
				color: 'white',
				padding: '5px',
				margin: '5px',
				borderRadius: '5px',
				display: 'inline-block',
				marginBottom: '10px',
			}}
		>
			{text}
		</Link>
	);
};
DocumentationLink.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default DocumentationLink;
