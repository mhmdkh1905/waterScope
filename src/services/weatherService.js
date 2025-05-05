import axios from 'axios';

const API_KEY = '423142437b1fdef3406d95c1cb246278'; //real key

export const fetchWeatherForCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const res = await axios.get(url);
  return {
    name: city,
    temperature: res.data.main.temp,
    humidity: res.data.main.humidity,
    rainfall: res.data.rain?.['1h'] || 0,
    windSpeed: res.data.wind?.speed || 0 
  };
};
