import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Integration tests', () => {
	test('Routing. Switching from one page to another.', () => {
		render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
		);
		const mainLink = screen.getByTestId('main-link');
		const aboutLink = screen.getByTestId('about-link');
		const usersLink = screen.getByTestId('users-link');
		userEvent.click(aboutLink);
		expect(screen.getByTestId('about-page')).toBeInTheDocument();
		userEvent.click(mainLink);
		expect(screen.getByTestId('main-page')).toBeInTheDocument();
		userEvent.click(usersLink);
		expect(screen.getByTestId('users-page')).toBeInTheDocument();
	});
	test('Error page render when link is wrong.', () => {
		render(
		<MemoryRouter initialEntries={['/somewronglink']}>
			<App />
		</MemoryRouter>
		);
		expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
	});
})

