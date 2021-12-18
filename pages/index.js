import { useState, useEffect } from "react";

import Head from "next/head";
import axios from "axios";
import Weather from "./components/Weather";

export default function Home() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const getWeatherData = async (location, days) => {
		const response = await axios.get(
			"https://api.weatherapi.com/v1/forecast.json",
			{
				params: {
					key: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
					q: location,
					days: days,
				},
			}
		);
		return response.data;
	};

	useEffect(() => {
		setLoading(true);

		try {
			getWeatherData("London", 5).then((data) => {
				setData(data);
				setLoading(false);
			});
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	}, [loading]);

	console.log(data);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Weather App</title>
				<meta name="description" content="Weather App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col justify-center items-center w-full flex-1 px-20">
				<h1 className="text-center">Weather App</h1>

				<Weather data={data} loading={loading} error={error} />
			</main>

			<footer className="flex items-center justify-center w-full h-24 border-t"></footer>
		</div>
	);
}
