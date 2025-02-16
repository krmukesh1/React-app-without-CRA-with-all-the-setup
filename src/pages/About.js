import React from 'react';
import { toggleVisibility } from '../../services/contentValidationSlice';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import APICall from './APIcall';

const About = () => {
	const dispatch = useDispatch();
	const isVisible = useSelector((state) => state.isVisible.isVisible);
	const handleToggle = React.useCallback(() => {
		dispatch(toggleVisibility());
	}, []);
	return (
		<div>
			{isVisible && <h1>Hello</h1>}
			<button onClick={handleToggle}>Toggle Button</button>
			<APICall />
			<Counter />
		</div>
	);
};

export default About;
