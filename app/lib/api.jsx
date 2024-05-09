import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_WEATHER_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getWeatherData = async (q) => {
  const response = await axios.get(`${baseURL}/forecast.json?key=${apiKey}&q=${q}&days=3&aqi=no&alerts=no`);
  return response.data;
};

export const getForecastData = async (q) => {
  const response = await axios.get(`${baseURL}/forecast.json?key=${apiKey}&q=${q}&days=7&aqi=no&alerts=no`);
  return response.data.forecast.forecastday;
};
