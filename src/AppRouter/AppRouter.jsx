import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../Pages/AboutPage';
import ErrorPage from '../Pages/ErrorPage';
import MainPage from '../Pages/MainPage';
import UsersDeatailsPage from '../Pages/UsersDeatailsPage';
import Users from '../Users/Users';

const AppRouter = (props) => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/users' element={<Users />} />
				<Route path='/users/:id' element={<UsersDeatailsPage />} />
				<Route path='/*' element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default AppRouter;