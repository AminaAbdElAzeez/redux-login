export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = (token, username) => ({
  type: SET_TOKEN,
  payload: { token, username },
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});
