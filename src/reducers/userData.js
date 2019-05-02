/**
 * Created by mymac on 02/05/19.
 */
import {
    CHECK_LOGIN_FORM_REQUEST,
    REGISTER_FORM_UPDATE_REQUEST,
    ROUTE_CHANGE,
    FETCH_USER_DATA,
    LOGOUT_USER
} from '../actions/constants'

const initialState = {
    userData: [],
    err: null,
    isLoggedIn: false
};


export default (state = initialState, action) => {
    let userDataCopy = null, userData = null, index = -1, user = null;
    switch (action.type) {
        case FETCH_USER_DATA:
            /*
             * fetch user data using current email
             * */
            userDataCopy = [...state.userData];
            userData = userDataCopy.filter(user => {
                return user.email === state.isLoggedIn
            })
            return {
                ...state,
                user: userData
            };
        case CHECK_LOGIN_FORM_REQUEST:
            userData = action.payload;
            userDataCopy = [...state.userData];
            /*
            * check if any user exists with the payload's email and password using string match
            * */
            user = userDataCopy.filter(user => {
                return user.email === userData.email && user.password === userData.password
            });
            if (userData.email === "" || userData.password === "") {
                return {
                    ...state,
                    err: "Email address or password can't be empty"
                }
            } else if (user.length === 0) {
                return {
                    ...state,
                    err: "Email or password is incorrect"
                }
            }
            return {
                ...state,
                err: "Login successful",
                isLoggedIn: userData.email
            };
        case LOGOUT_USER:
            /*
             * logout user by setting isLoggedIn to false and setting current user to null
             * */
            return {
                ...state,
                err: null,
                isLoggedIn: false,
                user: null
            };
        case ROUTE_CHANGE:
            /*
             * setting all the form errors to null while moving from one route to another
             * */

            return {
                ...state,
                err: null
            };
        case REGISTER_FORM_UPDATE_REQUEST:
            /*
             * check if the user details (with unique email) are already there in the user list or not
             * if Not present insert new user else send error
             * */
            userData = action.payload;
            userDataCopy = [...state.userData];
            index = userDataCopy.findIndex(user => user.email === userData.email)
            if (userData.email == "" || userData.password === "") {
                return {
                    ...state,
                    userData: userDataCopy || [],
                    err: "Email address or password can't be empty"
                }
            } else if (index >= 0) {
                return {
                    ...state,
                    err: "User already exists with current email"
                }
            } else {
                userDataCopy.push(userData);
            }
            return {
                ...state,
                userData: userDataCopy,
                err: "Registration successful you can now login"
            };
        default:
            return state
    }
}