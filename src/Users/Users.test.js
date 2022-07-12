import { render, screen, fireEvent } from '@testing-library/react';
import Users from './Users';
import axios from 'axios';

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

	test('Render Users component', async () => {
		//Jest attaches a response to the get method of axios
		axios.get.mockReturnValue(response);
		render(<Users/>);
		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(3);
		expect(axios.get).toBeCalledTimes(1);
	})
})