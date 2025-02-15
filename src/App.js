import React from 'react';
import APIcall from './pages/APIcall';
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisibility } from '../services/contentValidationSlice';
const App = () => {
	const dispatch = useDispatch();
	const isVisible = useSelector((state) => state.isVisible.isVisible);
	return (
		<div>
			{isVisible && <h1>Hello</h1>}
			<button
				onClick={() => {
					dispatch(toggleVisibility());
				}}
			>
				Toogle Button
			</button>
			<APIcall />
			<Counter />
		</div>
	);
};

export default App;
