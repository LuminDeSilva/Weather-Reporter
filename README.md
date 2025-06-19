# 🌤️ Weather Reporter Web App

## 🚀 Features

✅ **Real-time Weather Data**  
✅ **Search with Autocomplete Suggestions** for any city and country  
✅ **Current Location Weather** with a single click  
✅ **Interactive Map View** where you can view your city  
✅ **Dark & Light Theme Toggle** for user preference  

---

## 🔧 Tech Stack

- **React** (Vite)
- **Axios** for API calls
- **Geoapify** for location autocomplete
- **WeatherAPI.com** for real-time weather data
- **Bootstrap (optional)** for form and button styling
- **Leaflet** & **React Leaflet** for map integration

---

## 🧠 How It Works

- When you type a city in the search bar, **Geoapify** suggests cities and countries.
- When selected, the **WeatherAPI** fetches and shows real-time data: temperature, humidity, wind speed, and UV index.
- Pressing the 📍 location button fetches your current location and weather.
- The UI switches between dark and light themes on toggle.

---

## 🛠️ Setup & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/LuminDeSilva/Weather-Reporter.git
cd Weather-Reporter/weather

# 2. Install dependencies
npm install

# 3. Create .env file with your API keys
VITE_WEATHER_API_KEY=your_weatherapi_key
VITE_GEOAPIFY_API_KEY=your_geoapify_key

# 4. Start the dev server
npm run dev
```

## 🌐 Live Demo

🖥️ [View Live Site](https://weather-reporter-app.vercel.app/)

---

## 🙋‍♀️ Acknowledgments

- [WeatherAPI](https://www.weatherapi.com/)
- [Geoapify](https://www.geoapify.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Vercel](https://vercel.com/) for hosting
