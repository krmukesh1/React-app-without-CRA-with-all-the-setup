import React from 'react';

const Documentation = () => {
	const topics = [
		{
			title: 'Create React App without CRA',
			description:
				'Setting up a React application without using Create React App.',
		},
		{
			title: 'React',
			description: 'A JavaScript library for building user interfaces.',
		},
		{
			title: 'React DOM',
			description: 'The entry point of the DOM-related rendering paths.',
		},
		{ title: '@babel/core', description: 'Babel compiler core.' },
		{
			title: '@babel/preset-env',
			description: 'A Babel preset for compiling ES2015+ syntax.',
		},
		{ title: '@babel/preset-react', description: 'A Babel preset for React.' },
		{ title: 'React Router', description: 'Declarative routing for React.' },
		{
			title: 'Material UI',
			description: 'React components for faster and easier web development.',
		},
		{
			title: 'Testing Library',
			description:
				'Simple and complete testing utilities that encourage good testing practices.',
		},
		{
			title: 'ESLint',
			description:
				'A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.',
		},
		{ title: 'Prettier', description: 'An opinionated code formatter.' },
		{
			title: 'Emotion',
			description: 'A library designed for writing CSS styles with JavaScript.',
		},
		{
			title: 'Styled Components',
			description: 'Visual primitives for the component age.',
		},
		{
			title: 'PropTypes',
			description: 'Runtime type checking for React props and similar objects.',
		},
		{
			title: 'Core Web Vitals',
			description: 'Metrics that capture the user experience of a web page.',
		},
		{ title: 'Husky', description: 'Git hooks made easy.' },
		{ title: 'Lint-staged', description: 'Run linters on git staged files.' },
		{
			title: 'Pre-commit',
			description:
				'A framework for managing and maintaining multi-language pre-commit hooks.',
		},
	];

	const styles = {
		container: {
			padding: '20px',
			fontFamily: 'Arial, sans-serif',
		},
		topic: {
			display: 'flex',
		},
		title: {
			fontSize: '16px',
			fontWeight: 'bold',
		},
		description: {
			fontSize: '16px',
		},
	};

	return (
		<div style={styles.container}>
			{topics.map((topic, index) => (
				<div key={index} style={styles.topic}>
					<div style={styles.title}>{topic.title} : </div>
					<div style={styles.description}>{topic.description}</div>
				</div>
			))}
		</div>
	);
};

export default Documentation;
