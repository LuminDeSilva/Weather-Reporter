import axios from 'axios';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE = 'https://api.weatherapi.com/v1';

export const fetchWeather = (loc) =>
  axios.get(`${BASE}/current.json?key=${API_KEY}&q=${loc}&aqi=no`);
