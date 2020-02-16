import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";

function App() {
	return (
		<div className='App'>
			<Header />
		</div>
	);
}

export default App;
