/**
 * Created by mymac on 02/05/19.
 */

import {CHECK_LOGIN_FORM_REQUEST, REGISTER_FORM_UPDATE_REQUEST, ROUTE_CHANGE, FETCH_USER_DATA,LOGOUT_USER} from './constants'

/*
*
* */
const loginUserRequest = (req) => dispatch => {
    dispatch({
        type: CHECK_LOGIN_FORM_REQUEST,
        payload: req
    })
}
const registerUserRequest = (req) => dispatch => {
    dispatch({
        type: REGISTER_FORM_UPDATE_REQUEST,
        payload: req
    })
}
const routeChange = (req) => dispatch => {
    dispatch({
        type: ROUTE_CHANGE,
        payload: req
    })
}
const fetchUserDetails = (req) => dispatch => {
    dispatch({
        type: FETCH_USER_DATA,
        payload: req
    })
}
const logoutUser = (req) => dispatch => {
    dispatch({
        type: LOGOUT_USER,
        payload: req
    })
}
export {
    loginUserRequest,
    registerUserRequest,
    routeChange,
    fetchUserDetails,
    logoutUser
}