import adminReducer from './adminReducer';
import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({

    adminPage: adminReducer,
    
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;