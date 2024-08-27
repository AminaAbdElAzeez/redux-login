export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = (token, email) => ({
  type: SET_TOKEN,
  payload: {
    token: token,
    email: email,
  },
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});
