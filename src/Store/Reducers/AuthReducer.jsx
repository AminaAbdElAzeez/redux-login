import { REMOVE_TOKEN, SET_TOKEN } from "../Actions/AuthActions";

const initState = {
  token: null,
  username: null,
};

const authReducer = (state = initState, action) => {
  if (action.type === SET_TOKEN) {
    return {
      ...state,
      token: action.payload.token,
      username: action.payload.username,
    };
  } else if (action.type === REMOVE_TOKEN) {
    return {
      ...state,
      token: null,
      username: null,
    };
  }
  return state;
};

export default authReducer;
