import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {combineReducer} from '../reducer/root_reducer/root_reducer.js';


export const store = createStore(combineReducer, applyMiddleware(thunkMiddleware));
// export const unsubscribe = store.subscribe(()=>{console.log(store.getState())});