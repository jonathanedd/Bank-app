import axios from 'axios';

import { usersActions } from '../slices/user.slice';

// const API_URL = '';

export const login = (accountNumber, password) => {
	return async dispatch => {
		try {
			// API REQUEST
			const res = await axios.post('http://localhost:4002/api/v3/users/login');
			console.log(res);
			dispatch(usersActions.login(accountNumber, password));
		} catch (error) {
			console.log(error);
		}
	};
};

export const signup = (name, password) => {
	return async dispatch => {
		try {
			const res = await axios.post('http://localhost:4002/api/v3/users/signup');

			console.log(res);
			
			dispatch(usersActions.signup(name, password))
		} catch (error) {
			console.log(error);
		}
	};
};

export const logout = () => {
	return async dispatch => {
		try {
			dispatch(usersActions.logout());
		} catch (error) {
			console.log(error);
		}
	};
};
