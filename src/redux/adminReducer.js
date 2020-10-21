import { login, logout } from "../api/authAPI";

const SET_AUTH = 'SET_AUTH';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {

    id: '',
    login: '',
    email: '',
    isAuth: 0,
    isFetching: false

}

const usersPageReducer = (state = initialState, action) => {

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

export const getSetAuth = () => (dispatch) => {

    dispatch(toggleFetch(true));

    getMe()
        .then((data) => {

            dispatch(toggleFetch(false));

            if (data.resultCode === 0) {

                let profile = {
                    id: data.data.id,
                    login: data.data.login,
                    email: data.data.email,
                    isAuth: 1
                };
                dispatch(setAuth(profile));

            } else {

                dispatch(setAuth({ id: '', login: '', email: '', isAuth: 0 }));

            }

        })

}

export const loginUserThunk = (email, password) => (dispatch) => {

    loginUser(email, password)
        .then(data => {

            debugger
            
            if (data.resultCode === 0 && data.userId === 12166) {

                dispatch(setAuth({ id: data.userId, login: "Dossym", isAuth: 1 }));

            }

        })

}

export const logoutThunk = () => (dispatch) => {

    logout()
        .then(data=>{

            if(data.resultCode === 0){

                dispatch(setAuth({ id: '', login: '', isAuth: 0 }));

            }

        })

}

export default usersPageReducer;