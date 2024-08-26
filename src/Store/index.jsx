import { createStore } from "redux";
import authReducer from "./Reducers/AuthReducer";

const store = createStore(authReducer);

export default store;
