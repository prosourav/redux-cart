import { createStore } from "redux";
import cartReducer from "../Reducers/CartReducers";

export const store = createStore(cartReducer);
