import { REMOVE_TOKEN, SET_TOKEN } from "../Actions/AuthActions";

const initialState = {
  token: localStorage.getItem("token") || null,
  email: localStorage.getItem("email") || "",
};

const authReducer = (state = initialState, action) => {
  if (action.type === SET_TOKEN) {
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("email", action.payload.email);
    return {
      ...state,
      token: action.payload.token,
      email: action.payload.email,
    };
  }
  if (action.type === REMOVE_TOKEN) {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    return {
      ...state,
      token: null,
      email: "",
    };
  }
  return state;
};

export default authReducer;
