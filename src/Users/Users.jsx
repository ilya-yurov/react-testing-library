import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Users.module.scss'

const Users = () => {
	const [users, setUsers] = useState([]);
	const loadUsers = async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		setUsers(response.data);
	}
	useEffect(() => {
		loadUsers()
	}, [])

	return (
		<div data-testid='users-page' className={s.users}>
			{users.map(user => <Link
				to={`/users/${user.id}`}
				key={user.id}
				data-testid='user-item'>
					{user.name}
				</Link>)
			}
		</div>
	);
};

export default Users;