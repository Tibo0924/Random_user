import React, { useState, useEffect } from "react";
import { userContext } from "../LandingPage/Hooks";
import { Background } from "../LandingPage/LandingPage";

const HomePage = () => {
	console.log(userContext);
	return <div>{Background("large", 3, "__homepage")}</div>;
};

export default HomePage;
