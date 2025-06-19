export default function WeatherCard({ data }) {
  const { current, location } = data;
  return (
    <div className="text-center mb-4">
      <h2>{location.name}, {location.country}</h2>
      <p><small>Last updated: {current.last_updated}</small></p>
      <h1>{current.temp_c}°C</h1>
      <p>Feels like {current.feelslike_c}°C</p>
      <p><i>{current.condition.text}</i> 🌤️</p>

      <div className="weather-boxes">
        <div className="weather-box">Humidity: {current.humidity}%</div>
        <div className="weather-box">Wind: {current.wind_kph} km/h</div>
        <div className="weather-box">UV Index: {current.uv}</div>
        <div className="weather-box">Wind Dir: {current.wind_dir}</div>
        <div className="weather-box">Pressure: {current.pressure_mb} hPa</div>
        <div className="weather-box">Cloud Cover: {current.cloud}%</div>
        <div className="weather-box">Latitude: {location.lat}°</div>
        <div className="weather-box">Longitude: {location.lon}°</div>
      </div>
    </div>
  );
}
