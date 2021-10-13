import { combineReducers } from 'redux';
import { productsReducer, selectedProductIdReducer } from './productsReducer';

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductIdReducer,
});

export default reducers;
