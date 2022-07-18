import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Counter = (props) => {
	const dispatch = useDispatch();
	const value = useSelector();

	const onIncrement = () => {
		
	}

	const onDecrement = () => {
		
	}


	return (
		<div>
			<h1>value = {value}</h1>
			<button onClick={onIncrement}>increment</button>
			<button onClick={onDecrement}>decrement</button>
		</div>
	);
};

export default Counter;