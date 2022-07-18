import { render, screen } from '@testing-library/react';
import Users from './Users';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';

jest.mock('axios');


describe('ASYNC COMP LOADING! Users component test', () => {
	let response;
	beforeAll(() => {
		response = {
			data: [
				{
					"id": 3,
					"name": "Clementine Bauch",
				},
				{
					"id": 4,
					"name": "Patricia Lebsack",
				},
				{
					"id": 5,
					"name": "Chelsey Dietrich",
				}
			]
		}
	})

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('Render Users component', async () => {
		//Jest attaches a response to the get method of axios
		axios.get.mockReturnValue(response);
		render(<MemoryRouter>
			<Users />
		</MemoryRouter>);
		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(3);
		expect(axios.get).toBeCalledTimes(1);
	})

	test('Redirect to details page testing', async () => {
		//Jest attaches a response to the get method of axios
		axios.get.mockReturnValue(response);
		render(renderWithRouter(null, '/users'));
		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(3);
		userEvent.click(users[0]);
		expect(screen.getByTestId('user-details-page')).toBeInTheDocument();
	})
})