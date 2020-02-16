import React, { useReducer } from "react";
import { useFetch } from "./Hooks";
import Auth from "../HomePage/Auth";

const LandingPage = props => {
	return (
		<div className='home__wrapper'>
			<div className='home__background'>
				{Background()}
				<img src='' alt='' />
			</div>
			<div className='home__loginDetails'>{NameForm(props)}</div>
		</div>
	);
};

function NameForm(props) {
	function reducer(state, { field, value }) {
		return {
			...state,
			[field]: value
		};
	}
	const initialState = {
		name: "",
		password: ""
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const onChange = e => {
		dispatch({ field: e.target.name, value: e.target.value });
	};

	const { name, password } = state;
	return (
		<form method='post' action=''>
			<h3 id='logo'>Random User</h3>
			<label htmlFor='username'>Username</label>
			<input
				type='text'
				name='name'
				id='username'
				placeholder='Type in your username..'
				autoComplete='off'
				required
				value={name}
				onChange={onChange}
			/>

			<label htmlFor='password'>Password</label>
			<input
				type='password'
				name='password'
				id='password'
				placeholder='Enter your password..'
				autoComplete='off'
				required
				value={password}
				onChange={onChange}
			/>
			<a className='forgot' href='#'>
				Forgot Password?
			</a>
			<a className='register' href='#'>
				Register
			</a>
			<input
				onClick={() => {
					Auth.login(() => {
						props.history.push("/app");
					});
				}}
				type='submit'
				name='submit'
				value='Log In'
			/>
		</form>
	);
}

function Background() {
	const [data, loading] = useFetch("https://randomuser.me/api/?results=20");
	return (
		<div>
			{loading ? (
				"loading..."
			) : (
				<div className='user_wrapper'>
					{data.map((user, i) => (
						<img
							className='user_image'
							src={user.picture.medium}
							key={user.id.value || i}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default LandingPage;
