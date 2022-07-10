import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('React render tests', () => {
	test('Is react renders App.js', () => {
		render(<App />);
		const helloWorldElem = screen.getByText(/hello world/i);
		const button = screen.getByRole('button');
		const input = screen.getByPlaceholderText(/input value/i);
		expect(helloWorldElem).toBeInTheDocument();
		expect(button).toBeInTheDocument();
		expect(input).toMatchSnapshot();
		screen.debug();
		});

	test('async. findBy testing. style', async () => {
		render(<App />);
		const findByTextElem = await screen.findByText(/data/i)
		expect(findByTextElem).toBeInTheDocument();
		expect(findByTextElem).toHaveStyle({color: 'red'});
	});

	test('Click event testing', () => {
		render(<App />);
		const button = screen.getByTestId('button-elem');
		expect(screen.queryByTestId('toogle-elem')).toBeNull();
		fireEvent.click(button);
		expect(screen.queryByTestId('toogle-elem')).toBeInTheDocument();
	});
	test('Input testing', () => {
		render(<App />);
		const input = screen.getByPlaceholderText(/input value/i);
		expect(screen.getByTestId('value-elem')).toContainHTML('');
		fireEvent.input(input, {
			target: {value: 'Samlple text'}
		})
		expect(screen.getByTestId('value-elem')).toContainHTML('Samlple text');
		screen.debug();
	});
})

