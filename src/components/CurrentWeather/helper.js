import { API_KEY } from '../../keys';
import axios from 'axios';

export const fetchCurrentWeather = (props) => {
  if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((async (position) => {
        const {latitude:lat, longitude:long} = position.coords;
        const weatherData = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`);
        // destructure weather data
        const {
          dt, 
          name,
          main: {
            temp
          },
          weather: [
            {
              description
            }
          ]
        } = weatherData.data;

        // convert kelvin to Farenheit
        const tempNew = convertTemp(temp);
        const data = {name, temp: tempNew, description, dt}
        //call action
        props.currentWeather(data);
    }))
  }
}

// helper function for converting kelvin to farenheit
function convertTemp (temp) {
  return  ((9/5)*(temp-273) + 32).toFixed(0);
}