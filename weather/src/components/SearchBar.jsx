import { useState } from 'react';
import axios from 'axios';

const GEO_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      try {
        const res = await axios.get(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&limit=5&apiKey=${GEO_API_KEY}`
        );
        setSuggestions(res.data.features || []);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (place) => {
    const city = place.properties.city || place.properties.name;
    const country = place.properties.country;
    const label = city && country ? `${city}, ${country}` : place.properties.formatted;

    setQuery(label);
    setSuggestions([]);
    onSearch(`${place.properties.lat},${place.properties.lon}`);
    setQuery('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="position-relative">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="form-control"
          placeholder="Search city or country"
          autoComplete="off"
        />
      </form>
      {suggestions.length > 0 && (
        <ul className="list-group position-absolute w-100 z-3 bg-white shadow-sm">
          {suggestions.map((item) => {
            const city = item.properties.city || item.properties.name;
            const country = item.properties.country;
            const label = city && country ? `${city}, ${country}` : item.properties.formatted;

            return (
              <li
                key={item.place_id}
                className="list-group-item list-group-item-action"
                onClick={() => handleSelect(item)}
                style={{ cursor: 'pointer' }}
              >
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
