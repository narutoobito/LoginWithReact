import { POST_LOGIN, GET_DETAILS, LOGIN_REJECTED } from './action';
import { combineReducers } from 'redux';

const initialState = {
  users: [],
  message: "",
}

function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        users: action.payload
      };
    case POST_LOGIN:
      return {
        ...state,
        token : action.payload.message,
        ok: action.payload.ok
      };
      case LOGIN_REJECTED:
      return {
        ...state,
        message: action.payload,
        ok: false
      };

    default:
      return state;
  }
}



export default combineReducers({
  loginDetails: postReducer
});
