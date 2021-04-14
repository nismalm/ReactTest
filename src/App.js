import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './container/Home/Home';
import Login from './container/Login/Login';
import Dashboard from './container/Dashboard/Dashboard';
import NotFound from './container/NotFound/NotFound';
import firebase from "firebase/app";
import 'firebase/auth';
import fireConfig from './config/firebase';
import swal from 'sweetalert';
import { Spinner } from 'react-rainbow-components';

firebase.initializeApp(fireConfig);

// const containerStyles = {
//     borderRadius: '0.875rem',
// };
class App extends Component {

	state = {
		isLoggedIn: false,
		isLoading: true
	}

	componentDidMount = () => {
		this.setState({ isLoading: true }, () => {
			let cachedData = sessionStorage.getItem('auth_data');
			if (!!cachedData) {
				let authData = JSON.parse(cachedData);
				firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
					.then(() => {
						this.setState({ isLoggedIn: true, isLoading: false });
					}).catch(function (error) {
						swal("Error", error.message, "error").then(() => {
							window.location.reload();
						});
					});
			} else {
				this.setState({ isLoading: false });
			}
		});
	}

	authChange = (data) => {
		this.setState({ isLoggedIn: true }, () => {
			sessionStorage.setItem('auth_data', JSON.stringify(data));
		});
		// window.location.pathname = '/dashboard';
	}

	render() {

		// let routes;
		// if (this.state.isLoggedIn) {
		// 	routes = 	<Switch>
		// 					<Route path="/dashboard" exact component={Dashboard} />
		// 					<Route path="*" component={NotFound} />
		// 				</Switch>
		// } else {
		// 	routes =	<Switch>
		// 					<Route path="/" exact component={Home} />
		// 					<Route path="/login" exact
		// 						render={(props) => <Login
		// 							{...props}
		// 							test="hello"
		// 							logHandler={this.authChange} />} />
		// 					<Route path="*" component={NotFound} />
		// 				</Switch>
			
		// }

		let routes;
		if (this.state.isLoggedIn) {
			routes = 	<Switch>
							<Route path="/" exact component={Dashboard} />
							<Route path="*" component={NotFound} />
						</Switch>
		} else {
			routes =	<Switch>
							<Route path="/" exact
								render={(props) => <Login
									{...props}
									test="hello"
									logHandler={this.authChange} />} />
							<Route path="*" component={NotFound} />
						</Switch>
			
		}


		return (
			<div className="home">
				{
					this.state.isLoading ?
						<Spinner size="large" /> :
					routes
				}
			</div>
		);
	}
}

export default App;
