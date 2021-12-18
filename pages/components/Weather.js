import { BsWind } from "react-icons/bs";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Weather = ({ data, loading, error }) => {
	if (error) {
		return <div className="text-center">Error: {error.message}</div>;
	}

	if (!data || loading) {
		return <div className="text-center">Loading...</div>;
	}

	return (
		<div className="card">
			<div className="card-header flex justify-between items-center">
				<div>
					<h2 className="">{data.location.name}</h2>
					<h3 className="text-gray-700">{data.location.country} </h3>
				</div>
				<p>
					Last Updated:{" "}
					{new Date(
						data.current.last_updated_epoch * 1000
					).toLocaleTimeString()}
				</p>
			</div>
			<hr></hr>
			<h3 className="text-center">Current Conditions</h3>
			<div className="flex flex-wrap items-center justify-center">
				<p>
					<FaTemperatureHigh className="text-2xl mx-2" />
					<span>{data.current.temp_c}°C</span>
				</p>
				<p>
					<TiWeatherPartlySunny className="text-2xl mx-2" />
					<span>{data.current.condition.text}</span>
				</p>
				<p>
					<BsWind className="text-2xl mx-2" />
					<span>{data.current.wind_kph} kph</span>
				</p>
				<p>
					<WiBarometer className="text-4xl" />
					<span>{data.current.pressure_mb} mb</span>
				</p>
				<p>
					<WiHumidity className="text-4xl" />
					<span>{data.current.humidity}%</span>
				</p>
			</div>
			<div>
				<h3 className="text-center">Sunrise & Sunset</h3>
				<div className="flex justify-center">
					<p>
						<GiSunrise className="text-4xl" />
						<span>
							{data.forecast.forecastday[0].astro.sunrise}
						</span>
					</p>
					<p>
						<GiSunset className="text-4xl" />
						<span>{data.forecast.forecastday[0].astro.sunset}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Weather;
