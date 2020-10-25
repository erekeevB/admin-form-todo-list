import membersReducer from './membersPage';
import adminReducer from './adminReducer';
import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({

    adminPage: adminReducer,
    members: membersReducer
    
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;