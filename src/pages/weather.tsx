import React, { useEffect, useState } from "react";
import weatherAPI from "./api/weatherAPI";

const Weather = () => {
  const [city, setCity] = useState("");
  const [view, setView] = useState(false);
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState({
    temp: "",
    condition: "",
    humidity: "",
    forecast: [],
  });
  const fetchData = async (city: string) => {
    try {
      setError(false);
      const response = await weatherAPI.get("/forecast.json", {
        params: {
          key: "02aa75182c38409bb9975044232303",
          q: city,
        },
      });
      setWeatherData({
        temp: `${response.data.current.temp_c}°C`,
        condition: response.data.current.condition.text,
        humidity: response.data.current.humidity,
        forecast: response.data.forecast.forecastday[0].hour,
      });
      setView(true);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="w-full min-h-screen h-full bg-black font-Orbitron text-white flex flex-col justify-start items-center p-4 pt-[90px]">
      <div className="w-full flex flex-col justify-center items-center h-full gap-5">
        <h1 className="text-5xl text-center">Weather App</h1>
        <div className="flex gap-5">
          <input
            placeholder="Enter a city"
            className="rounded-lg bg-gray-200 p-4 w-full md:w-[50vw] text-black"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="p-4 bg-purple-500 rounded-lg hover:bg-purple-500/50 duration-500"
            onClick={() => fetchData(city)}
          >
            Search
          </button>
        </div>
        <div>
          {error ? (
            <h1 className="text-red-600 text-base">Something went wrong</h1>
          ) : null}
        </div>
        {view ? (
          <div className="w-full min-h-screen h-full flex flex-col gap-5 items-center">
            <h1 className="font-bold text-4xl">Current Report</h1>
            <div className="w-full h-fit flex flex-col md:flex md:flex-row justify-center items-start gap-5">
              <h1 className="p-4 bg-purple-500 rounded-lg w-full">
                <span className="font-bold">Temperature:</span> <br />
                {weatherData.temp}
              </h1>
              <h1 className="p-4 bg-purple-500 rounded-lg w-full">
                <span className="font-bold">Condition:</span> <br />{" "}
                {weatherData.condition}
              </h1>
              <h1 className="p-4 bg-purple-500 rounded-lg w-full">
                <span className="font-bold">Humidity:</span> <br />{" "}
                {weatherData.humidity}
              </h1>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center pt-8">
              <h1 className="font-bold text-4xl">Hourly Report</h1>
              <div className="flex flex-wrap gap-5 w-full h-fit justify-center items-center pt-8">
                {weatherData.forecast.map((hour: any, key) => {
                  return (
                    <div
                      key={key}
                      className="p-4 rounded-lg bg-purple-500 w-full md:w-64 h-60 flex flex-col gap-3"
                    >
                      <h1 className="font-bold text-xl">
                        {hour["time"].slice(10)}
                      </h1>
                      <h1>
                        <span className="font-bold">Temperature:</span> <br />{" "}
                        {hour["temp_c"]}°C
                      </h1>
                      <h1>
                        <span className="font-bold">Condition:</span> <br />{" "}
                        {hour["condition"]["text"]}
                      </h1>
                      <h1>
                        <span className="font-bold">Humidity:</span> <br />{" "}
                        {hour["humidity"]}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-4xl text-gray-600">Search for a city</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
