import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [data, setData] = useState(null);
	const [toogle, setToogle] = useState(false);
	const [value, setValue] = useState('');

	const onClick = () => setToogle(prev => !prev)

	useEffect(() => {
		setTimeout(() => {
			setData({})
		},100)
	}, [])
	return (
		<div className="App">
			<h1 data-testid="value-elem">{value}</h1>
			{toogle === true && <div data-testid="toogle-elem">TOOGLE</div>}
			{data && <div style={{color: 'red'}}>data</div>}
			<h1>Hello world!</h1>
			<button data-testid="button-elem" onClick={onClick}>click me</button>
			<input onChange={e => setValue(e.target.value)} type="text" placeholder="input value....." />
		</div>
	);
}

export default App;
