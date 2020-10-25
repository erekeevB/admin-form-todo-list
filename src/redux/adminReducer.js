import { getMe, login, logout } from "../api/adminApi";

const SET_AUTH = 'SET_AUTH';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {

    username: '',
    isAuth: 0,
    isFetching: false,
    error: ''

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
        default:
            return state;

    }

}

export const setAuth = (profile) => ({ type: SET_AUTH, profile });

export const toggleFetch = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getSetAuth = () => async (dispatch) => {

    dispatch(toggleFetch(true));

    let data = await getMe()

    dispatch(toggleFetch(false));

    if (!data.error) {
        let profile = {
            username: data.username,
            email: data.email,
            isAuth: 1
        };
        dispatch(setAuth(profile));

    } else {

        console.log(data.error + ' get me')
        dispatch(setAuth({ username: '', isAuth: 0, error: data.error }));

    }

}

export const loginUserThunk = ({username, password}) => (dispatch) => {
    
    login(username, password)
        .then(data => {
            if (!data.error) {

                dispatch(setAuth({username: data.username, isAuth: 1, error: ''}));

            } else {

                console.log(data.error + ' login')
                dispatch(setAuth({ username: '', isAuth: 0, error: data.error }));

            }

        })

}

export const logoutThunk = () => (dispatch) => {
    
    logout()
        .then(data => {

            if (!data.error) {

                dispatch(setAuth({ username: '', isAuth: 0, error: '' }));

            } else {

                console.log(data.error + ' logout')
                dispatch(setAuth({ username: '', isAuth: 0, error: data.error }));

            }

        })

}

export default adminReducer;