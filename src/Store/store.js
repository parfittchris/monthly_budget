import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import budgetReducer from '../Reducers/budgetReducer'

const initialState = {};
const middleware = [thunk];

export const store = createStore(budgetReducer, initialState, applyMiddleware(...middleware));

export default store;