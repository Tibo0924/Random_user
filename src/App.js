import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import HomePage from "./Components/HomePage/HomePage.js";
import { ProtectedRoute } from "./Components/HomePage/ProtectedRoute";

import "./App.scss";
import { render } from "@testing-library/react";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<ProtectedRoute exact path='/app' component={() => <HomePage />} />
					<Route path='*' component={() => "404 NOT FOUND"} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
