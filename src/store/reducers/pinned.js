import * as actionType from '../actions/actionTypes';

const reducer = (state = [], action) => {
  switch(action.type) {
    case actionType.ADD_PIN:
      return [
        ...state,
        action.payload
      ]
    case actionType.REMOVE_PIN:
      const newState = state.filter(item => item.name !== action.payload);
      return [
        ...newState
      ]
    default:
      return state;
  }
}

export default reducer;