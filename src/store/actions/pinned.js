import * as actionType from './actionTypes';
import { API_KEY } from '../../keys';
import axios from 'axios';


export const removePin = (city) => {
  return {
    type: actionType.REMOVE_PIN,
    payload: city
  }
}

export const addPin = (zip) => {
  return async (dispatch) => {
    //CURRENT WEATHER DATA
    const weatherData = await axios(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${API_KEY}`);
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
      const current = {dt, name, temp, description};

      //DETAIL WEATHER DATA
      const {data: { list }} = await axios(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&APPID=${API_KEY}`);
      const detail = list.filter( (item, idx) => idx < 8 )
      .map(item => {
        const {
          dt,
          dt_txt,
          weather: [
            {
              description
            },
          ],
          main: {
            temp,
            temp_max,
            temp_min
          }
        } = item

        return {dt, dt_txt, description, temp, temp_max, temp_min};
      })

      const data = {
        name,
        current,
        detail,
        zip
      }

      //add the data to the redux store
      dispatch({type: actionType.ADD_PIN, payload: data});
      
  }
}