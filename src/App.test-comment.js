import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
		fireEvent.click(button);
		expect(screen.queryByTestId('toogle-elem')).toBeNull();
	});
	test('Input testing', () => {
		render(<App />);
		const input = screen.getByPlaceholderText(/input value/i);
		expect(screen.getByTestId('value-elem')).toContainHTML('');
		//! Artificial event (Missing events, like "Mouse down/up, Key down etc.")
		/* fireEvent.input(input, {
			target: {value: 'Samlple text'}
		}) */
		//! An event close to the user. Keystrokes are processed, etc.
		userEvent.type(input, '123123')
		expect(screen.getByTestId('value-elem')).toContainHTML('123123');
	});
})

