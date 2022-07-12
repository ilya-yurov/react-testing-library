import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Users = (props) => {
	const [users, setUsers] = useState([]);
	const loadUsers = async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		setUsers(response.data);
	}
	useEffect(() => {
		loadUsers()
	}, [])

	return (
		<div>
			{users.map(user => <div key={user.id} data-testid='user-item'>{user.name}</div>)}
		</div>
	);
};

export default Users;