import * as actionType from '../actions/actionTypes';

const reducer = (state = {}, action) => {
  switch(action.type) {
    case actionType.CURRENT_WEATHER:
      return {
        ...state,
        current: action.payload
      }
    case actionType.CURRENT_DETAIL:
      return {
        ...state,
        detail: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
