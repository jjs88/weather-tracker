import * as actionType from './actionTypes';

export const currentWeather = (data) => {
  return {
    type: actionType.CURRENT_WEATHER,
    payload: data
  }
}

export const currentDetail = (data) => {
  return {
    type: actionType.CURRENT_DETAIL,
    payload: data
  }
}