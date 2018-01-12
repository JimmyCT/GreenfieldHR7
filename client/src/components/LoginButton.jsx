import React from 'react';
import $ from 'jquery';

class LoginButton extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$.ajax({
			url: `/api/current_user`,
			method: 'GET',
			contentType: 'application/json',
			success: (user) => {
				console.log('user info', user);
			},
			error: (err) => {
				console.error('ERROR', err);
			}
		})
	}

	render() {
		return (
			<a href="/auth/google">login</a>		
		)
	}
}

export default LoginButton;