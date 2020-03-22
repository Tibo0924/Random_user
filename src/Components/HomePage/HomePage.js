import React, { useState, useEffect } from "react";
import { userContext } from "../LandingPage/Hooks";
import { UserGenerator } from "../LandingPage/LandingPage";

const HomePage = () => {
	console.log(userContext);
	return <div>{UserGenerator("large", 3, "__homepage")}</div>;
};

export default HomePage;
