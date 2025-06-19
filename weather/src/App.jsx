import { useEffect, useState, useRef } from 'react';
import { fetchWeather } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ThemeToggle from './components/ThemeToggle';
import MapLocation from './components/MapLocation';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Colombo");
  const [coords, setCoords] = useState(null);
  const mapRef = useRef();

  const getWeather = async (loc) => {
    try {
      const res = await fetchWeather(loc);
      setWeather(res.data);
      setCoords({ lat: res.data.location.lat, lon: res.data.location.lon });
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.flyTo([res.data.location.lat, res.data.location.lon], 13);
        }
      }, 400);
    } catch (err) {
      alert("Failed to fetch weather.");
    }
  };

  const getCurrentLocationWeather = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      getWeather(`${latitude},${longitude}`);
    });
  };

  useEffect(() => {
    getWeather(location);
  }, []);

  return (
    <div className="main-wrapper py-4">
      <div className="container d-flex justify-content-between align-items-center mb-4">
        <h1 className="logo-text">Weather App</h1>
        <ThemeToggle />
      </div>

      <div className="container search-container">
        <SearchBar onSearch={getWeather} />
      </div>

      <div className="container weather-content">
        {weather && <WeatherCard data={weather} />}
        {coords && <MapLocation lat={coords.lat} lon={coords.lon} mapRef={mapRef} />}
      </div>

      <button
        onClick={getCurrentLocationWeather}
        className="btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle geolocation-btn"
        title="Click to fetch weather of your current location"
      >📍</button>
    </div>
  );
}
export default App;