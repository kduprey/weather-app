import { BsWind } from "react-icons/bs";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Weather = ({ data, loading, error }) => {
	return (
		<div className="card">
			<div className="card-header flex justify-between items-center">
				<div>
					<h2 className="">
						{!loading && data !== null
							? `${data.location.name},`
							: "Loading..."}
					</h2>
					<h3 className="text-gray-700">
						{!loading && data !== null
							? data.location.country
							: "Loading..."}
					</h3>
				</div>
				<p>
					Last Updated:{" "}
					{!loading && data !== null ? (
						<span>
							{new Date(
								data.current.last_updated_epoch * 1000
							).toLocaleTimeString()}
						</span>
					) : (
						"Loading..."
					)}
				</p>
			</div>
			<hr></hr>
			<h3 className="text-center">Current Conditions</h3>
			<div className="flex flex-wrap items-center justify-center">
				<p>
					<FaTemperatureHigh className="text-2xl mx-2" />
					<span>
						{!loading && data !== null
							? `${data.current.temp_c}°C`
							: "Loading..."}
					</span>
				</p>
				<p>
					<TiWeatherPartlySunny className="text-2xl mx-2" />
					<span>
						{!loading && data !== null
							? data.current.condition.text
							: "Loading..."}
					</span>
				</p>
				<p>
					<BsWind className="text-2xl mx-2" />
					<span>
						{!loading && data !== null
							? ` ${data.current.wind_kph} kph`
							: "Loading..."}
					</span>
				</p>
				<p>
					<WiBarometer className="text-4xl" />
					<span>
						{!loading && data !== null
							? ` ${data.current.pressure_mb} mb`
							: "Loading..."}
					</span>
				</p>
				<p>
					<WiHumidity className="text-4xl" />
					<span>
						{!loading && data !== null
							? ` ${data.current.humidity}%`
							: "Loading..."}
					</span>
				</p>
			</div>
			<div>
				<h3 className="text-center">Sunrise & Sunset</h3>
				<div className="flex justify-center">
					<p>
						<GiSunrise className="text-4xl" />
						<span>
							{!loading && data !== null
								? ` ${data.forecast.forecastday[0].astro.sunrise}`
								: "Loading..."}
						</span>
					</p>
					<p>
						<GiSunset className="text-4xl" />
						<span>
							{!loading && data !== null
								? ` ${data.forecast.forecastday[0].astro.sunset}`
								: "Loading..."}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Weather;
