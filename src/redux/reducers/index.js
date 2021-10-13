import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";

const reducers = combineReducers({
  allReducers: productsReducer,
})

export default reducers;