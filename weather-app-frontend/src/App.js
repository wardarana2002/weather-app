import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
        setWeather(response.data);
    };

    return (
        <div>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && <div>
                <p>Temperature: {weather.temp_c}°C</p>
                <p>Condition: {weather.condition.text}</p>
                <img src={weather.condition.icon} alt="weather icon" />
            </div>}
        </div>
    );
}

export default App;
