import { REMOVE_TOKEN, SET_TOKEN } from "../Actions/AuthActions";

const initState = {
  token: localStorage.getItem("token"),
};

const authReducer = (state = initState, action) => {
  if (action.type === SET_TOKEN) {
    localStorage.setItem("token", action.payload.token);
    return {
      ...state,
      token: action.payload.token,
    };
  }
  if (action.type === REMOVE_TOKEN) {
    localStorage.removeItem("token");
    return {
      ...state,
      token: null,
    };
  }
  return state;
};

export default authReducer;
