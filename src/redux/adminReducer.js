import { login, logout } from "../api/adminApi";
import { setUsers } from "./membersPage";

const SET_AUTH = 'SET_AUTH';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_TOKEN = 'SET_TOKEN';

let initialState = {

    isFetching: false,
    error: '',
    token: ''

}

const adminReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH: {
            return {

                ...state,
                ...action.profile

            }
        }
        case TOGGLE_IS_FETCHING: {

            return {
                ...state,
                isFetching: action.isFetching
            }

        }
        case SET_TOKEN:
            
            return {
                ...state,
                token: action.token
            }

        default:
            return state;

    }

}

export const setAuth = (profile) => ({ type: SET_AUTH, profile });

export const toggleFetch = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getToken = () => ({type: SET_TOKEN, token: localStorage.getItem('token')});

export const loginUserThunk = ({username, password}) => async (dispatch) => {
    const loginpromise = await login(username, password)
        .then(data => {
            
            if (!data.error) {

                debugger
                localStorage.setItem('token', data.key);
                dispatch(setAuth({error: '', token: data.key}));

            } else {

                localStorage.removeItem('token');
                console.log(data.error + ' login')
                dispatch(setAuth({ error: data.error, token: '' }));

            }

        })

    return loginpromise

}

export const logoutThunk = (token) => (dispatch) => {
    
    logout(token)
        .then(data => {

            localStorage.removeItem('token');
            console.log(data.error + ' logout')
            dispatch(setAuth({ error: '', token: '' }));
            dispatch(setUsers([]))

        })

}

export default adminReducer;