import React from 'react';
import DocumentationLink from '../components/DocumentationLink';
import Documentation from '../components/DocumentationContent';

const Home = () => {
	const styles = {
		container: {
			padding: '20px',
			fontFamily: 'Arial, sans-serif',
		},
		heading: {
			color: '#333',
			fontSize: '20px',
			fontWeight: 'bold',
		},
		paragraph: {
			fontSize: '16px',
			lingHeight: '1.5',
		},
		list: {
			listStyleType: 'disc',
			padding: '20px',
		},
		listItem: {
			marginBottom: '10px',
		},
	};

	return (
		<div style={styles.container}>
			<h1 style={styles.heading}>Installed Software without using CRA</h1>
			<DocumentationLink
				url={
					'https://dev.to/ivadyhabimana/how-to-create-a-react-app-without-using-create-react-app-a-step-by-step-guide-30nl'
				}
				text={'React app without using create-react-app'}
			/>
			<DocumentationLink
				url={
					'https://medium.com/@fatihsevencan/git-commit-standards-d76f2f5f5c7f'
				}
				text={'Git — Commit Standards'}
			/>
			<p style={styles.paragraph}>
				Resources for installing all the Softwares:
			</p>
			<ul style={styles.list}>
				<DocumentationLink
					url="https://nodejs.org/en/download/"
					text="NodeJS"
				/>
				<DocumentationLink
					url="https://reactjs.org/docs/getting-started.html"
					text="React Documentation"
				/>
				<DocumentationLink
					url="https://babeljs.io/docs/en/"
					text="Babel Documentation"
				/>
				<DocumentationLink
					url="https://reactrouter.com/web/guides/quick-start"
					text="React Router Documentation"
				/>
				<DocumentationLink
					url="https://mui.com/getting-started/installation/"
					text="Material UI Documentation"
				/>
				<DocumentationLink
					url="https://testing-library.com/docs/react-testing-library/intro/"
					text="React Testing Library Documentation"
				/>
				<DocumentationLink
					url="https://eslint.org/docs/user-guide/getting-started"
					text="ESLint Documentation"
				/>
				<DocumentationLink
					url="https://emotion.sh/docs/introduction"
					text="Emotion Documentation"
				/>
				<DocumentationLink
					url="https://redux-toolkit.js.org/introduction/getting-started"
					text="Redux Toolkit Documentation"
				/>
				<DocumentationLink
					url="https://create-react-app.dev/docs/measuring-performance/"
					text="Core Web Vitals Documentation"
				/>
				<DocumentationLink
					url="https://typicode.github.io/husky/#/"
					text="Husky Documentation"
				/>
			</ul>
			<Documentation />
		</div>
	);
};

export default Home;
