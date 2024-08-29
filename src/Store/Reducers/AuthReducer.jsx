import { REMOVE_TOKEN, SET_TOKEN } from "../Actions/AuthActions";

const initialState = {
  token: null,
  email: "",
};

const authReducer = (state = initialState, action) => {
  if (action.type === SET_TOKEN) {
    return {
      ...state,
      token: action.payload.token,
      email: action.payload.email,
    };
  }
  if (action.type === REMOVE_TOKEN) {
    return {
      ...state,
      token: null,
      email: "",
    };
  }
  return state;
};

export default authReducer;
