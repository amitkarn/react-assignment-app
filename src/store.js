/**
 * Created by mymac on 02/05/19.
 */
import {createStore, applyMiddleware} from 'redux';
import userReducer from './reducers/userData';
import {loadState, saveState} from './localStorage'
import thunk from 'redux-thunk';
/*
 * creating persistent store for storing user details after registration and validating while login
 * */
let persistedState = loadState();

const store = createStore(
    userReducer,
    persistedState,
    applyMiddleware(thunk)
);
store.subscribe(()=> {
    saveState({
        userData: store.getState().userData,
        isLoggedIn: store.getState().isLoggedIn
    })
})
export default store;