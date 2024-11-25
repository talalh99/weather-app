import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = //API key goes here...

  const fetchWeather = async () => {
    if (!city) {
        setError("Please enter city name");
        return;
    } 
    setError("");
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
    } catch (error) {
        setError("City not found");
    }
  };

  return (
    <div>
        <input 
          type="text" 
          placeholder="Enter city name" 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
    </div>
  )
};

export default Weather;
