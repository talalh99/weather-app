import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "a1ca3358372d7aaf95d95f79f69ca751";

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter city name");
      return;
    }
    setError("");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    setWeather(await response.json());
    setError("City not found");
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
  );
};

export default Weather;
