import { useState, useEffect, createContext } from "react";
const userContext = createContext();
function useFetch(url) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	async function fetchUrl() {
		const response = await fetch(url);
		const json = await response.json();
		setData(json.results);
		setLoading(false);
	}
	useEffect(() => {
		fetchUrl();
	}, []);
	return [data, loading];
}
export { useFetch, userContext };
